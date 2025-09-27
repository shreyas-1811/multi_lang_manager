<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main content -->
    <div class="flex-1 flex flex-col">
      <!-- Navbar -->
      <Navbar />

      <!-- Page content -->
      <main class="flex-1 p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '~/components/Sidebar.vue'
import Navbar from '~/components/Navbar.vue'
</script>
