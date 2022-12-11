import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useConverterStore = defineStore('store', () => {

  let from = ref<country | string>('')
  let to = ref<country | string>('')
  let fromAmount = ref<number>(0)
  let toAmount = ref<number>(0)

  let fromUSD: number;
  
  type country =  {
    id: number,
    country: string,
    code: string,
    rate: number
  }

  // country data (country, code, rate in USD)
  const data: country[] = [
    { id: 1, country: 'Kuwaiti Dinar', code: 'KWD', rate: 3.2520236 },
    { id: 2, country: 'Bahraini Dinar', code: 'BHD', rate: 2.6595745 },
    { id: 3, country: 'Omani Rial', code: 'OMR', rate: 2.5970819 },
    { id: 4, country: 'British Pound Sterling', code: 'GBP', rate: 1.2259239 },
    { id: 5, country: 'European Euro', code: 'EUR', rate: 1.0505704 },
    { id: 6, country: 'US Dollar', code: 'USD', rate: 1 },
    { id: 7, country: 'Brunei Dollar', code: 'BND', rate: 0.73752418 },
    { id: 8, country: 'New Zealand Dollar', code: 'NZD', rate: 0.64110185 },
    { id: 9, country: 'Aruban Florin', code: 'AWG', rate: 0.55865922 },
    { id: 10, country: 'Indian Rupee', code: 'INR', rate: 0.012124894 }
  ]

  // getters
  const fromCountryList = computed(() => data.filter((d) => d.country !== to.value.country))
  const toCountryList = computed(() => data.filter((d) => d.country !== from.value.country))

  // actions/setters
  // function to calculates the currency conversion
  function currencyConverter(): void {
      fromUSD = from.value.rate >= 1 ? fromAmount.value / from.value.rate : fromAmount.value * from.value.rate;
      toAmount.value = to.value.rate >=1 ? fromUSD * to.value.rate : fromUSD / to.value.rate;
  }

  return { from, to, fromAmount, toAmount, data, currencyConverter, fromCountryList, toCountryList }
})