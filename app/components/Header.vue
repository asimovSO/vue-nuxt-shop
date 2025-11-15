<template>
  <UHeader title="Shop" :ui="{ left: 'gap-12', right: 'gap-6 md:gap-12' }">
    <template #left>
      <!-- <ULink to="/">Home</ULink>
      <ULink to="/categories">Categories</ULink> -->
      <div class="">LOGO</div>
    </template>
    <UNavigationMenu :items="nav_items" variant="link" content-orientation="vertical"
      :ui="{ list: 'gap-6', link: 'font-semibold text-base' }">
    </UNavigationMenu>
    <template #right>
      <UIcon name='i-mdi-light-cart' class="size-6"></UIcon>
      <UIcon name='i-mdi-light-heart' class="size-6"></UIcon>
    </template>
    <template #body>
      <UNavigationMenu :items="nav_items" orientation="vertical" variant="link"></UNavigationMenu>
    </template>
  </UHeader>
</template>
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const nav_items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Home',
      to: '/'
    }],
  [
    {
      label: 'Categories',
      children: [
        {
          label: 'Shoes',
          to: '/'
        },
        {
          label: 'Clothes'
        },
        {
          label: 'Furniture'
        },
        {
          label: 'Electronics'
        },
        {
          label: 'Miscellaneous'
        }
      ]
    }]
])

</script>