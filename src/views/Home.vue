<template>
  <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <!-- Hero Section -->
    <section class="text-center mb-16">
      <h1 class="text-5xl font-bold text-gray-900 mb-6" dir="rtl">مرحباً بكم في مدونتي</h1>
      <p class="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8" dir="rtl">
        مكان للكتابة والتأمل في الحياة.
      </p>
      <div class="flex justify-center space-x-4 space-x-reverse">
        <router-link
          to="/blog"
          class="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          اقرأ المدونة
        </router-link>
        <router-link
          to="/about"
          class="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
        >
          تعرف علي
        </router-link>
      </div>
    </section>

    <!-- Featured Posts Section -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center" dir="rtl">أحدث المقالات</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article v-for="post in featuredPosts" :key="post.id" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3 text-right" dir="rtl">
              <router-link :to="`/post/${post.slug}`" class="hover:text-indigo-600 transition-colors">
                {{ post.title }}
              </router-link>
            </h3>
            <p class="text-gray-600 mb-4 text-right" dir="rtl">{{ post.excerpt }}</p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">{{ formatDate(post.timestamp) }}</span>
              <router-link :to="`/post/${post.slug}`" class="text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                اقرأ المزيد →
              </router-link>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Newsletter Section - Hidden -->
    <!-- <section class="bg-white rounded-lg shadow-md p-8 text-center">
      <h2 class="text-2xl font-bold text-gray-900 mb-4" dir="rtl">اشترك في النشرة البريدية</h2>
      <p class="text-gray-600 mb-6" dir="rtl">احصل على أحدث المقالات والأفكار مباشرة في بريدك الإلكتروني</p>
      <div class="max-w-md mx-auto">
        <div class="flex space-x-2 space-x-reverse">
          <input
            type="email"
            placeholder="أدخل بريدك الإلكتروني"
            class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            dir="rtl"
          />
          <button class="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
            اشتراك
          </button>
        </div>
      </div>
    </section> -->
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