<script setup>
import { ref } from 'vue'

const teams = [
  {
    name: "Team Alpha",
    members: 12,
    online: true,
    time: "10:30 AM",
    unread: 3,
    avatar: "TA",
    lastUser: "Rahul Kumar",
    lastMsg: "PTP confirmed for ₹45,000",
    messages: [
      { from: "Rahul Kumar", avatar: "RK", type: "left", text: "Just secured a PTP of ₹45,000 from Rajesh Sharma!", time: "10:30 AM" },
      { from: "You", avatar: "You", type: "right", text: "Great work Rahul! Make sure to set a reminder for follow-up.", time: "10:32 AM" },
      { from: "Sarah Johnson", avatar: "SJ", type: "left", text: "Congratulations! That's a significant amount. What was your approach?", time: "10:35 AM" },
      { from: "Rahul Kumar", avatar: "RK", type: "left", text: "Thanks! I focused on understanding his payment capacity and offered a flexible repayment plan. Building rapport was key.", time: "10:38 AM" }
    ]
  },
  {
    name: "Priya Singh",
    members: 1,
    online: true,
    time: "9:45 AM",
    unread: 0,
    avatar: "PS",
    lastUser: "Priya Singh",
    lastMsg: "Need help with case #2456",
    messages: [
      { from: "Priya Singh", avatar: "PS", type: "left", text: "Hi, I need some guidance on case #2456. The customer is asking for legal documentation.", time: "9:45 AM" },
      { from: "You", avatar: "You", type: "right", text: "Sure! Can you share more details about what specific documentation they're requesting?", time: "9:47 AM" }
    ]
  },
  {
    name: "Team Beta",
    members: 8,
    online: true,
    time: "Yesterday",
    unread: 1,
    avatar: "TB",
    lastUser: "Mike Chen",
    lastMsg: "Daily target achieved!",
    messages: []
  },
  {
    name: "David Wilson",
    members: 1,
    online: false,
    time: "Yesterday",
    unread: 0,
    avatar: "DW",
    lastUser: "David Wilson",
    lastMsg: "Thanks for the feedback",
    messages: []
  },
  {
    name: "Team Gamma",
    members: 15,
    online: true,
    time: "2 days ago",
    unread: 0,
    avatar: "TG",
    lastUser: "Lisa Anderson",
    lastMsg: "Weekly report submitted",
    messages: []
  }
]

const selectedIndex = ref(0)
const input = ref('')

function selectTeam(idx) {
  selectedIndex.value = idx
}

function sendMessage() {
  const msg = input.value.trim()
  if (msg) {
    teams[selectedIndex.value].messages.push({
      from: "You",
      avatar: "You",
      type: "right",
      text: msg,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    })
    input.value = ''
  }
}
</script>

<template>
  <div class="min-h-screen bg-[#f7f7fc] flex flex-col">
    <div class="flex flex-1 h-[calc(100vh-64px)] items-stretch">
      <!-- Sidebar -->
      <div class="w-[340px] min-w-[340px] bg-white border-r border-[#eceafd] flex flex-col">
        <div class="pt-1 pb-1 px-4">
          <input
            type="text"
            placeholder="Search conversations..."
            class="w-full rounded-xl bg-[#f7f7fc] border border-[#e3e7ef] px-5 py-1 text-[15px] text-[#25396f] font-normal focus:outline-none"
          />
        </div>
        <div class="flex-1 overflow-y-auto pb-1">
          <template v-for="(team, idx) in teams" :key="team.name">
            <div
              @click="selectTeam(idx)"
              :class="[
                'flex items-center gap-3 px-4 py-4 cursor-pointer transition',
                selectedIndex === idx ? 'bg-[#eaf2fd]' : ''
              ]"
            >
              <div class="relative">
                <span class="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-[18px] bg-[#3174f7]">{{ team.avatar }}</span>
                <span v-if="team.online" class="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-[#1aad4b] border-2 border-white"></span>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-[15px] text-[#25396f] leading-none truncate">{{ team.name }}</span>
                  <span class="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#7c8db5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 20h5V4H2v16h5" stroke="#7c8db5" stroke-width="2"/></svg>
                    <span class="text-[#7c8db5] text-[13px] font-medium">{{ team.members }}</span>
                  </span>
                  <span v-if="team.unread" class="ml-2 rounded-full px-2 py-0.5 bg-[#3174f7] text-white text-xs font-bold">{{ team.unread }}</span>
                </div>
                <div class="text-[13px] font-semibold text-[#7c8db5] truncate">{{ team.lastUser }}: <span class="font-normal text-[#7c8db5]">{{ team.lastMsg }}</span></div>
                <div class="flex items-center justify-between mt-1">
                  <span class="text-xs text-[#7c8db5]">{{ team.time }}</span>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
      <!-- Chat Area -->
      <div class="flex-1 bg-[#f7f7fc] flex flex-col relative">
        <!-- Header -->
        <div class="flex items-center justify-between px-8 py-5 border-b border-[#eceafd] bg-white">
          <div class="flex items-center gap-4">
            <span class="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-[18px] bg-[#3174f7]">{{ teams[selectedIndex].avatar }}</span>
            <div>
              <div class="font-bold text-[18px] text-[#25396f] leading-none">{{ teams[selectedIndex].name }}</div>
              <div class="text-[13px] text-[#7c8db5] font-medium">
                {{ teams[selectedIndex].online ? (teams[selectedIndex].members + ' members online') : 'Offline' }}
              </div>
            </div>
          </div>
          <div class="flex items-center gap-5">
            <button><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-[#7c8db5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M22 6.5a2.5 2.5 0 0 0-5 0c0 .9.5 1.7 1.3 2.2-.9.6-1.5 1.6-1.3 2.7.2 1.5 1.6 2.6 3.1 2.6 1.7 0 3-1.4 3-3.1 0-1.1-.6-2.1-1.6-2.6.8-.4 1.4-1.3 1.4-2.2z"/></svg></button>
            <button><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-[#7c8db5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke="#7c8db5" stroke-width="2"/><rect x="9" y="9" width="6" height="6" rx="1" fill="#7c8db5"/></svg></button>
            <button><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-[#7c8db5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="2" fill="#7c8db5"/><circle cx="19" cy="12" r="2" fill="#7c8db5"/><circle cx="5" cy="12" r="2" fill="#7c8db5"/></svg></button>
          </div>
        </div>
        <!-- Messages -->
        <div class="flex-1 px-8 py-6 overflow-y-auto flex flex-col">
          <template v-if="teams[selectedIndex].messages.length > 0">
            <template v-for="(msg, idx) in teams[selectedIndex].messages" :key="idx">
              <div :class="msg.type === 'right' ? 'flex justify-end mb-6' : 'flex justify-start mb-6'">
                <div v-if="msg.type === 'left'" class="flex items-end gap-2">
                  <span class="w-8 h-8 rounded-full flex items-center justify-center text-[#7c8db5] font-bold text-[15px] bg-[#eceafd]">{{ msg.avatar }}</span>
                  <div>
                    <div class="bg-[#f7f8fa] text-[#25396f] rounded-2xl px-4 py-2 text-[15px] font-normal mb-1 max-w-[500px]">
                      {{ msg.text }}
                    </div>
                    <div class="text-[12px] text-[#a0aec0] pl-2">{{ msg.time }}</div>
                  </div>
                </div>
                <div v-else class="flex items-end gap-2">
                  <div>
                    <div class="bg-[#3174f7] text-white rounded-2xl px-4 py-2 text-[15px] font-normal mb-1 max-w-[500px] text-right">
                      {{ msg.text }}
                    </div>
                    <div class="text-[12px] text-[#a0aec0] pr-2 text-right">{{ msg.time }}</div>
                  </div>
                  <span class="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-[15px] bg-[#3174f7]">You</span>
                </div>
              </div>
            </template>
          </template>
        </div>
        <!-- Input (fixed at bottom, with icon) -->
        <div class="bg-white px-8 py-4 border-t border-[#eceafd] flex items-center gap-3" style="position:sticky;bottom:0;z-index:10;">
          <button class="rounded-full p-2 bg-[#f2f4f7] hover:bg-[#eceafd]">
            <!-- Example: Paperclip Icon for attachment -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#7c8db5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke="#7c8db5" stroke-width="2" d="M17.657 6.343a6 6 0 0 0-8.485 0l-5.657 5.657a4 4 0 0 0 5.657 5.657l6.364-6.364a2 2 0 1 0-2.828-2.828l-6.364 6.364"/>
            </svg>
          </button>
          <input
            v-model="input"
            @keyup.enter="sendMessage"
            type="text"
            class="flex-1 px-5 py-2 rounded-xl border border-[#e3e7ef] focus:outline-none text-[15px] text-[#25396f] bg-[#f7f7fc]"
            placeholder="Type your message..."
          />
          <button @click="sendMessage" class="px-5 py-2 rounded-xl bg-[#3174f7] text-white font-semibold text-[15px]">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>