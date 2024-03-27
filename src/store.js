import { createStore } from 'vuex'

export default createStore({
  state: {
    clientes: []
  },
  mutations: {
    ADICIONAR_CLIENTE(state, cliente) {
      state.clientes.push(cliente)
    },
    EDITAR_CLIENTE(state, clienteEditado) {
      const index = state.clientes.findIndex((cliente) => cliente.id === clienteEditado.id)
      if (index !== -1) {
        state.clientes.splice(index, 1, clienteEditado)
      }
    },
    DELETAR_CLIENTE(state, clienteId) {
      const index = state.clientes.findIndex((cliente) => cliente.id === clienteId)
      if (index !== -1) {
        state.clientes.splice(index, 1)
      }
    }
  },
  actions: {
    adicionarCliente({ commit }, cliente) {
      commit('ADICIONAR_CLIENTE', cliente)
    },
    editarCliente({ commit }, cliente) {
      commit('EDITAR_CLIENTE', cliente)
    },
    deletarCliente({ commit }, clienteId) {
      commit('DELETAR_CLIENTE', clienteId)
    }
  },
  getters: {
    clientes: (state) => state.clientes,
    getClientePorId: (state) => (id) => {
      return state.clientes.find((cliente) => cliente.id === id)
    }
  }
})
