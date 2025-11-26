<template>
    <div class="grid grid-cols-1 md:grid-cols-10 gap-4 md:gap-10 mb-14" v-if="product">
        <div class="md:col-span-4 mb-4">
            <UCarousel :items="product?.images" v-slot="{ item }" dots>
                <img :src="item" alt="Image" class="rounded-2xl w-full" />
            </UCarousel>
        </div>
        <div class="md:col-span-6">
            <span class="text-gray-600 font-medium block">{{
                product?.category.name
                }}</span>
            <h1 class="block text-3xl font-semibold mb-3">{{ product?.title }}</h1>
            <strong class="block text-4xl font-bold mb-6 text-primary">{{
                "$" + product?.price
                }}</strong>
            <USeparator class="my-6" />
            <p class="text-slate-500 text-base">{{ product?.description }}</p>
            <div class="my-8 flex flex-col md:flex-row gap-4">
                <UButton label="Add to Cart" class="rounded-full font-semibold" size="xl" icon="i-mdi-light-cart" block
                    variant="outline" :loading="isLoading" :disabled="isLoading" @click="addToCart(product)">
                </UButton>
                <UButton label="Buy Now" class="rounded-full font-semibold" size="xl" icon="i-mdi-dollar" block
                    variant="solid" @click="clearCart()">
                </UButton>
            </div>
        </div>
    </div>
    
    <div v-else>
        Nothing found 404.
    </div>

    <!-- RELATED PRODUCTS -->
    <div>
        <h2 class="my-6 font-bold text-2xl">Related products</h2>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4" v-if="relatedProducts">
        <ProductCard class=""
            v-for="rel_product in relatedProducts?.slice(0, 5)" 
            :key="rel_product.id"
            :id="rel_product.id"
            :img-src="rel_product.images[0]"
            :title="rel_product.title"
            :price="rel_product.price" />
    </div>
    </div>

</template>

<script setup lang="ts">
import { useCart } from "~/composables/useCart";

const config = useRuntimeConfig();
const route = useRoute();
const { isLoading, addToCart, clearCart } = useCart();

type Product = {
    id: number,
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

const { data: relatedProducts, error: related_error } = await useFetch<Product[]>(`/products/${route.params.id}/related`, {
    baseURL: config.public.apiBase
})
</script>
