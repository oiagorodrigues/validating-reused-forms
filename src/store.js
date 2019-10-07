import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const findForm = (forms, slug) => {
  if (!forms) {
    const forms = JSON.parse(localStorage.getItem('forms'))
    return forms.find(f => f.name === slug)
  }
  return forms.find(f => f.name === slug)
}

export default new Vuex.Store({
  state: {
    forms: [],
    form: {}
  },
  mutations: {
    setForm: (state, payload) => {
      localStorage.setItem('form', JSON.stringify(payload))
      state.form = payload
    },
    setForms: (state, payload) => {
      localStorage.setItem('forms', JSON.stringify(payload))
      state.forms = payload
    },
    pushForms: (state, payload) => {
      state.forms.push(payload)
      localStorage.setItem('forms', JSON.stringify(state.forms))
    },
    updateForm: (state, payload) => {
      const { formIndex, ...data } = payload
      state.forms.splice(formIndex, 1, data)
    }
  },
  actions: {
    getForms: ({ commit }) => {
      const forms = localStorage.getItem('forms')
      if (forms) {
        commit('setForms', JSON.parse(forms))
      }
    },
    getForm: ({ state, commit }, slug) => {
      const form = findForm(state.forms, slug)
      commit('setForm', form)
    },
    updateForm: ({ state, commit }, payload) => {
      const formIndex = state.forms.indexOf(findForm(state.forms, payload.name))
      commit('updateForm', { formIndex, ...payload })
      commit('setForms', state.forms)
      commit('setForm', payload)
    }
  }
})
