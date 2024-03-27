<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const clientes = computed(() => store.getters.clientes)
</script>
<template>
  <div class="container">
    <h2 class="title">Clientes</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Cliente Ativo</th>
          <th scope="col">Nome</th>
          <th scope="col">Telefone</th>
          <th scope="col">Documento</th>
          <th scope="col">E-mail</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cliente in clientes" :key="cliente.id">
          <td scope="row">{{ cliente.ativo }}</td>
          <td>{{ cliente.nome }}</td>
          <td>{{ cliente.telefone }}</td>
          <td>{{ cliente.documento }}</td>
          <td>{{ cliente.email }}</td>
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
</style>
