<template>
  <h2 class="text-xl font-bold mb-4">
    Filme selecionado
  </h2>
  <div v-if="filme" class="bg-white border rounded-md p-4 shadow-sm flex justify-between items-center">
    <span class="font-medium text-sm">{{ filme.titulo }}</span>
    <button @click="editarFilme" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">
      Editar
    </button>
  </div>
  <p v-else>
    Nenhum filme selecionado no momento
  </p>
</template>
<script setup>
import { eventBus } from '../eventBus'

const props = defineProps({
    filme: {
        type: Object
    }
})
const emit = defineEmits(['editar'])

const editarFilme = () => {
    eventBus.emit('editar', props.filme)
}

</script>
