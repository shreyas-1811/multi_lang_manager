<template>
  <div class="p-6 bg-[#f7f7fc] min-h-screen">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <div>
        <h1 class="text-2xl font-bold">Team Management</h1>
        <p class="text-gray-500">Monitor and manage your teams and agents</p>
      </div>
      <div class="flex gap-3">
        <button class="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100 flex items-center gap-2">
          <i class="ri-file-download-line text-lg"></i>
          Export Report
        </button>
        <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <i class="ri-user-add-line text-lg"></i>
          Add Agent
        </button>
      </div>
    </div>

    <!-- Team Overview -->
    <h2 class="text-lg font-semibold mb-3">Team Overview</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <!-- Team Alpha -->
      <div class="bg-white rounded-lg p-4 shadow-sm border">
        <div class="flex justify-between items-center mb-2">
          <h3 class="font-bold text-lg flex items-center gap-2">
            <i class="ri-team-line text-blue-500"></i>
            Team Alpha
          </h3>
          <span class="text-xs bg-gray-100 px-2 py-1 rounded">8 agents</span>
        </div>
        <div class="flex gap-6 mb-4 text-sm">
          <div class="flex flex-col items-center">
            <span class="text-green-600 font-semibold">5</span>
            <span class="text-gray-500">Active</span>
          </div>
          <div class="flex flex-col items-center">
            <span class="text-orange-500 font-semibold">2</span>
            <span class="text-gray-500">On Break</span>
          </div>
          <div class="flex flex-col items-center">
            <span class="text-gray-500 font-semibold">1</span>
            <span class="text-gray-500">Offline</span>
          </div>
        </div>
        <p class="text-sm text-gray-500 mb-1">Target Achievement</p>
        <div class="w-full bg-gray-200 h-2 rounded-full">
          <div class="bg-blue-600 h-2 rounded-full w-[75%]"></div>
        </div>
        <p class="text-right text-sm font-semibold text-gray-700">75%</p>
      </div>

      <!-- Team Beta -->
      <div class="bg-white rounded-lg p-4 shadow-sm border">
        <div class="flex justify-between items-center mb-2">
          <h3 class="font-bold text-lg flex items-center gap-2">
            <i class="ri-team-line text-blue-500"></i>
            Team Beta
          </h3>
          <span class="text-xs bg-gray-100 px-2 py-1 rounded">6 agents</span>
        </div>
        <div class="flex gap-6 mb-4 text-sm">
          <div class="flex flex-col items-center">
            <span class="text-green-600 font-semibold">4</span>
            <span class="text-gray-500">Active</span>
          </div>
          <div class="flex flex-col items-center">
            <span class="text-orange-500 font-semibold">1</span>
            <span class="text-gray-500">On Break</span>
          </div>
          <div class="flex flex-col items-center">
            <span class="text-gray-500 font-semibold">1</span>
            <span class="text-gray-500">Offline</span>
          </div>
        </div>
        <p class="text-sm text-gray-500 mb-1">Target Achievement</p>
        <div class="w-full bg-gray-200 h-2 rounded-full">
          <div class="bg-blue-600 h-2 rounded-full w-[82%]"></div>
        </div>
        <p class="text-right text-sm font-semibold text-gray-700">82%</p>
      </div>
    </div>

    <!-- Agent Status Board -->
    <h2 class="text-lg font-semibold mb-3">Agent Status Board</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div
        v-for="(agent, index) in agents"
        :key="index"
        class="bg-white rounded-lg p-4 shadow-sm border flex flex-col"
      >
        <div class="flex items-center gap-3 mb-2">
          <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
            {{ agent.initials }}
          </div>
          <div>
            <h4 class="font-semibold text-gray-800">{{ agent.name }}</h4>
            <p class="text-sm text-gray-500">{{ agent.team }}</p>
          </div>
        </div>
        <span
          class="self-start px-3 py-1 text-xs font-semibold rounded-full mb-3"
          :class="agent.statusClass"
        >
          {{ agent.status }}
        </span>
        <p class="text-sm text-gray-500">Status: <span class="text-gray-700">{{ agent.detail }}</span></p>
        <p class="text-sm text-gray-500 mb-3">Call: <span class="text-gray-700">{{ agent.call }}</span></p>
        <div class="flex gap-3 mt-auto text-gray-500">
          <i class="ri-phone-line cursor-pointer hover:text-gray-700"></i>
          <i class="ri-message-2-line cursor-pointer hover:text-gray-700"></i>
          <i class="ri-more-2-fill cursor-pointer hover:text-gray-700"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const agents = [
  { initials: "RK", name: "Rahul Kumar", team: "Team Alpha", status: "Available", detail: "Active now", call: "2:45 mins", statusClass: "bg-green-100 text-green-700" },
  { initials: "PS", name: "Priya Sharma", team: "Team Alpha", status: "Available", detail: "Active now", call: "1:23 mins", statusClass: "bg-green-100 text-green-700" },
  { initials: "AS", name: "Amit Singh", team: "Team Alpha", status: "On Break", detail: "5 mins ago", call: "Break - 10 mins", statusClass: "bg-orange-100 text-orange-700" },
  { initials: "NP", name: "Neha Patel", team: "Team Beta", status: "Available", detail: "Active now", call: "3:12 mins", statusClass: "bg-green-100 text-green-700" },
  { initials: "RV", name: "Rajesh Verma", team: "Team Beta", status: "Offline", detail: "2 hours ago", call: "Offline", statusClass: "bg-gray-100 text-gray-700" },
  { initials: "KG", name: "Kavita Gupta", team: "Team Beta", status: "Available", detail: "Active now", call: "4:56 mins", statusClass: "bg-green-100 text-green-700" },
  { initials: "SM", name: "Suresh Mehta", team: "Team Alpha", status: "Available", detail: "Active now", call: "1:45 mins", statusClass: "bg-green-100 text-green-700" },
  { initials: "AD", name: "Anita Desai", team: "Team Alpha", status: "On Break", detail: "3 mins ago", call: "Break - 5 mins", statusClass: "bg-orange-100 text-orange-700" },
];
</script>

<style scoped>
/* Ensure font & spacing matches your design */
body {
  font-family: 'Inter', sans-serif;
}
</style>
