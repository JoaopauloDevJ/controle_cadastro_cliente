<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const clientes = computed(() => store.getters.clientes)
</script>
<template>
  <div class="container table-responsive">
    <h2 class="title">Clientes e seus produtos</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Cliente Ativo</th>
          <th scope="col">Nome</th>
          <th scope="col">Produto do Cliente</th>
          <th scope="col">Produto Ativo / Inativo</th>
        </tr>
      </thead>
      <Tbody>
        <tr v-for="cliente in clientes" :key="cliente.id">
          <td class="row">{{ cliente.ativo }}</td>
          <td>{{ cliente.nome }}</td>
          <td>{{ cliente.nomeProduto }}</td>
          <td>{{ cliente.produtoAtivo }}</td>
        </tr>
      </Tbody>
    </table>
  </div>
</template>
<style lang="scss" setup>
@import './Styles/variaveis.scss';
.title {
  @include styleTitle();
}
</style>
