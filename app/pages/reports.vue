<template>
  <div class="p-6">
    <h2 class="text-3xl font-bold mb-6">📊 Reports</h2>

    <!-- Summary Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white shadow rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-700">Total Users</h3>
        <p class="text-2xl font-bold text-blue-600">1,250</p>
      </div>
      <div class="bg-white shadow rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-700">Active Projects</h3>
        <p class="text-2xl font-bold text-green-600">58</p>
      </div>
      <div class="bg-white shadow rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-700">Pending Tasks</h3>
        <p class="text-2xl font-bold text-red-600">134</p>
      </div>
    </div>

    <!-- Report Table -->
    <div class="bg-white shadow rounded-lg p-6">
      <h3 class="text-xl font-semibold mb-4">Recent Reports</h3>
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="p-3 border">Report ID</th>
            <th class="p-3 border">Title</th>
            <th class="p-3 border">Status</th>
            <th class="p-3 border">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-3 border">RPT-101</td>
            <td class="p-3 border">Monthly Sales</td>
            <td class="p-3 border text-green-600 font-semibold">Completed</td>
            <td class="p-3 border">2025-09-01</td>
          </tr>
          <tr>
            <td class="p-3 border">RPT-102</td>
            <td class="p-3 border">Team Performance</td>
            <td class="p-3 border text-yellow-600 font-semibold">In Progress</td>
            <td class="p-3 border">2025-09-10</td>
          </tr>
          <tr>
            <td class="p-3 border">RPT-103</td>
            <td class="p-3 border">Expenses</td>
            <td class="p-3 border text-red-600 font-semibold">Pending</td>
            <td class="p-3 border">2025-09-15</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
