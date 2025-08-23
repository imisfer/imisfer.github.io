<template>
  <div class="max-w-6xl mx-auto space-y-8">
    <!-- Header -->
    <section class="text-center py-12">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        المدونة
      </h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        مقالات عن الحياة، الفلسفة، ريادة الأعمال، والتطوير الشخصي
      </p>
    </section>

    <!-- Posts Grid -->
    <section>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article 
          v-for="post in paginatedPosts" 
          :key="post.id" 
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          @click="viewPost(post.slug)"
        >
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3 text-right" dir="rtl">
              {{ post.title }}
            </h3>
            <p class="text-gray-600 mb-4 text-right leading-relaxed" dir="rtl">
              {{ post.excerpt }}
            </p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">
                {{ formatDate(post.timestamp) }}
              </span>
              <button class="text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                اقرأ المزيد →
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Pagination -->
    <section v-if="totalPages > 1" class="flex justify-center">
      <div class="flex space-x-2">
        <button 
          v-for="page in totalPages" 
          :key="page"
          @click="currentPage = page"
          :class="[
            'px-4 py-2 rounded-lg font-medium transition-colors',
            currentPage === page 
              ? 'bg-indigo-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
        >
          {{ page }}
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getAllPosts, type Post } from '@/data/posts'

const router = useRouter()
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

function formatDate(timestamp: string): string {
  const date = new Date(timestamp)
  return date.toLocaleDateString('ar-SA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function viewPost(slug: string): void {
  router.push(`/post/${slug}`)
}
</script>

<style scoped>
/* RTL support for Arabic text */
[dir="rtl"] {
  text-align: right;
}
</style> 