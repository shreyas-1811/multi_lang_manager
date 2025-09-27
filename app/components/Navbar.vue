<template>
  <header class="flex items-center justify-between px-6 py-3 border-b bg-white">
    <div class="flex items-center gap-4">
      <button class="p-2 rounded hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 12h18" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        </svg>
      </button>

      <div class="relative w-[540px]">
        <input
          type="text"
          placeholder="Search borrowers, cases, agents..."
          class="w-full pl-4 pr-10 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-300 text-sm"
        />
        <svg class="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 21l-4.35-4.35" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><circle cx="11" cy="11" r="6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
      </div>
    </div>

    <div class="flex items-center gap-4">
      <div class="px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium">⏱ 00:03:25</div>

      <button class="relative p-2 rounded hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6 6 0 1 0-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        </svg>
        <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
      </button>

      <button class="p-2 rounded hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        </svg>
      </button>

      <div class="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">RK</div>
    </div>
  </header>
</template>
