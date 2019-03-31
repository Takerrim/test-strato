import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export const store = new Vuex.Store({
  state: {
    priceSummary: 0,
    quantitySummary: 0,
    summary: 0,
    items: []
  },
  getters: {
    getItems(state) {
      return state.items
    },
    getPriceSummary(state) {
      return state.priceSummary
    },
    getQuantitySummary(state) {
      return state.quantitySummary
    },
    getSummary(state) {
      return state.summary
    }
  },
  mutations: {
    addItem(state,item) {
      state.items.push({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        id: item.id,
        editing: item.editing
      })
    },
    addSummary (state) {
      let initialValue = 0;
      state.priceSummary = state.items.reduce((accum, currentValue) => {
        return +accum + +currentValue.price;
      }, initialValue); // add initialValue to reduce property of object
      state.quantitySummary = state.items.reduce((accum, currentValue) => {
        return +accum + +currentValue.quantity;
      }, initialValue);
      state.summary = state.priceSummary * state.quantitySummary;
    },
    removeItem (state, index) {
      state.items.splice(index, 1);
    },
    decreaseSummary(state,item) {
      state.priceSummary -=  item.price;
      state.quantitySummary -=  item.quantity;
      let genenalSum = state.priceSummary * state.quantitySummary;
      state.summary = genenalSum;
      if (state.items.length === 0) {
        state.summary = 0;
      }
    }
  }
})