<template>
    <div class="flex md:justify-between items-center gap-4">
        <div class="flex md:flex-2/3 items-center gap-3 w-full min-w-0">
            <img :src="img" alt="product" class="aspect-square h-14 hidden md:block">
            <span class="truncate text-sm block w-full">{{ name }}</span>
        </div>

        <div class="flex md:flex-1/3 items-center justify-end gap-2 shrink-0">
            <UInputNumber class="md:w-18 w-16" size="xs" :min="1" :model-value="quantity"
                @update:model-value="$emit('update:quantity', $event)" />
            <UButton icon="i-mdi-close" variant="ghost" color="error" @click="$emit('removeFromCart', $event)"></UButton>
        </div>
    </div>
</template>
<script setup>
defineProps({
    name: String,
    img: String,
    quantity: Number,
})

defineEmits(['update:quantity', 'removeFromCart'])
</script>