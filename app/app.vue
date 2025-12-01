<template>
  <UApp :toaster="toaster">
    <Header />
    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
    <Footer />
  </UApp>
</template>
<script setup>

const toaster = { position: 'top-center', duration: 1500 }
</script>
<style>

</style>