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

const activeTab = computed({
    get() {
        // Если на главной странице
        if (route.path === '/') {
            return '/'
        }
        // Если на странице категории
        if (route.params.categoryName) {
            return `/${route.params.categoryName}`
        }
        return '/'
    },
    set(tab) {
        // Если выбрана вкладка "All"
        if (tab === '/') {
            return router.push('/')
        }
        // Для остальных категорий
        return router.push(`/categories${tab}`)
    }
})

const fetchCategories = async () => {
    let res = await useFetch('/categories', {
        baseURL: config.public.apiBase
    })

    if (res.data.value) {
        for (let i of res.data.value) {
            MainTabs.value.push({ label: i.name, value: `/${i.slug}` })
        }
    }
}

fetchCategories()

</script>