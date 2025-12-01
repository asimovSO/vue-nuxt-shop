<template>
    <div class="w-full overflow-x-auto scrollbar-thin">
       <div>
         <UTabs :items="MainTabs" variant="link" orientation="horizontal" color="primary" size="xl" v-model="activeTab" :ui="{
            root: 'w-full min-w-fit h-fit',
            label: 'overflow-visible text-clip whitespace-normal'
        }" />
       </div>
    </div>

</template>
<script setup>
const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()

const MainTabs = ref([
    {
        label: 'All',
        value: '/'
    }
])

const { data: categories } = await useFetch('/categories', {
    baseURL: config.public.apiBase
})

if (categories.value) {
    for (let i of categories.value) {
        MainTabs.value.push({ label: i.name, value: `/${i.slug}` })
    }
}

const activeTab = computed({
    get() {
        if (route.path === '/') {
            return '/'
        }
        if (route.params.categoryName) {
            return `/${route.params.categoryName}`
        }
        return '/'
    },
    set(tab) {
        if (tab === '/') {
            return router.push('/')
        }
        return router.push(`/categories${tab}`)
    }
})
</script>