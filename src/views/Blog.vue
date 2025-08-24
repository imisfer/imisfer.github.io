<template>
  <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4" dir="rtl">المدونة</h1>
      <p class="text-xl text-gray-600" dir="rtl">جميع المقالات والأفكار</p>
    </div>

    <!-- Posts Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      <article 
        v-for="post in paginatedPosts" 
        :key="post.id" 
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <div class="p-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-3 text-right" dir="rtl">
            <router-link :to="`/post/${post.slug}`" class="hover:text-indigo-600 transition-colors">
              {{ post.title }}
            </router-link>
          </h2>
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
      </article>
    </div>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="flex justify-center items-center space-x-2 space-x-reverse">
      <button 
        @click="goToPage(currentPage - 1)"
        :disabled="currentPage === 1"
        class="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        السابق
      </button>
      
      <span class="px-4 py-2 text-sm text-gray-700" dir="rtl">
        صفحة {{ currentPage }} من {{ totalPages }}
      </span>
      
      <button 
        @click="goToPage(currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        التالي
      </button>
    </div>

    <!-- No Posts Message -->
    <div v-if="posts.length === 0" class="text-center py-12">
      <p class="text-gray-500 text-lg" dir="rtl">لا توجد مقالات متاحة حالياً</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { getAllPosts, type Post } from '@/data/posts'

const posts = ref<Post[]>([])
const currentPage = ref(1)
const postsPerPage = 9

onMounted(() => {
  posts.value = getAllPosts()
})

const totalPages = computed(() => Math.ceil(posts.value.length / postsPerPage))

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  const end = start + postsPerPage
  return posts.value.slice(start, end)
})

function goToPage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

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
</style> 