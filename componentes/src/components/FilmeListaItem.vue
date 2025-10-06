<template>
  <div class="flex justify-between items-center bg-white border rounded-md p-4 shadow-sm">
    <span class="font-medium text-sm">{{ titulo }}</span>
    <button class="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800 text-sm">
      Selecionar
    </button>
  </div>
</template>
<script setup>
    const props = defineProps(['titulo'])
</script>
