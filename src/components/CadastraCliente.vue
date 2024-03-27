<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const cliente = ref({
  ativo: '',
  nome: '',
  telefone: '',
  documento: '',
  email: '',
  nomeProduto: '',
  produtoAtivo: ''
})

const adicionarNovoCliente = () => {
  const clienteParaAdicionar = JSON.parse(JSON.stringify(cliente.value))
  store.dispatch('adicionarCliente', clienteParaAdicionar)
  console.log(clienteParaAdicionar)

  for (let prop in cliente.value) {
    cliente.value[prop] = ''
  }
}
</script>
<template>
  <div class="container">
    <form class="form" @submit.prevent="adicionarNovoCliente">
      <h2>Dados do cliente</h2>
      <input
        v-model.lazy="cliente.nome"
        class="form-control"
        type="text"
        placeholder="Nome"
        required
      />
      <input
        v-model.lazy="cliente.telefone"
        class="form-control"
        type="text"
        placeholder="Telefone"
        required
      />
      <input
        v-model.lazy="cliente.documento"
        class="form-control"
        type="text"
        placeholder="Documento"
        required
      />
      <input
        v-model.lazy="cliente.email"
        class="form-control"
        type="text"
        placeholder="E-mail"
        required
      />
      <input
        v-model.lazy="cliente.ativo"
        class="form-control"
        type="text"
        placeholder="Cliente Ativo ? (Sim ou Não)"
      />
      <h2>Produto do cliente</h2>
      <input
        v-model.lazy="cliente.nomeProduto"
        class="form-control"
        type="text"
        placeholder="Nome do Produto"
        required
      />
      <input
        v-model.lazy="cliente.produtoAtivo"
        class="form-control"
        type="text"
        placeholder="Produto ativo ? (Sim ou Não)"
      />
      <button class="btn btn-success form-button" type="submit">Cadastra cliente</button>
    </form>
  </div>
</template>
<style lang="scss" scoped>
@import './Styles/variaveis.scss';

.form {
  width: 500px;
  display: block;

  &-control,
  &-button {
    margin: 8px;
  }
}
</style>
