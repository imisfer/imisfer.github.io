<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <router-link to="/" class="flex flex-col items-center">
              <span class="text-xs text-gray-400 font-medium leading-none" style="font-size: 1rem; transform: translateY(15px);">مدونة</span>
              <span class="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors leading-none">مســـــــفر</span>
            </router-link>
          </div>
          
          <div class="flex items-center space-x-4 space-x-reverse">
            <router-link
              to="/"
              class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              الرئيسية
            </router-link>
            <router-link
              to="/blog"
              class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              المدونة
            </router-link>
            <router-link
              to="/about"
              class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              نبذة
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8 mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-gray-300">&copy; 2024 مســـــــفر. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Component logic
</script>

<style>
#app {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
</style> 