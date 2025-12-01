<template>
    <div class="grid grid-cols-1 md:grid-cols-8 gap-8">
        <UTable :data="cart" :columns="columns" class="col-span-1 md:col-span-6"></UTable>
        <div class="col-span-1 h-fit md:col-span-2 p-4 rounded border border-gray-300 dark:border-gray-700">
            <div class="flex justify-between capitalize font-semibold text-xl">
                <strong class="">Total price:</strong>
                <strong>{{ totalPrice }}$</strong>
            </div>
            <USeparator class="my-5"/>
            <UButton label="Buy" block size="xl"/>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import { h, resolveComponent } from 'vue'

const UInputNumber = resolveComponent('UInputNumber')
const UButton = resolveComponent('UButton')

const { cart, totalPrice, updateQuantity, removeFromCart } = useCart()

type ProductCartColumn = {
    id: number,
    images: string,
    title: string,
    quantity: number,
    price: number
}

const columns: TableColumn<ProductCartColumn>[] = [
    {
        accessorKey: 'images',
        header: 'Image',
        cell: ({ row }) => {
            return h('img', { src: row.original.images[0], alt: 'img', class: 'w-22 aspect-square' })
        }
    },
    {
        accessorKey: 'title',
        header: 'Title'
    },
    {
        accessorKey: 'quantity',
        header: 'Quantity',
        cell: ({ row }) => {
            return h(UInputNumber, {
                size: 'sm',
                min: 1,
                modelValue: row.original.quantity,
                'onUpdate:modelValue': (newValue: number) => {
                    updateQuantity(row.original.id, newValue)
                }
            })
        }
    },
    {
        accessorKey: 'price',
        header: 'Price',
        cell: ({ row }) => {
            return row.original.price * row.original.quantity + ' $'
        }
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            return h(UButton, { icon: 'i-mdi-close', variant: 'ghost', color: 'error', 'onclick': () => { removeFromCart(row.original.id) } })
        }
    }
]
</script>