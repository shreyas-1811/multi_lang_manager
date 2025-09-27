<template>
  <div class="p-6 bg-[#faf8ff] min-h-screen">
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <div>
        <h1 class="text-2xl font-bold">Case Assignment</h1>
        <p class="text-gray-500">Assign cases to agents efficiently</p>
      </div>
      <div class="flex gap-3">
        <button class="px-4 py-2 rounded-lg border bg-white hover:bg-gray-50 text-gray-700">
          Import Cases
        </button>
        <button class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow">
          Auto-Assign
        </button>
      </div>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div class="bg-red-50 p-4 rounded-xl border">
        <p class="text-sm text-gray-500 flex justify-between">
          Unassigned Cases <span class="text-red-500">●</span>
        </p>
        <h2 class="text-3xl font-bold mt-2">24</h2>
        <p class="text-gray-500 text-sm">3 new cases</p>
      </div>

      <div class="bg-green-50 p-4 rounded-xl border">
        <p class="text-sm text-gray-500">Assigned Today</p>
        <h2 class="text-3xl font-bold mt-2">18</h2>
        <p class="text-green-600 text-sm">+25% vs yesterday</p>
      </div>

      <div class="bg-blue-50 p-4 rounded-xl border">
        <p class="text-sm text-gray-500">Avg Cases/Agent</p>
        <h2 class="text-3xl font-bold mt-2">12</h2>
        <p class="text-gray-500 text-sm">Optimal: 10-15 cases</p>
      </div>
    </div>

    <!-- Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Available Cases -->
      <div class="col-span-2 bg-white rounded-xl shadow-sm border p-4">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold">Available Cases</h2>
          <span class="text-gray-500 text-sm">6 cases</span>
        </div>

        <!-- Filters -->
        <div class="flex gap-3 mb-4">
          <select class="px-3 py-2 border rounded-lg text-sm">
            <option>All Priorities</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <select class="px-3 py-2 border rounded-lg text-sm">
            <option>All DPD Ranges</option>
            <option>0-30 days</option>
            <option>31-90 days</option>
            <option>90+ days</option>
          </select>
        </div>

        <!-- Cases List -->
        <div class="space-y-3">
          <div
            v-for="caseItem in cases"
            :key="caseItem.name"
            class="flex items-center justify-between border rounded-lg p-4"
          >
            <div>
              <h3 class="font-semibold">{{ caseItem.name }}</h3>
              <p class="text-sm text-gray-500">
                Amount: {{ caseItem.amount }} · DPD: {{ caseItem.dpd }} days
              </p>
              <p class="text-xs text-gray-400">{{ caseItem.bank }}</p>
            </div>
            <span
              class="px-3 py-1 text-xs rounded-full font-medium"
              :class="priorityColors[caseItem.priority]"
            >
              {{ caseItem.priority }}
            </span>
          </div>
        </div>

        <!-- Assign Buttons -->
        <div class="flex gap-3 mt-6">
          <button class="px-4 py-2 rounded-lg border bg-white hover:bg-gray-50">
            Assign Selected
          </button>
          <button class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            Assign All
          </button>
        </div>
      </div>

      <!-- Assign to Agent -->
      <div class="bg-white rounded-xl shadow-sm border p-4">
        <h2 class="text-lg font-semibold mb-4">Assign to Agent</h2>
        <div class="space-y-4">
          <div
            v-for="agent in agents"
            :key="agent.name"
            class="flex items-center justify-between border rounded-lg p-3"
          >
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                {{ agent.initials }}
              </div>
              <div>
                <p class="font-medium">{{ agent.name }}</p>
                <p class="text-sm text-gray-500">
                  Cases: <span :class="agent.cases >= agent.limit ? 'text-red-500' : 'text-green-600'">
                    {{ agent.cases }}/{{ agent.limit }}
                  </span>
                </p>
                <div class="w-32 h-2 bg-gray-200 rounded-full mt-1">
                  <div
                    class="h-2 rounded-full"
                    :class="agent.cases >= agent.limit ? 'bg-red-500' : 'bg-green-500'"
                    :style="{ width: (agent.cases / agent.limit * 100) + '%' }"
                  ></div>
                </div>
              </div>
            </div>
            <button
              class="px-3 py-1 text-sm rounded-lg font-medium"
              :class="agent.cases >= agent.limit
                ? 'bg-gray-200 text-gray-600 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'"
            >
              {{ agent.cases >= agent.limit ? 'Full' : 'Assign' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cases = [
  { name: 'Kavita Mishra', amount: '₹10,312', dpd: 35, bank: 'Canara Bank', priority: 'High' },
  { name: 'Suresh Verma', amount: '₹39,477', dpd: 106, bank: 'Industrial Bank', priority: 'Medium' },
  { name: 'Karthik Verma', amount: '₹53,624', dpd: 121, bank: 'Industrial Bank', priority: 'High' },
  { name: 'Anita Pillai', amount: '₹25,890', dpd: 2, bank: 'SBI Bank', priority: 'Low' },
  { name: 'Suresh Mehta', amount: '₹36,190', dpd: 69, bank: 'Yes Bank', priority: 'Medium' },
  { name: 'Arun Kapoor', amount: '₹64,045', dpd: 164, bank: 'Indian Bank', priority: 'High' },
]

const agents = [
  { name: 'Rahul Kumar', initials: 'RK', cases: 12, limit: 15 },
  { name: 'Priya Sharma', initials: 'PS', cases: 8, limit: 15 },
  { name: 'Amit Singh', initials: 'AS', cases: 15, limit: 15 },
  { name: 'Neha Patel', initials: 'NP', cases: 10, limit: 15 },
  { name: 'Rajesh Verma', initials: 'RV', cases: 6, limit: 15 },
]

const priorityColors = {
  High: 'bg-red-100 text-red-600',
  Medium: 'bg-yellow-100 text-yellow-600',
  Low: 'bg-green-100 text-green-600',
}
</script>
