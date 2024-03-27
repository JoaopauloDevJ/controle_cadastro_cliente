<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

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
  const valor = cliente.value.ativo.toLowerCase()
  const valorProduto = cliente.value.produtoAtivo.toLowerCase()

  if (valor !== 'sim' && valor !== 'não') {
    alert('No campo "Cliente ativo?", digite apenas "Sim" ou "Não" !')
  } else if (valorProduto !== 'sim' && valorProduto !== 'não') {
    alert('No campo "Produto ativo?", digite apenas "Sim" ou "Não" !')
  } else {
    const clienteParaAdicionar = JSON.parse(JSON.stringify(cliente.value))
    clienteParaAdicionar.id = uuidv4()
    store.dispatch('adicionarCliente', clienteParaAdicionar)
    console.log(clienteParaAdicionar)

    for (let prop in cliente.value) {
      cliente.value[prop] = ''
    }
  }
}
</script>
<template>
  <div class="container">
    <form class="form" @submit.prevent="adicionarNovoCliente">
      <h2 class="form-title">Dados do cliente</h2>
      <input v-model="cliente.nome" class="form-control" type="text" placeholder="Nome" required />
      <input
        v-model="cliente.telefone"
        class="form-control"
        type="text"
        placeholder="Telefone"
        required
      />
      <input
        v-model="cliente.documento"
        class="form-control"
        type="text"
        placeholder="Documento"
        required
      />
      <input
        v-model="cliente.email"
        class="form-control"
        type="text"
        placeholder="E-mail"
        required
      />
      <input
        v-model="cliente.ativo"
        class="form-control"
        type="text"
        placeholder="Cliente Ativo ? (Sim ou Não)"
      />
      <h2 class="form-title">Produto do cliente</h2>
      <input
        v-model="cliente.nomeProduto"
        class="form-control"
        type="text"
        placeholder="Nome do Produto"
        required
      />
      <input
        v-model="cliente.produtoAtivo"
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

  &-title {
    @media (max-width: 768px) {
      text-align: center;
    }
  }
  &-control {
    margin: 8px;
  }
  &-button {
    margin: 8px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
  }
}
</style>
