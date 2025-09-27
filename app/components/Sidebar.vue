<script setup>
import {
  HomeIcon,
  UsersIcon,
  ClipboardDocumentListIcon,
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  DocumentTextIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="w-64 h-screen bg-blue-600 text-white flex flex-col">
    <!-- Profile -->
    <div class="p-6 flex items-center space-x-3">
      <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold">
        RK
      </div>
      <div>
        <p class="font-semibold">Rahul Kumar</p>
        <p class="text-sm text-gray-200">MANAGER</p>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 px-4 space-y-2">
      <p class="uppercase text-xs text-gray-300 mb-2">Navigation</p>

      <NuxtLink to="/" class="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-700">
        <HomeIcon class="w-5 h-5" />
        <span>Manager Portal</span>
      </NuxtLink>

      <NuxtLink to="/team" class="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-700">
        <UsersIcon class="w-5 h-5" />
        <span>Team Management</span>
      </NuxtLink>

      <NuxtLink to="/case-assignment" class="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-700">
        <ClipboardDocumentListIcon class="w-5 h-5" />
        <span>Case Assignment</span>
      </NuxtLink>

      <NuxtLink to="/analytics" class="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-700">
        <ChartBarIcon class="w-5 h-5" />
        <span>Team Analytics</span>
      </NuxtLink>

      <NuxtLink to="/chat" class="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-700">
        <ChatBubbleOvalLeftEllipsisIcon class="w-5 h-5" />
        <span>Team Chat</span>
      </NuxtLink>

      <NuxtLink to="/reports" class="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-700">
        <DocumentTextIcon class="w-5 h-5" />
        <span>Reports</span>
      </NuxtLink>
    </nav>

    <!-- Logout -->
    <div class="p-4">
      <button class="flex items-center justify-center w-full space-x-2 px-3 py-2 rounded-lg bg-white text-blue-600 hover:bg-gray-100">
        <ArrowRightOnRectangleIcon class="w-5 h-5" />
        <span>Logout</span>
      </button>
    </div>
  </div>
</template>
