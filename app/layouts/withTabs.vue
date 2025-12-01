<template>
  <NuxtLoadingIndicator />
  <div>
    <UContainer>
      <div class="py-6">
        <Tabs />
        <div class="py-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-3">
            <slot />
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>
