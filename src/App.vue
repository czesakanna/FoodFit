<template>
    <h1 class="styl">{{ appName }}</h1>
    <h2 v-html="'Liczba brakujących kalorii: <b>' + proudctsNumber + '</b>'"></h2>
    <p v-text="'Twoje zapotrzebowanie kaloryczne: ' + product.name + ' ' +  product.price"></p>
</template>

<script setup>
    import { ref, reactive } from "https://unpkg.com/vue/dist/vue.esm-browser.js"       
    const appName = ref('FoodFit')
    const proudctsNumber = ref(1500)

    const product = reactive({
        name: 'kcal',
        price: 2000
    })
    product.price++
    const variable = "przykładowa"
</script>

<style scoped>
    .styl { color: rgb(87, 147, 177) }
</style>