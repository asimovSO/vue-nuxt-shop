<template>
  <div>
    <UPopover>
        <div class="relative">
          <UIcon name='i-mdi-light-cart' class="size-6"></UIcon>
          <div class="absolute -top-3 left-3 rounded-full bg-pink-400 text-center -z-10 font-semibold w-6">{{ totalItems }}</div>
        </div>
      <template #content>
        <div class="w-md py-5 px-3">
          <CartItem v-for="product in cart.slice(0, 6)"
            :key="product.id"
           :name="product.title"
           :img="product.images[0]"
           :quantity="product.quantity"
           @update:quantity="(newVal) => updateQuantity(product.id, newVal)"
           />
          <div>
            <UButton label="Go to cart" block to="/cart"></UButton>
          </div>
        </div>
      </template>
    </UPopover>
  </div>
</template>
<script setup>
import { useCart } from "~/composables/useCart";

const { cart, totalItems, updateQuantity } = useCart()

onMounted(() => {
  console.log(cart.value)
})

</script>