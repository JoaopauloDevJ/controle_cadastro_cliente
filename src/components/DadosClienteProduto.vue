<script setup></script>
<template>
  <div class="container">
    <h2 class="title">Clientes e seus produtos</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Cliente Ativo</th>
          <th scope="col">Nome</th>
          <th scope="col">Telefone</th>
          <th scope="col">Documento</th>
          <th scope="col">E-mail</th>
          <th scope="col">Produto</th>
          <th scope="col">Produto Ativo / Inativo</th>
        </tr>
      </thead>
      <Tbody>
        <tr>
          <td class="row">Ativo</td>
          <td>João Paulo</td>
          <td>(15) 99676-0783</td>
          <td>CPF: 076.840.225-55</td>
          <td>joaopaulo_019w@hotmail.com</td>
          <td>Programa de Cadastro...</td>
          <td>Ativo</td>
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
