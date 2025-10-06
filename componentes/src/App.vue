<template>
  <header class="bg-gradient-to-b from-gray-200 to-gray-100 p-10 shadow">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-semibold">
        Lista de Filmes
      </h1>
      <p class="text-gray-600">
        Treinando comunicação entre Components no Vue
      </p>
    </div>
  </header>
  <main class="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
    <filme-lista />
  </main>
</template>

<script setup>
import FilmeLista from './components/FilmeLista.vue'
</script>
