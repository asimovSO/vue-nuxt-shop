<template>
    <div>{{ product?.title }}</div>
    <div class="flex justify-between">
        <div>
            <UCarousel :items="product?.images" v-slot="{item}" dots>
                <img :src="item" alt="Image" class="rounded-2xl"/>
            </UCarousel>
        </div>
        <div>
            <h1>{{ product?.title }}</h1>
        </div>
    </div>
</template>

<script setup lang="ts">

const config = useRuntimeConfig()
const route = useRoute()

type Product = { title: string, images: string[] }
const { data: product } = await useFetch<Product>(`/products/${route.params.id}`, { baseURL: config.public.apiBase })
</script>