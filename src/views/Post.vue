<template>
  <div class="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <!-- Post Header -->
    <header class="mb-8 text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4" dir="rtl">{{ post?.title }}</h1>
      <div class="flex items-center justify-center space-x-4 space-x-reverse text-gray-600">
        <span>{{ formatDate(post?.timestamp) }}</span>
        <span>•</span>
        <span>{{ readingTime }} دقيقة قراءة</span>
      </div>
    </header>

    <!-- Post Content -->
    <article v-if="post" class="bg-white rounded-lg shadow-md p-8 mb-8">
      <div class="prose prose-lg max-w-none text-right" dir="rtl" v-html="post.content"></div>
    </article>

    <!-- Navigation -->
    <div v-if="post" class="flex justify-between items-center bg-white rounded-lg shadow-md p-6">
      <div v-if="previousPost" class="text-left">
        <router-link 
          :to="`/post/${previousPost.slug}`" 
          class="group flex items-center space-x-2 space-x-reverse text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          <span class="text-sm font-medium">← المقال السابق</span>
          <span class="text-sm group-hover:underline">{{ previousPost.title }}</span>
        </router-link>
      </div>
      
      <div v-if="nextPost" class="text-right">
        <router-link 
          :to="`/post/${nextPost.slug}`" 
          class="group flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          <span class="text-sm group-hover:underline">{{ nextPost.title }}</span>
          <span class="text-sm font-medium">المقال التالي →</span>
        </router-link>
      </div>
    </div>

    <!-- Back to Blog -->
    <div class="text-center mt-8">
      <router-link 
        to="/blog" 
        class="inline-flex items-center space-x-2 space-x-reverse text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
      >
        <span>← العودة إلى المدونة</span>
      </router-link>
    </div>

    <!-- Loading State -->
    <div v-if="!post" class="text-center py-12">
      <p class="text-gray-500 text-lg" dir="rtl">جاري التحميل...</p>
    </div>

    <!-- Error State -->
    <div v-if="error" class="text-center py-12">
      <p class="text-red-500 text-lg" dir="rtl">لم يتم العثور على المقال</p>
      <router-link to="/blog" class="text-indigo-600 hover:text-indigo-800 mt-4 inline-block">
        العودة إلى المدونة
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getAllPosts, getPostBySlug, allPosts, type Post } from '@/data/posts'

const route = useRoute()
const post = ref<Post | null>(null)
const error = ref(false)

// Function to load post by slug
function loadPost(slug: string) {
  if (slug) {
    const foundPost = getPostBySlug(slug)
    if (foundPost) {
      post.value = foundPost
      error.value = false
    } else {
      error.value = true
      post.value = null
    }
  }
}

onMounted(() => {
  const slug = route.params.slug as string
  loadPost(slug)
})

// Watch for route changes to reload post when navigating between posts
watch(() => route.params.slug, (newSlug) => {
  if (newSlug) {
    loadPost(newSlug as string)
  }
})

const readingTime = computed(() => {
  if (!post.value) return 0
  
  const wordsPerMinute = 200
  const wordCount = post.value.content.replace(/<[^>]*>/g, '').split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
})

// Use allPosts to include the about page for navigation
const postsForNavigation = computed(() => allPosts)

const currentIndex = computed(() => {
  if (!post.value) return -1
  return postsForNavigation.value.findIndex(p => p.slug === post.value?.slug)
})

const previousPost = computed(() => {
  if (currentIndex.value <= 0) return null
  return postsForNavigation.value[currentIndex.value - 1]
})

const nextPost = computed(() => {
  if (currentIndex.value === -1 || currentIndex.value >= postsForNavigation.value.length - 1) return null
  return postsForNavigation.value[currentIndex.value + 1]
})

function formatDate(timestamp: string): string {
  const date = new Date(timestamp)
  return date.toLocaleDateString('ar-SA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
/* RTL support for Arabic text */
[dir="rtl"] {
  text-align: right;
}

/* Custom prose styles for Arabic content */
:deep(.prose) {
  font-family: 'Noto Sans Arabic', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

:deep(.prose p) {
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

:deep(.prose strong) {
  font-weight: 700;
  color: #1f2937;
}

:deep(.prose img) {
  border-radius: 0.5rem;
  margin: 2rem auto;
  display: block;
  max-width: 100%;
  height: auto;
}
</style> 