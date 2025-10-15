<template>
  <div class="bg-white border rounded-lg p-6 shadow-sm max-w-md mx-auto">
    <h2 class="text-2xl font-semibold mb-6 text-gray-800">
      Editar Filme
    </h2>

    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Título
        </label>
        <input
          type="text"
          placeholder="Título do filme"
          v-model="selecionado.titulo"
          class="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Ano
        </label>
        <input
          type="text"
          placeholder="Ano do filme"
          v-model="selecionado.ano"
          class="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>

      <div class="flex justify-end pt-4">
        <button
          @click="salvarAlteracoes"
          class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          Salvar alterações
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  filme: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['salvar'])

const selecionado = ref({})

// sincroniza o prop `filme` com o ref local `selecionado`
watch(
  () => props.filme,
  (novoFilme) => {
    if (novoFilme) {
      // cria uma cópia reativa do filme (para edição local)
      selecionado.value = { ...novoFilme }
    }
  },
  { immediate: true } // já executa na montagem
)

function salvarAlteracoes() {
  emit('salvar', selecionado.value)
}
</script>
