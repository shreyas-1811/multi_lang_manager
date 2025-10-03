<script setup>
import {
  PhoneIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/vue/24/outline'

const hourlyCallVolume = [
  { hour: '09:00', teamA: 45, teamB: 35 },
  { hour: '10:00', teamA: 85, teamB: 45 },
  { hour: '11:00', teamA: 90, teamB: 75 },
  { hour: '12:00', teamA: 70, teamB: 65 },
  { hour: '13:00', teamA: 50, teamB: 40 },
  { hour: '14:00', teamA: 45, teamB: 38 },
  { hour: '15:00', teamA: 140, teamB: 110 },
  { hour: '16:00', teamA: 160, teamB: 130 },
  { hour: '17:00', teamA: 150, teamB: 120 },
  { hour: '18:00', teamA: 105, teamB: 75 }
]

const callSuccessTrend = [
  { hour: '09:00', calls: 35 },
  { hour: '10:00', calls: 52 },
  { hour: '11:00', calls: 67 },
  { hour: '12:00', calls: 54 },
  { hour: '13:00', calls: 62 },
  { hour: '14:00', calls: 76 },
  { hour: '15:00', calls: 95 },
  { hour: '16:00', calls: 135 },
  { hour: '17:00', calls: 120 },
  { hour: '18:00', calls: 85 }
]

const agents = [
  { name: 'Sarah Johnson', team: 'Team Alpha', calls: 156, connected: 124, collections: '$8.5K', ptps: 23, score: 94 },
  { name: 'Mike Chen', team: 'Team Beta', calls: 142, connected: 118, collections: '$7.8K', ptps: 19, score: 91 },
  { name: 'Emily Davis', team: 'Team Alpha', calls: 138, connected: 102, collections: '$6.9K', ptps: 18, score: 87 },
  { name: 'Lisa Anderson', team: 'Team Beta', calls: 128, connected: 94, collections: '$6.2K', ptps: 21, score: 85 },
  { name: 'David Wilson', team: 'Team Gamma', calls: 134, connected: 89, collections: '$5.4K', ptps: 16, score: 82 },
  { name: 'James Rodriguez', team: 'Team Gamma', calls: 119, connected: 87, collections: '$4.8K', ptps: 14, score: 78 }
]
</script>

<template>
  <div class="bg-[#f7f7fc] min-h-screen p-6 pt-3 space-y-5">
    <!-- Top section: title, filter, button -->
    <div class="flex items-center justify-between mb-1">
      <div>
        <h2 class="text-2xl font-bold text-[#222]">Team Performance Analytics</h2>
        <p class="text-gray-400 text-sm mt-1">Real-time insights into team activities and performance metrics</p>
      </div>
      <div class="flex items-center gap-2">
        <select class="rounded-xl border border-[#e3e7ef] bg-white px-3 py-1.5 text-[#222] text-sm font-medium focus:outline-none">
          <option>All Teams</option>
          <option>Team Alpha</option>
          <option>Team Beta</option>
          <option>Team Gamma</option>
        </select>
        <button class="px-3 py-1.5 rounded-xl bg-[#3174f7] text-white font-semibold text-sm flex items-center gap-2 shadow hover:bg-[#2455b6] transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke="#fff" stroke-width="2" d="M12 16v-8m0 0L8 8m4 0l4 0" />
            <path stroke="#fff" stroke-width="2" d="M4 20h16" />
          </svg>
          Download Report
        </button>
      </div>
    </div>

    <!-- Analytics Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="bg-white rounded-xl p-4 shadow flex flex-col gap-1">
        <div class="flex items-center gap-2">
          <span class="bg-[#e4f0fe] rounded-lg p-2">
            <PhoneIcon class="h-6 w-6 text-[#3174f7]" />
          </span>
        </div>
        <div class="flex items-center gap-2 w-full justify-between">
          <div>
            <div class="text-[18px] font-bold text-[#222]">2,456</div>
            <div class="text-gray-400 text-xs font-medium mt-1">+15% vs yesterday</div>
          </div>
          <svg class="h-4 w-4 text-[#44ce6f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M6 12l6-6 6 6" stroke="#44ce6f" stroke-width="2" fill="none"/>
          </svg>
        </div>
      </div>
      <div class="bg-white rounded-xl p-4 shadow flex flex-col gap-1">
        <div class="flex items-center gap-2">
          <span class="bg-[#e4fbe9] rounded-lg p-2">
            <CurrencyDollarIcon class="h-6 w-6 text-[#44ce6f]" />
          </span>
        </div>
        <div class="flex items-center gap-2 w-full justify-between">
          <div>
            <div class="text-[18px] font-bold text-[#222]">$45.2K</div>
            <div class="text-gray-400 text-xs font-medium mt-1">+22% vs target</div>
          </div>
          <svg class="h-4 w-4 text-[#44ce6f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M6 12l6-6 6 6" stroke="#44ce6f" stroke-width="2" fill="none"/>
          </svg>
        </div>
      </div>
      <div class="bg-white rounded-xl p-4 shadow flex flex-col gap-1">
        <div class="flex items-center gap-2">
          <span class="bg-[#fff6e4] rounded-lg p-2">
            <ChartBarIcon class="h-6 w-6 text-[#e88318]" />
          </span>
        </div>
        <div class="flex items-center gap-2 w-full justify-between">
          <div>
            <div class="text-[18px] font-bold text-[#222]">68%</div>
            <div class="text-gray-400 text-xs font-medium mt-1">-3% vs average</div>
          </div>
          <svg class="h-4 w-4 text-[#e04456]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M18 12l-6 6-6-6" stroke="#e04456" stroke-width="2" fill="none"/>
          </svg>
        </div>
      </div>
      <div class="bg-white rounded-xl p-4 shadow flex flex-col gap-1">
        <div class="flex items-center gap-2">
          <span class="bg-[#eceafd] rounded-lg p-2">
            <ClipboardDocumentListIcon class="h-6 w-6 text-[#9258f7]" />
          </span>
        </div>
        <div class="flex items-center gap-2 w-full justify-between">
          <div>
            <div class="text-[18px] font-bold text-[#222]">156</div>
            <div class="text-gray-400 text-xs font-medium mt-1">+8% vs yesterday</div>
          </div>
          <svg class="h-4 w-4 text-[#44ce6f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M6 12l6-6 6 6" stroke="#44ce6f" stroke-width="2" fill="none"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- Chart Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
      <!-- Hourly Call Volume -->
      <div class="bg-white rounded-xl p-4 shadow">
        <div class="text-lg font-bold text-[#222] mb-1">Hourly Call Volume</div>
        <div class="relative h-[250px] w-full pt-2">
          <svg :width="480" :height="200" class="block mx-auto">
            <!-- Y-axis numbers -->
            <text x="26" y="38" font-size="13" fill="#222">160</text>
            <text x="26" y="75" font-size="13" fill="#222">120</text>
            <text x="26" y="112" font-size="13" fill="#222">80</text>
            <text x="32" y="149" font-size="13" fill="#222">40</text>
            <text x="32" y="186" font-size="13" fill="#222">0</text>
            <!-- Y-axis line -->
            <line x1="55" y1="25" x2="55" y2="200" stroke="#222" stroke-width="1.5"/>
            <!-- X-axis line -->
            <line x1="55" y1="200" x2="450" y2="200" stroke="#222" stroke-width="1.5"/>
            <!-- Grid lines -->
            <line v-for="y in [25,62,99,136,173]" :key="y" x1="55" :y1="y" x2="450" :y2="y" stroke="#e3e7ef" stroke-width="1" stroke-dasharray="5 5"/>
            <!-- Bars -->
            <g v-for="(item, i) in hourlyCallVolume" :key="item.hour">
              <rect
                :x="65 + i*38"
                :y="200 - item.teamA"
                width="12"
                :height="item.teamA"
                rx="2"
                fill="#3174f7"
              />
              <rect
                :x="77 + i*38"
                :y="200 - item.teamB"
                width="12"
                :height="item.teamB"
                rx="2"
                fill="#44ce6f"
              />
              <text
                :x="72 + i*38"
                y="220"
                font-size="12"
                fill="#222"
                text-anchor="middle"
              >
                {{ item.hour }}
              </text>
            </g>
          </svg>
        </div>
      </div>
      <!-- Call Success Rate Trend -->
      <div class="bg-white rounded-xl p-4 shadow">
        <div class="text-lg font-bold text-[#222] mb-1">Call Success Rate Trend</div>
        <div class="relative h-[250px] w-full pt-2">
          <svg :width="480" :height="200" class="block mx-auto">
            <!-- Y-axis numbers -->
            <text x="26" y="38" font-size="13" fill="#222">140</text>
            <text x="26" y="75" font-size="13" fill="#222">105</text>
            <text x="32" y="112" font-size="13" fill="#222">70</text>
            <text x="38" y="149" font-size="13" fill="#222">35</text>
            <text x="38" y="186" font-size="13" fill="#222">0</text>
            <!-- Y-axis line -->
            <line x1="55" y1="25" x2="55" y2="200" stroke="#222" stroke-width="1.5"/>
            <!-- X-axis line -->
            <line x1="55" y1="200" x2="450" y2="200" stroke="#222" stroke-width="1.5"/>
            <!-- Grid lines -->
            <line v-for="y in [25,62,99,136,173]" :key="y" x1="55" :y1="y" x2="450" :y2="y" stroke="#e3e7ef" stroke-width="1" stroke-dasharray="5 5"/>
            <!-- Line path -->
            <polyline
              :points="callSuccessTrend.map((p, i) => `${72 + i*38},${200 - ((p.calls-0)*(200/140))}`).join(' ')"
              fill="none"
              stroke="#44ce6f"
              stroke-width="2"
            />
            <!-- Dots -->
            <circle
              v-for="(point, i) in callSuccessTrend"
              :key="i"
              :cx="72 + i*38"
              :cy="200 - ((point.calls-0)*(200/140))"
              r="4.5"
              fill="#44ce6f"
              stroke="#fff"
              stroke-width="1"
            />
            <text
              v-for="(point, i) in callSuccessTrend"
              :key="`label-${i}`"
              :x="72 + i*38"
              y="220"
              font-size="12"
              fill="#222"
              text-anchor="middle"
            >
              {{ point.hour }}
            </text>
          </svg>
        </div>
      </div>
    </div>

    <!-- Agent Ranking Table -->
    <div class="bg-white rounded-2xl p-4 shadow mt-2">
      <div class="flex justify-between items-center mb-2">
        <div class="text-base font-bold text-[#222]">Agent Performance Ranking</div>
        <select class="rounded-xl border border-[#e3e7ef] bg-white px-3 py-1 text-[#222] text-sm font-medium focus:outline-none">
          <option>Sort by Score</option>
          <option>Sort by Calls</option>
          <option>Sort by Collections</option>
        </select>
      </div>
      <table class="w-full text-[13px] text-left">
        <thead>
          <tr>
            <th class="py-3 font-medium text-gray-400">Rank</th>
            <th class="py-3 font-medium text-gray-400">Agent</th>
            <th class="py-3 font-medium text-gray-400">Team</th>
            <th class="py-3 font-medium text-gray-400">Calls</th>
            <th class="py-3 font-medium text-gray-400">Connected</th>
            <th class="py-3 font-medium text-gray-400">Collections</th>
            <th class="py-3 font-medium text-gray-400">PTPs</th>
            <th class="py-3 font-medium text-gray-400">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(agent, idx) in agents" :key="agent.name" class="border-t border-[#e3e7ef]">
            <td class="py-3">
              <span class="inline-block bg-[#eaf2fd] text-[#3174f7] rounded-full w-7 h-7 flex items-center justify-center font-bold text-[13px]">{{ idx + 1 }}</span>
            </td>
            <td class="py-3 font-semibold text-[#222]">{{ agent.name }}</td>
            <td class="py-3">
              <span class="bg-[#f2f4f7] text-[#3174f7] px-3 py-0.5 rounded-full font-medium text-[12px]">{{ agent.team }}</span>
            </td>
            <td class="py-3 text-[#222]">{{ agent.calls }}</td>
            <td class="py-3 text-[#222]">{{ agent.connected }}</td>
            <td class="py-3 text-[#222]">{{ agent.collections }}</td>
            <td class="py-3 text-[#222]">{{ agent.ptps }}</td>
            <td class="py-3">
              <span class="bg-[#3174f7] text-white px-3 py-0.5 rounded-full font-bold text-[12px]">{{ agent.score }}%</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>