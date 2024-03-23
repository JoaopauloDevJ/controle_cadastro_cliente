<script setup>
import { ref } from 'vue'

const cliente = ref({
  nome: '',
  telefone: '',
  documento: '',
  email: '',
  status: ''
})

const produtos = ref({
  nome: '',
  status: ''
})

const cadastraCliente = () => {
  localStorage.setItem('cliente', JSON.stringify(cliente.value))
  localStorage.setItem('cliente', JSON.stringify(produtos.value))
  console.log(cadastraCliente)

  cliente.value = {
    nome: '',
    telefone: '',
    documento: '',
    email: '',
    status: ''
  }

  produtos.value = {
    nome: '',
    status: ''
  }
}
</script>
<template>
  <div class="container">
    <form class="form" @submit.prevent="cadastraCliente">
      <h2>Dados do cliente</h2>
      <input class="form-control" v-model="cliente.nome" type="text" placeholder="Nome" required />
      <input
        class="form-control"
        v-model="cliente.telefone"
        type="text"
        placeholder="Telefone"
        required
      />
      <input
        class="form-control"
        v-model="cliente.documento"
        type="text"
        placeholder="Documento"
        required
      />
      <input
        class="form-control"
        v-model="cliente.email"
        type="text"
        placeholder="E-mail"
        required
      />
      <label>Status do cliente</label>
      <input type="radio" id="ativo" value="Ativo" v-model="cliente.status" required />
      <label for="ativo">Ativo</label>
      <input type="radio" id="inativo" value="Inativo" v-model="cliente.status" required />
      <label for="inativo">Inativo</label>
      <h2>Produto do cliente</h2>
      <input
        class="form-control"
        type="text"
        v-model="produtos.nome"
        placeholder="Nome do Produto"
        required
      />
      <label>Status do produto</label>
      <input type="radio" id="produtoAtivo" value="Ativo" v-model="produtos.status" required />
      <label for="produtoAtivo">Ativo</label>
      <input type="radio" id="produtoInativo" value="Inativo" v-model="produtos.status" required />
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
