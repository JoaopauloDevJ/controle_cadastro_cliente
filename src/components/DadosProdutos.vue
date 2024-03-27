<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const clientes = computed(() => store.getters.clientes)
</script>
<template>
  <div class="container table-responsive">
    <h2 class="title">Produtos</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Ativo / Inativo</th>
          <th scope="col">Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cliente in clientes" :key="cliente.id">
          <td>{{ cliente.produtoAtivo }}</td>
          <td>{{ cliente.nomeProduto }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style lang="scss" scoped>
@import './Styles/variaveis.scss';

.title {
  @include styleTitle();
}

.table {
  @media (max-width: 768px) {
    width: 80%;
  }
}
</style>
