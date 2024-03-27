import { createStore } from 'vuex'

export default createStore({
  state: {
    clientes: []
  },
  mutations: {
    ADICIONAR_CLIENTE(state, cliente) {
      state.clientes.push(cliente)
    }
  },
  actions: {
    adicionarCliente({ commit }, cliente) {
      commit('ADICIONAR_CLIENTE', cliente)
    }
  },
  getters: {
    clientes: (state) => state.clientes
  }
})
