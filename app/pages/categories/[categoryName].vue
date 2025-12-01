<template>
    <loading v-if="!productsByCategory && pending"/>
    <ProductCard
        v-else
        v-for="product in productsByCategory"
        :key="product.id"
        :id="product.id"
        :img-src="product.images[0]"
        :title="product.title"
        :price="product.price"
    />
</template>
<script setup>
definePageMeta({
    layout: "with-tabs",
});

const route = useRoute();
const config = useRuntimeConfig();

const { data: category } = await useFetch(
    `/categories/slug/${route.params.categoryName}`,
    {
        baseURL: config.public.apiBase,
    }
);

const { data: productsByCategory, pending } = await useLazyFetch(
    () => (category.value ? `/categories/${category.value.id}/products` : null),
    {
        baseURL: config.public.apiBase,
        watch: [category],
    }
);

</script>
