<template>
   
        <ProductCard v-for="product in allProducts"
        :key="product.id"
        :id="product.id"
        :img-src="product.images[0]"
        :title="product.title"
        :price="product.price"
        />
</template>
<script setup>
definePageMeta({
    layout: 'with-tabs'
})

const config = useRuntimeConfig()

const {data: allProducts} = await useFetch('/products', {
    baseURL: config.public.apiBase,
    query: {
        limit: 10,
        offset: 0
    }
})

</script>