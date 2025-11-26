<template>
    <div class="">
        <div class="rounded">
            <img :src="imgSrc" alt="image" class="hover:scale-[1.1] transition-all rounded-2xl mb-3">
        </div>
        <div class="text-sm font-semibold h-10 line-clamp-2 mb-5">{{ title }}</div>
        <div class="flex justify-between items-center">
            <span class="font-bold">{{ price }}$</span>
            <UButton label="View" variant="outline" color="secondary" :to="`/products/${id}`" />
        </div>
    </div>
</template>
<script setup>
defineProps({
    id: Number,
    imgSrc: String,
    title: String,
    price: [Number, String],
})

</script>