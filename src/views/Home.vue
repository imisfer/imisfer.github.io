<template>
  <div class="space-y-12">
    <!-- Hero Section -->
    <section class="text-center py-16">
      <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Welcome to My Blog
      </h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Exploring technology, development, and everything in between. 
        Join me on this journey of continuous learning and discovery.
      </p>
      <div class="mt-8">
        <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
          Get Started
        </button>
      </div>
    </section>

    <!-- Featured Posts -->
    <section>
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Posts</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article v-for="post in featuredPosts" :key="post.id" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3 text-right" dir="rtl">{{ post.title }}</h3>
            <p class="text-gray-600 mb-4 text-right" dir="rtl">{{ post.excerpt }}</p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">{{ formatDate(post.timestamp) }}</span>
              <button class="text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                اقرأ المزيد →
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="bg-white rounded-lg shadow-md p-8 text-center">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
      <p class="text-gray-600 mb-6">Get the latest posts and updates delivered to your inbox.</p>
      <div class="flex max-w-md mx-auto gap-3">
        <input 
          type="email" 
          placeholder="Enter your email" 
          class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
        <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
          Subscribe
        </button>
      </div>
    </section>
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