<template>
  <section>
    <h2 class="text-xl font-bold mb-4">
      Filmes
    </h2>

    <div class="space-y-4">
      <filme-lista-item
        v-for="filme in filmes"
        :key="filme.id"
        :filme="filme"
        :class="filmeSelecionado?.id === filme.id ? 'bg-blue-100 border-blue-500': 'bg-white border-gray-400'"
        @selecionar="handleSelecionar"
      />
      <filme-lista-item v-for="(filme, index) in filmes" :key="index" :titulo="filme" />
    </div>
  </section>

  <!-- Coluna Direita -->
  <section>
    <filme-lista-item-info :filme="filmeSelecionado" />
  </section>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import FilmeListaItem from './FilmeListaItem.vue'
import FilmeListaItemInfo from './FilmeListaItemInfo.vue'
import { eventBus } from '../eventBus'

const filmes = ref([
    {id: 1, titulo: 'Vingadores Guerra Infinita', ano: 2018},
    {id: 2, titulo: 'Homem Formiga e Vespa', ano: 2020},
    {id: 3, titulo: 'Pantenra Negra', ano: 2021}
])

const filmeSelecionado = ref(null)
const handleSelecionar = (filme) => {
    filmeSelecionado.value?.id === filme.id ? filmeSelecionado.value = null : filmeSelecionado.value = filme}
// escuta o evento
onMounted(() => eventBus.on('selecionar', handleSelecionar))

// limpa o evento
onUnmounted(() => eventBus.off('selecionar', handleSelecionar))
</script>
