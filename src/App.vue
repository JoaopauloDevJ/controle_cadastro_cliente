<script setup>
import { ref } from 'vue'
import DadosClientes from './components/DadosCliente.vue'
import DadosProdutos from './components/DadosProdutos.vue'
import DadosClienteProduto from './components/DadosClienteProduto.vue'
import CadastraCliente from './components/CadastraCliente.vue'

const componenteVisivel = ref('')

function mostrarComponente(componente) {
  if (componenteVisivel.value === componente) {
    componenteVisivel.value = ''
  } else {
    componenteVisivel.value = componente
  }
}
</script>
<template>
  <body>
    <header class="header mb-5">
      <h1 class="header_title pt-3 pb-3">Cadastro de clientes e seus produtos!</h1>
    </header>
    <div class="container_pagina">
      <div class="container">
        <CadastraCliente />
        <div class="buttons">
          <button
            class="buttons-button btn btn-secondary m-5"
            @click="mostrarComponente('DadosClientes')"
            type="button"
          >
            Clientes
          </button>
          <button
            class="buttons-button btn btn-secondary m-5"
            @click="mostrarComponente('ClienteProduto')"
            type="button"
          >
            Cliente e seus produtos
          </button>
          <button
            class="buttons-button btn btn-secondary m-5"
            @click="mostrarComponente('DadosProdutos')"
            type="button"
          >
            Produtos
          </button>
        </div>
        <DadosClientes v-if="componenteVisivel === 'DadosClientes'" />
        <DadosClienteProduto v-if="componenteVisivel === 'ClienteProduto'" />
        <DadosProdutos v-if="componenteVisivel === 'DadosProdutos'" />
      </div>
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
  </body>
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
  position: sticky;
  top: 0;
  left: 0;

  &_title {
    color: $textColorPrincipal;
    font-weight: bold;
  }
}

.buttons {
  display: block;
  text-align: center;
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
