<template>
  <header class="flex items-center justify-between px-6 py-3 border-b bg-white">
    <!-- Left section: Menu + Search -->
    <div class="flex items-center gap-4 w-full">
      <!-- Sidebar/Menu Icon: matches the icon in your latest image -->
      <button class="p-2 rounded hover:bg-gray-100 flex-shrink-0">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="7" y="7" width="6" height="14" rx="2" stroke="#232B36" stroke-width="2"/>
          <rect x="15" y="7" width="6" height="14" rx="2" stroke="#232B36" stroke-width="2"/>
        </svg>
      </button>

      <!-- Search Bar with soft purple background, icon inside input group as in image 2 -->
      <div class="flex items-center bg-[#f6f6fe] rounded-xl border border-gray-200 px-4 py-2 w-full max-w-xl">
        <svg class="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <input
          type="text"
          placeholder="Search borrowers, cases, agents..."
          class="w-full bg-transparent border-none focus:outline-none text-gray-700 text-sm placeholder:text-[#2d5ca7]"
        />
      </div>
    </div>

    <!-- Right section: Timer + Notification + Settings -->
    <div class="flex items-center gap-6 ml-6">
      <!-- Timer -->
      <div class="flex items-center gap-2 px-6 py-2 rounded-xl bg-green-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="text-green-600 font-mono font-medium text-base">00:15:15</span>
      </div>

      <!-- Notification Bell -->
      <div class="relative">
        <button class="p-2 rounded hover:bg-gray-100 relative">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6 6 0 1 0-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          </svg>
          <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">3</span>
        </button>
      </div>

      <!-- Settings Icon -->
      <button class="p-2 rounded hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      </button>
    </div>
  </header>
</template>