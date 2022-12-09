import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useConverterStore = defineStore('store', () => {

  let from = ref('')
  let to = ref('')
  let fromAmount = ref(0)
  let toAmount = ref(0)

  let fromUSD: number;
  
  // country data (country, code, rate in USD)
  const data: { id:number, country: string, code: string, rate: number }[] = [
    { id: 1, country: 'Kuwaiti Dinar', code: 'KWD', rate: 3.26 },
    { id: 2, country: 'Bahraini Dinar', code: 'BHD', rate: 2.65 },
    { id: 3, country: 'Omani Rial', code: 'OMR', rate: 2.60 },
    { id: 4, country: 'British Pound Sterling', code: 'GBP', rate: 1.23 },
    { id: 5, country: 'European Euro', code: 'EUR', rate: 1.06 },
    { id: 6, country: 'US Dollar', code: 'USD', rate: 1 },
    { id: 7, country: 'Brunei Dollar', code: 'BND', rate: 0.74 },
    { id: 8, country: 'New Zealand Dollar', code: 'NZD', rate: 0.64 },
    { id: 9, country: 'Aruban Florin', code: 'AWG', rate: 0.56 },
    { id: 10, country: 'Indian Rupee', code: 'INR', rate: 0.012 }
  ]

  // onSubmit function - calculates the currency conversion
  function onSubmit() {
      fromUSD = from.value.rate >= 1 ? fromAmount.value / from.value.rate : fromAmount.value * from.value.rate;
      toAmount.value = to.value.rate >=1 ? fromUSD * to.value.rate : fromUSD / to.value.rate;
  }

  return { from, to, fromAmount, toAmount, data, onSubmit }
})