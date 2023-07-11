import {ref, reactive, watch } from 'vue'
import { defineStore } from 'pinia'

export const useCoinStore = defineStore('coinStore', {
  state: () => ({
    coins:[],
    isLoading: false
  }),
  getters: {
    minted() {
      return this.coins.filter(c => c.mintQuantity > 0)
    },
    mintCount() {
      return this.coins.reduce((previousValue, currentValue) => {
        return currentValue.mintQuantity > 0 ? previousValue + 1 : previousValue
      }, 0)
    },
    totalCoins: (state) => {
      return state.coins.length
    },
    // getCount() {
    //   if(localStorage.getItem(count)){
    //     return JSON.parse(localStorage.getItem("count"))
    //   }
    // }
  },
  actions: {
    async getCoins() {
      this.isLoading = true
      const response = await fetch('http://localhost:3000/coins')
      const data = await response.json()

      this.coins = data
      this.isLoading = false
    },
    async updateMintAmount(id, amount) {
      const coin = this.coins.find(c => c.id == coin.id)
      coin.mintQuantity = amount
      
      const reponse = await fetch('http://localhost:3000/coins', {
        // method: 'POST',
        method: 'PATCH',
        body: JSON.stringify({mintQuantity: coin.mintQuantity}),
        headers: {'Content-Type': 'application/json'}
      })

      if(response.error) {
        console.log(repsonse.error)
      }
    },
    // updateCount(count) {
    //   localStorage.setItem("count", JSON.stringify(count))
    // }
  }
})