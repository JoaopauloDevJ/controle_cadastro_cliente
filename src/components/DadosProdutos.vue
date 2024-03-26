<template>
  <div class="container">
    <h2 class="title">Produtos</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Ativo / Inativo</th>
          <th scope="col">Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ativo</td>
          <td>Programa de Cadastro de clientes e seus produtos</td>
        </tr>
        <tr>
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
