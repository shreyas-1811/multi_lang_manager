<script setup>
import {
  CurrencyDollarIcon,
  ChartBarIcon,
  UsersIcon,
  ArrowTrendingUpIcon,
  ClipboardDocumentListIcon,
  CalendarDaysIcon,
  EyeIcon,
  ShareIcon,
  ArrowDownTrayIcon,
  ClockIcon
} from '@heroicons/vue/24/outline'

const categories = [
  { name: 'All Reports', count: 8 },
  { name: 'Collections', count: 3 },
  { name: 'Performance', count: 2 },
  { name: 'Operations', count: 1 },
  { name: 'Quality', count: 1 },
  { name: 'Compliance', count: 1 }
]

const reports = [
  {
    icon: CurrencyDollarIcon,
    title: 'Daily Collection Report',
    label: 'Auto',
    labelColor: 'bg-[#eafbe7] text-[#1aad4b]',
    desc: 'Summary of daily collections across all teams with performance insights',
    updated: 'Updated 2 hours ago',
    frequency: 'Daily at 6:00 PM',
    size: '2.4 MB'
  },
  {
    icon: ChartBarIcon,
    title: 'Agent Performance Report',
    label: 'System',
    labelColor: 'bg-[#eaf2fd] text-[#3174f7]',
    desc: 'Detailed performance metrics for all agents including call rates and PTPs',
    updated: 'Updated 1 hour ago',
    frequency: 'Daily at 9:00 AM',
    size: '1.8 MB'
  },
  {
    icon: UsersIcon,
    title: 'Team Productivity Analysis',
    label: 'Auto',
    labelColor: 'bg-[#eafbe7] text-[#1aad4b]',
    desc: 'Weekly analysis of team productivity and efficiency metrics',
    updated: 'Updated 5 hours ago',
    frequency: 'Weekly on Monday',
    size: '3.2 MB'
  },
  {
    icon: ClipboardDocumentListIcon,
    title: 'Case Assignment Summary',
    label: 'System',
    labelColor: 'bg-[#eaf2fd] text-[#3174f7]',
    desc: 'Overview of case assignments and distribution across agents',
    updated: 'Updated 30 minutes ago',
    frequency: 'Every 4 hours',
    size: '1.1 MB'
  },
  {
    icon: ArrowTrendingUpIcon,
    title: 'Monthly Collections Trend',
    label: 'Auto',
    labelColor: 'bg-[#eafbe7] text-[#1aad4b]',
    desc: 'Month-over-month collection trends and comparative analysis',
    updated: 'Updated 3 days ago',
    frequency: 'Monthly on 1st',
    size: '4.7 MB'
  },
  {
    icon: ChartBarIcon,
    title: 'Call Quality Assessment',
    label: 'Manual',
    labelColor: 'bg-[#fff6e4] text-[#e88318]',
    desc: 'Evaluation of call quality metrics and customer interaction scores',
    updated: 'Updated Generating...',
    frequency: 'Weekly on Friday',
    size: '2.1 MB'
  },
  {
    icon: ClipboardDocumentListIcon,
    title: 'Compliance Audit Report',
    label: 'System',
    labelColor: 'bg-[#eaf2fd] text-[#3174f7]',
    desc: 'Regulatory compliance status and audit trail documentation',
    updated: 'Updated 1 day ago',
    frequency: 'Monthly on 15th',
    size: '5.3 MB'
  },
  {
    icon: ArrowTrendingUpIcon,
    title: 'Recovery Rate Analysis',
    label: 'Auto',
    labelColor: 'bg-[#eafbe7] text-[#1aad4b]',
    desc: 'Analysis of recovery rates by agent, team, and case type',
    updated: 'Updated 6 hours ago',
    frequency: 'Daily at 8:00 PM',
    size: '2.9 MB'
  }
]
</script>

<template>
  <div class="bg-[#f7f7fc] min-h-screen p-6 pt-3 space-y-6">
    <!-- Title and Actions -->
    <div class="flex items-center justify-between mb-1">
      <div>
        <h2 class="text-2xl font-extrabold text-[#222]">Reports Center</h2>
        <p class="text-[#7c8db5] text-base mt-1">View, download, and manage all your reports</p>
      </div>
      <div class="flex items-center gap-3">
        <button class="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#e3e7ef] text-[#222] font-semibold text-sm shadow hover:bg-[#f1f5fa] transition">
          <CalendarDaysIcon class="w-5 h-5 text-[#7c8db5]" />
          Schedule Reports
        </button>
        <button class="px-4 py-2 rounded-xl bg-[#3174f7] text-white font-semibold text-sm shadow hover:bg-[#2455b6] transition">
          + Create Report
        </button>
      </div>
    </div>
    <!-- Search box and filter -->
    <div class="bg-white rounded-2xl flex items-center px-4 py-2 gap-4 shadow mb-2">
      <input
        type="text"
        class="flex-1 bg-transparent text-[15px] text-[#222] focus:outline-none"
        placeholder="Search reports by title or description..."
      />
      <button class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#f7f7fc] border border-[#e3e7ef] text-[#222] font-semibold text-sm shadow hover:bg-[#f1f5fa] transition">
        <ChartBarIcon class="w-4 h-4 text-[#7c8db5]" />
        Filter
      </button>
    </div>
    <!-- Tabs -->
    <div class="flex gap-2 mt-1">
      <template v-for="cat in categories" :key="cat.name">
        <button :class="[
            'px-4 py-1.5 rounded-xl font-semibold text-[14px] transition',
            cat.name === 'All Reports'
              ? 'bg-white text-[#222] shadow border border-[#e3e7ef]'
              : 'bg-[#f7f7fc] text-[#7c8db5]'
          ]">
          {{ cat.name }}
          <span v-if="cat.count"
            class="ml-2 px-2 py-0.5 rounded-lg bg-[#eceafd] text-[#3174f7] font-bold text-[12px]">
            {{ cat.count }}
          </span>
        </button>
      </template>
    </div>

    <!-- Reports Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <template v-for="(r, i) in reports" :key="r.title">
        <div class="bg-white rounded-2xl shadow px-5 py-4 flex flex-col justify-between min-h-[230px]">
          <div class="flex items-start gap-4">
            <div class="flex items-center justify-center w-9 h-9 rounded-xl bg-[#eaf2fd]">
              <component :is="r.icon" class="w-6 h-6 text-[#3174f7]" />
            </div>
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="text-[16px] font-bold text-[#222]">{{ r.title }}</span>
                <span :class="['px-2 py-0.5 rounded-lg font-semibold text-[11px]', r.labelColor]">{{ r.label }}</span>
              </div>
              <div class="text-[#25396f] text-[13px] font-normal mb-2">{{ r.desc }}</div>
            </div>
          </div>
          <div class="flex gap-4 mb-2 mt-3 text-[12px]">
            <div class="flex items-center gap-2 text-[#1aad4b]" v-if="r.label === 'Auto' || r.label === 'System'">
              <ClockIcon class="w-3.5 h-3.5" />
              <span class="font-medium text-[#1aad4b]">{{ r.updated }}</span>
            </div>
            <div class="flex items-center gap-2 text-[#e88318]" v-if="r.label === 'Manual'">
              <ClockIcon class="w-3.5 h-3.5" />
              <span class="font-medium text-[#e88318]">{{ r.updated }}</span>
            </div>
            <div class="flex items-center gap-2 text-[#7c8db5]">
              <CalendarDaysIcon class="w-3.5 h-3.5" />
              <span>{{ r.frequency }}</span>
            </div>
            <div class="flex items-center gap-2 text-[#7c8db5]">
              <ClipboardDocumentListIcon class="w-3.5 h-3.5" />
              <span>{{ r.size }}</span>
            </div>
          </div>
          <div class="flex gap-3 justify-start mt-2">
            <button class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f7f7fc] text-[#222] font-semibold text-[12px] shadow hover:bg-[#eceafd] transition">
              <EyeIcon class="w-4 h-4 text-[#7c8db5]" />
              View
            </button>
            <button class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f7f7fc] text-[#222] font-semibold text-[12px] shadow hover:bg-[#eceafd] transition">
              <ArrowDownTrayIcon class="w-4 h-4 text-[#7c8db5]" />
              Download
            </button>
            <button class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f7f7fc] text-[#222] font-semibold text-[12px] shadow hover:bg-[#eceafd] transition">
              <ShareIcon class="w-4 h-4 text-[#7c8db5]" />
              Share
            </button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>