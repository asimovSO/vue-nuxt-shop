<template>
    <div class="flex justify-between items-center ">
        <div class="flex items-center gap-3">
            <img :src="img" alt="product" class="aspect-square h-14">
            <div class="truncate text-sm">{{ name }}</div>
        </div>
        
        <UInputNumber class="w-1/6" size="xs" :min="1" :model-value="quantity" @update:model-value="$emit('update:quantity', $event)"/>
    </div>
</template>
<script setup>
defineProps({
    name: String,
    img: String,
    quantity: Number
})

defineEmits(['update:quantity'])
</script>