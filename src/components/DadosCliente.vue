<script setup></script>
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
        <tr>
          <td scope="row">Ativo</td>
          <td>João Paulo</td>
          <td>(15) 99676-0783</td>
          <td>CPF: 076.840.225-55</td>
          <td>joaopaulo_019w@hotmail.com</td>
        </tr>
        <tr>
          <td scope="row">Inativo</td>
          <td>João Paulo</td>
          <td>(15) 99676-0783</td>
          <td>CPF: 076.840.225-55</td>
          <td>joaopaulo_019w@hotmail.com</td>
        </tr>
        <tr>
          <td scope="row">{{}}</td>
          <td>{{}}</td>
          <td>{{}}</td>
          <td>{{}}</td>
          <td>{{}}</td>
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
