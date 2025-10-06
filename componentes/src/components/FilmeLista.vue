<template>
  <section>
    <h2 class="text-xl font-bold mb-4">
      Filmes
    </h2>

    <div class="space-y-4">
      <filme-lista-item v-for="(filme, index) in filmes" :key="index" :titulo="filme" />
    </div>
  </section>

  <!-- Coluna Direita -->
  <section>
    <filme-lista-item-editar />
  </section>
</template>
<script setup>
import { ref } from 'vue'
import FilmeListaItem from './FilmeListaItem.vue'
import FilmeListaItemEditar from './FilmeListaItemEditar.vue'

const filmes = ref(['Vingadores Guerra Infinita', 'Homem Formiga e Vespa', 'Pantenra Negra', 'DeadPool', 'DeadPool 2', ''])

</script>
