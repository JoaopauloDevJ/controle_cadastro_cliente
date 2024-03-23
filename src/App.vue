<script setup>
import DadosClientes from './components/DadosCliente.vue'
import DadosProdutos from './components/DadosProdutos.vue'
import CadastraCliente from './components/CadastraCliente.vue'
</script>

<template>
  <div class="container_pagina">
    <header class="header mb-5">
      <h1 class="header_title pt-3 pb-3">Cadastro de clientes e seus produtos!</h1>
    </header>
    <div class="container">
      <CadastraCliente />
      <DadosClientes />
      <DadosProdutos />
    </div>
    <footer class="footer">
      <div class="container footer_container">
        <img class="footer_img" src="/icon.jpeg" alt="Icone Dados Stone" />
        <div class="footer_link">
          Acesse nosso site principal,
          <a target="_blank" class="footer_link_click" href="https://datastone.com.br"
            >Clique aqui</a
          >
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import './components/Styles/variaveis.scss';

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

.container_pagina {
  min-height: 100vh;
}

.header {
  background-color: $corPrincipal;
  text-align: center;

  &_title {
    color: $textColorPrincipal;
    font-weight: bold;
  }
}

.footer {
  background-color: $corPrincipal;
  margin-top: 80px;
  padding: 10px;
  bottom: 0;
  width: 100%;
  height: 3em;

  &_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &_img {
    width: 30px;
  }

  &_link {
    color: $textColorPrincipal;

    &_click {
      color: $textColorPrincipal;
      font-style: italic;
      font-weight: bold;

      &:hover {
        color: $corSecundaria;
      }
    }
  }
}
</style>
