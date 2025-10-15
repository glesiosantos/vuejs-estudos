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
    </div>
  </section>

  <!-- Coluna Direita -->
  <section>
    <filme-lista-item-info :filme="filmeSelecionado" v-if="!editar"
    @editar="handleEditar"/>
    <filme-lista-item-editar v-else  :filme="filmeSelecionado" @salvar="handleSalvar"/>
  </section>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import FilmeListaItem from './FilmeListaItem.vue'
import FilmeListaItemInfo from './FilmeListaItemInfo.vue'
import FilmeListaItemEditar from './FilmeListaItemEditar.vue'
import { eventBus } from '../eventBus'

const filmes = ref([
    {id: 1, titulo: 'Vingadores Guerra Infinita', ano: 2018},
    {id: 2, titulo: 'Homem Formiga e Vespa', ano: 2020},
    {id: 3, titulo: 'Pantenra Negra', ano: 2021}
])

const filmeSelecionado = ref(null)
const editar = ref(false)

const handleSelecionar = (filme) => {
  filmeSelecionado.value?.id === filme.id
    ? filmeSelecionado.value = null
    : filmeSelecionado.value = filme
}

const handleEditar = (filme) => {
  editar.value = true
  filmeSelecionado.value = { ...filme } // CORREÇÃO
}

const handleSalvar = (filmeEditado) => {
  const idx = filmes.value.findIndex(f => f.id === filmeEditado.id)
  if (idx !== -1) filmes.value[idx] = filmeEditado
  editar.value = false // volta para modo visualização
}


// escuta o evento
onMounted(() => {
    eventBus.on('selecionar', handleSelecionar)
    eventBus.on('editar', handleEditar)
})

// limpa o evento
onUnmounted(() => {
    eventBus.off('selecionar', handleSelecionar),
    eventBus.off('editar', handleEditar)
})
</script>
