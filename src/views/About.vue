<template>
  <div class="max-w-4xl mx-auto space-y-12">
    <!-- About Me Section -->
    <section class="text-center">
      <div class="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full flex items-center justify-center">
        <span class="text-4xl font-bold text-white">م</span>
      </div>
      <h1 class="text-4xl font-bold text-gray-900 mb-6" dir="rtl">نبذة</h1>
    </section>

    <!-- Personal Story Section -->
    <section class="bg-white rounded-lg shadow-md p-8">
      <div class="prose prose-lg max-w-none text-right" dir="rtl">
        <div v-html="aboutContent" class="text-gray-800 leading-relaxed"></div>
      </div>
    </section>

    <!-- Contact Section - Hidden -->
    <!-- <section class="bg-white rounded-lg shadow-md p-8 text-center">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h2>
      <p class="text-gray-600 mb-6">I'm always interested in hearing from fellow developers and tech enthusiasts.</p>
      <div class="flex justify-center space-x-4">
        <a href="https://github.com/imisfer" class="text-gray-600 hover:text-gray-900 transition-colors">
          <span class="sr-only">GitHub</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="mailto:imisfer@gmail.com" class="text-gray-600 hover:text-gray-900 transition-colors">
          <span class="sr-only">Email</span>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </a>
      </div>
    </section> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getPostBySlug } from '@/data/posts'

const aboutContent = ref('')

onMounted(() => {
  const aboutPost = getPostBySlug('about')
  if (aboutPost) {
    aboutContent.value = aboutPost.content
  }
})
</script> 