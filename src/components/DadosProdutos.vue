<template>
  <div class="container">
    <h2 class="title">Produtos</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Ativo</th>
          <th scope="col">Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ativo</td>
          <td>Programa de Cadastro de clientes e seus produtos</td>
        </tr>
        <tr>
          <td>Inativo</td>
          <td>Software para coletor de estoque</td>
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
