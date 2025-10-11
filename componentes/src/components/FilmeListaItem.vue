<template>
  <div class="flex justify-between items-center rounded-md p-4 shadow-sm">
    <span class="font-medium text-sm">{{ filme.titulo }} - {{ filme.ano }}</span>
    <button class="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800 text-sm" @click="selecionar(filme)">
      Selecionar
    </button>
  </div>
</template>
<script setup>
import { eventBus } from '../eventBus'

    const props = defineProps({
        filme: {
            type: Object,
            required: true
        }
    })

    // const emit = defineEmits(['selecionar'])

    const selecionar = () => {
        // emit('selecionar', props.filme)
        eventBus.emit('selecionar', props.filme)
    }
</script>
