<template>
  <div>
    <select id="from" v-model="from">
      <option
        v-for="country in fromCountryList"
        :key="country.id"
        :value="country"
      >
        {{ country.country }}
      </option>
    </select>
    <!-- from input -->
    <input type="number" v-model="fromAmount" />
  </div>

  <!-- to country selector -->
  <div>
    <select id="to" v-model="to">
      <option
        v-for="country in toCountryList"
        :key="country.id"
        :value="country"
      >
        {{ country.country }}
      </option>
    </select>
    <!-- to input -->
    <input type="number" v-model="toAmount" :disabled="true" />
  </div>

  <button @click="converterStore.currencyConverter">Convert</button>
</template>

<script setup lang="ts">
import { useConverterStore } from "@/stores/converter";
import { storeToRefs } from "pinia";

// defining store
const converterStore = useConverterStore();
const { from, to, fromAmount, toAmount, data, fromCountryList, toCountryList } = storeToRefs(converterStore)
</script>

<style scoped>
div {
  margin: 5%;
}
select{
  width: 105%;
  height: 30px;
  background-color: #eee;
  font-size: 16px;
  padding: 0 5px;
}
input {
  width: 100%;
  height: 40px;
  padding: 0 5px;
  font-size: 20px;
}
</style>