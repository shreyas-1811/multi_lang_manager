<script setup>
import StatsCard from '~/components/StatsCard.vue'
import {
  UsersIcon,
  PhoneIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  EyeIcon
} from '@heroicons/vue/24/outline'

const agents = [
  { name: 'Rahul Kumar', status: 'Active', calls: 47, connected: 32, ptps: 8, amount: '₹2.5L', productivity: 85 },
  { name: 'Priya Sharma', status: 'Active', calls: 52, connected: 38, ptps: 12, amount: '₹3.1L', productivity: 92 },
  { name: 'Amit Singh', status: 'Break', calls: 31, connected: 22, ptps: 5, amount: '₹1.8L', productivity: 71 },
  { name: 'Neha Patel', status: 'Active', calls: 45, connected: 35, ptps: 9, amount: '₹2.8L', productivity: 88 },
  { name: 'Rajesh Verma', status: 'Offline', calls: 28, connected: 18, ptps: 3, amount: '₹1.2L', productivity: 64 }
]
</script>

<template>
  <!-- Reduced top padding and spacing to reduce space between navbar and welcome message -->
  <div class="p-2 space-y-2">
    <!-- Welcome -->
    <h2 class="text-2xl font-bold">Welcome back, Manager!</h2>
    <p class="text-gray-500">Here's your overview for today</p>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatsCard title="Active Agents" value="12" change="+2" positive>
        <UsersIcon class="w-6 h-6 text-purple-500" />
      </StatsCard>
      <StatsCard title="Team Calls" value="847" change="+15%" positive>
        <PhoneIcon class="w-6 h-6 text-green-500" />
      </StatsCard>
      <StatsCard title="Team Collection" value="₹45.2L" change="+22%" positive>
        <CurrencyDollarIcon class="w-6 h-6 text-yellow-500" />
      </StatsCard>
      <StatsCard title="Resolution Rate" value="78%" change="-5%" :positive="false">
        <ChartBarIcon class="w-6 h-6 text-red-500" />
      </StatsCard>
    </div>

    <!-- Team Performance Overview -->
    <div class="bg-white shadow rounded-xl p-6">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold">Team Performance Overview</h3>
        <div class="space-x-2">
          <button class="px-3 py-1 text-sm rounded-lg bg-blue-500 text-white">Today</button>
          <button class="px-3 py-1 text-sm rounded-lg bg-gray-100">This Week</button>
          <button class="px-3 py-1 text-sm rounded-lg bg-gray-100">This Month</button>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left border-separate border-spacing-y-4">
          <thead class="bg-gray-50 text-gray-600">
            <tr>
              <th class="p-4 font-normal">Agent Name</th>
              <th class="p-4 font-normal">Status</th>
              <th class="p-4 font-normal">Calls Made</th>
              <th class="p-4 font-normal">Connected</th>
              <th class="p-4 font-normal">PTPs</th>
              <th class="p-4 font-normal">Amount Collected</th>
              <th class="p-4 font-normal">Productivity</th>
              <th class="p-4 font-normal">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="agent in agents" :key="agent.name">
              <td class="p-4 font-bold">{{ agent.name }}</td>
              <td class="p-4">
                <span
                  :class="{
                    'px-2 py-1 rounded-full text-xs font-medium': true,
                    'bg-green-100 text-green-700': agent.status === 'Active',
                    'bg-orange-100 text-orange-700': agent.status === 'Break',
                    'bg-gray-100 text-gray-700': agent.status === 'Offline'
                  }"
                >
                  {{ agent.status }}
                </span>
              </td>
              <td class="p-4">{{ agent.calls }}</td>
              <td class="p-4">{{ agent.connected }}</td>
              <td class="p-4">{{ agent.ptps }}</td>
              <td class="p-4">{{ agent.amount }}</td>
              <td class="p-4">
                <span :class="agent.productivity >= 80 ? 'text-green-600' : agent.productivity >= 70 ? 'text-orange-600' : 'text-red-600'">
                  {{ agent.productivity }}%
                </span>
              </td>
              <td class="p-4">
                <EyeIcon class="w-5 h-5 text-gray-500 cursor-pointer" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>