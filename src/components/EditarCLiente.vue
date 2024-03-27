<script setup>
import { ref } from 'vue'

const props = defineProps(['cliente'])
const emit = defineEmits(['salvar'])

const editarCliente = ref({ ...props.cliente })

const salvarEdicao = () => {
  emit('salvar', editarCliente.value)
}
</script>
<template>
  <div class="container">
    <h2>Editar Cliente</h2>
    <form @submit.prevent="salvarEdicao">
      <input
        class="form-control"
        v-model="editarCliente.ativo"
        type="text"
        placeholder="Cliente Ativo ?"
      />
      <input
        class="form-control"
        v-model="editarCliente.produtoAtivo"
        type="text"
        placeholder="Produto Ativo?"
      />
      <button type="submit">Salvar</button>
      <button type="button" @click="emit('fechar')">Fechar</button>
    </form>
  </div>
</template>
<style lang="scss" scoped>
@import './styles/variaveis.scss';
</style>
