<template>
    <div>
        <UPopover arrow>
            <div class="relative">
                <UIcon name="i-mdi-light-cart" class="size-6"></UIcon>
                <div
                    class="absolute -top-3 left-3 rounded-full bg-pink-400 text-center -z-10 font-semibold w-6"
                >
                    {{ totalItems }}
                </div>
            </div>
            <template #content>
                <div class="w-fit py-5 px-3">
                    <div class="flex flex-col gap-2 mb-4">
                      <CartItem
                        v-for="product in cart"
                        :key="product.id"
                        :name="product.title"
                        :img="product.images[0]"
                        :quantity="product.quantity"
                        @removeFromCart="removeFromCart(product.id)"
                        @update:quantity="
                            (newVal) => updateQuantity(product.id, newVal)
                        "
                    />
                    </div>
                    <div>
                        <UButton label="Go to cart" block to="/cart" class="mb-2"></UButton>
                        <UButton label="Clear cart" block variant="outline" color="error" @click="clearCart"/>
                    </div>
                </div>
            </template>
        </UPopover>
    </div>
</template>
<script setup>
import { useCart } from "~/composables/useCart";

const { cart, totalItems, updateQuantity, clearCart, removeFromCart } = useCart();


onMounted(() => {
    console.log(cart.value);
});
</script>
