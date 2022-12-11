<template>
    <!-- from country selector -->
    <div id="container">
        <div>
            <select id="from" v-model="from">
                <option value="" disabled selected>Select From Country</option>
                <option v-for="country in fromCountryList" :key="country.id" :value="country" placeholder="Enter">
                    {{ country.country }}
                </option>
            </select>
            <!-- from input -->
            <input type="number" v-model="fromAmount" />
        </div>
    
        <!-- to country selector -->
        <div>
            <select id="to" v-model="to">
                <option value="" disabled selected>Select To Country</option>
                <option v-for="country in toCountryList" :key="country.id" :value="country">
                    {{ country.country }}
                </option>
            </select>
            <!-- to input -->
            <input type="number" v-model="toAmount" :disabled="true" />
        </div>
    </div>

    <div id="container">
        <!-- button to calculate currency -->
        <button @click="converterStore.currencyConverter">Convert</button>
    </div>
</template>

<script setup lang="ts">
import { useConverterStore } from "@/stores/converter";
import { storeToRefs } from "pinia";

// defining store
const converterStore = useConverterStore();

// destructuring store
const { from, to, fromAmount, toAmount, data, fromCountryList, toCountryList } = storeToRefs(converterStore);
</script>

<style scoped>
#container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    font-weight: bold;
}
div {
    margin: 0 5% 0 0;
    width: 30%;
}
select {
    width: 102.5%;
    height: 40px;
    background-color: #eee;
    font-size: 16px;
    font-weight: bold;
    padding: 0 5px;
}
input {
    width: 100%;
    height: 50px;
    padding: 0 5px;
    font-size: 20px;
    font-weight: bold;
}
button {
    width: 200px;
    height: 50px;
    font-size: 16px;
    font-weight: bold;
}
</style>