<template>
  <div v-if="post" class="max-w-4xl mx-auto">
    <!-- Post Header -->
    <header class="text-center py-12 mb-8">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6" dir="rtl">
        {{ post.title }}
      </h1>
      <div class="flex items-center justify-center space-x-4 text-gray-600">
        <span class="text-lg">{{ formatDate(post.timestamp) }}</span>
        <span class="text-gray-400">•</span>
        <span class="text-lg">قراءة {{ readingTime }} دقيقة</span>
      </div>
    </header>

    <!-- Post Content -->
    <article class="bg-white rounded-lg shadow-lg p-8 mb-8">
      <div 
        class="prose prose-lg max-w-none text-right leading-relaxed" 
        dir="rtl"
        v-html="post.content"
      ></div>
    </article>

    <!-- Navigation -->
    <nav class="flex justify-between items-center py-8">
      <button 
        v-if="previousPost"
        @click="goToPost(previousPost.slug)"
        class="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
      >
        <span>← المقال السابق</span>
        <span class="text-sm">{{ previousPost.title }}</span>
      </button>
      
      <button 
        v-if="nextPost"
        @click="goToPost(nextPost.slug)"
        class="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
      >
        <span class="text-sm">{{ nextPost.title }}</span>
        <span>المقال التالي →</span>
      </button>
    </nav>

    <!-- Back to Blog -->
    <div class="text-center py-8">
      <button 
        @click="goToBlog"
        class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
      >
        العودة إلى المدونة
      </button>
    </div>
  </div>

  <!-- Loading State -->
  <div v-else class="text-center py-20">
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
    <p class="text-gray-600">جاري التحميل...</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getPostBySlug, getAllPosts, type Post } from '@/data/posts'

const route = useRoute()
const router = useRouter()
const post = ref<Post | null>(null)
const allPosts = ref<Post[]>([])

onMounted(() => {
  const slug = route.params.slug as string
  post.value = getPostBySlug(slug)
  allPosts.value = getAllPosts()
  
  if (!post.value) {
    router.push('/blog')
  }
})

const readingTime = computed(() => {
  if (!post.value) return 0
  const wordsPerMinute = 200
  const wordCount = post.value.content.replace(/<[^>]*>/g, '').split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
})

const currentPostIndex = computed(() => {
  if (!post.value) return -1
  return allPosts.value.findIndex(p => p.id === post.value?.id)
})

const previousPost = computed(() => {
  if (currentPostIndex.value <= 0) return null
  return allPosts.value[currentPostIndex.value - 1]
})

const nextPost = computed(() => {
  if (currentPostIndex.value === -1 || currentPostIndex.value >= allPosts.value.length - 1) return null
  return allPosts.value[currentPostIndex.value + 1]
})

function formatDate(timestamp: string): string {
  const date = new Date(timestamp)
  return date.toLocaleDateString('ar-SA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function goToPost(slug: string): void {
  router.push(`/post/${slug}`)
}

function goToBlog(): void {
  router.push('/blog')
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