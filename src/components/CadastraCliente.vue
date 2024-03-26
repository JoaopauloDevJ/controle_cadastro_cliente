<script setup>
import { ref } from 'vue'
import { reactive } from 'vue'

const dadosCliente = reactive({
  ativoInativo: '',
  nome: '',
  telefone: '',
  documento: '',
  email: '',
  nomeProduto: '',
  statusProduto: ''
})

const resetDadosCliente = () => {
  for (let prop in dadosCliente) {
    dadosCliente[prop] = ''
  }
}

const clientes = ref([])

const adicionarCliente = () => {
  clientes.value.push(dadosCliente)
  resetDadosCliente()
}
</script>
<template>
  <div class="container">
    <form class="form" @submit.prevent="adicionarCliente">
      <h2>Dados do cliente</h2>
      <input
        v-model="dadosCliente.nome"
        class="form-control"
        type="text"
        placeholder="Nome"
        required
      />
      <input
        v-model="dadosCliente.telefone"
        class="form-control"
        type="text"
        placeholder="Telefone"
        required
      />
      <input
        v-model="dadosCliente.documento"
        class="form-control"
        type="text"
        placeholder="Documento"
        required
      />
      <input
        v-model="dadosCliente.email"
        class="form-control"
        type="text"
        placeholder="E-mail"
        required
      />
      <input
        v-model="dadosCliente.ativoInativo"
        class="form-control"
        type="text"
        placeholder="Cliente Ativo ? (Sim ou Não)"
      />
      <h2>Produto do cliente</h2>
      <input
        v-model="dadosCliente.nomeProduto"
        class="form-control"
        type="text"
        placeholder="Nome do Produto"
        required
      />
      <input
        v-model="dadosCliente.statusProduto"
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
