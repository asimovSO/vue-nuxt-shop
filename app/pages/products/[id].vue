<template>
    <div class="grid grid-cols-10 md:justify-between gap-10">
        <div class="col-span-10 md:col-span-4">
            <UCarousel :items="product?.images" v-slot="{ item }" dots>
                <img :src="item" alt="Image" class="rounded-2xl" />
            </UCarousel>
        </div>
        <div class="col-span-10 md:col-span-6">
            <span class="text-gray-600 font-medium">{{
                product?.category.name
            }}</span>
            <h1 class="block text-3xl font-semibold">{{ product?.title }}</h1>
            <strong class="block text-4xl font-bold my-4 text-primary">{{
                "$" + product?.price
            }}</strong>
            <USeparator class="my-6" />
            <p class="text-slate-500 text-base">{{ product?.description }}</p>
            <div class="my-8 flex flex-col md:flex-row gap-4">
                <UButton
                    label="Add to Cart"
                    class="rounded-full font-semibold"
                    size="xl"
                    icon="i-mdi-light-cart"
                    block
                    variant="outline"
                    :loading="isLoading"
                    :disabled="isLoading"
                    @click="addToCart(product)"
                >
                </UButton>
                <UButton
                    label="Buy Now"
                    class="rounded-full font-semibold"
                    size="xl"
                    icon="i-mdi-dollar"
                    block
                    variant="solid"
                    @click="clearCart()"
                >
                </UButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCart } from "~/composables/useCart";

const config = useRuntimeConfig();
const route = useRoute();
const { isLoading, addToCart, clearCart } = useCart();

type Product = {
    title: string;
    description: string;
    price: number;
    images: string[];
    category: Category;
};
type Category = { id: number; name: string };

const { data: product, error } = await useFetch<Product>(
    `/products/${route.params.id}`,
    { baseURL: config.public.apiBase }
);
</script>
