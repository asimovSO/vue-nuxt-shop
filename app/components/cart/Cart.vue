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
                <div class="w-xs md:w-fit py-5 px-3">
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
            <USeparator class="my-4"/>
            <div class="flex items-baseline font-semibold mb-5">
                <span class="block shrink whitespace-nowrap mr-2">Total price</span>
                <div class="h-px w-full border-b border-dotted border-slate-500"></div>
                <span class="ml-2">{{ totalPrice + '$' }}</span>
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

const { cart, totalItems, updateQuantity, clearCart, removeFromCart, totalPrice } = useCart();


onMounted(() => {
    console.log(cart.value);
});
</script>
