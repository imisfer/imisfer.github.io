<template>
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <!-- Hero Section -->

    <!-- Featured Posts Section -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center" dir="rtl">أحدث المقالات</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="post in featuredPosts" :key="post.slug" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3 text-right" dir="rtl">
              <router-link :to="`/post/${post.slug}`" class="hover:text-indigo-600 transition-colors">
                {{ post.title }}
              </router-link>
            </h3>
            <p class="text-gray-600 mb-4 text-right" dir="rtl">{{ post.excerpt }}</p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">{{ formatDate(post.timestamp) }}</span>
              <router-link 
                :to="`/post/${post.slug}`" 
                class="text-indigo-600 hover:text-indigo-800 font-medium text-sm"
              >
                اقرأ المزيد →
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Preview Section -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getRecentPosts, type Post } from '@/data/posts'

const featuredPosts = ref<Post[]>([])

onMounted(() => {
  featuredPosts.value = getRecentPosts(3)
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
