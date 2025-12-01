
export const useShopApi = () => {
    const config = useRuntimeConfig()
    const baseUrl = config.public.apiBase as string
    // const baseUrl = 'https://api.escuelajs.co/api/v1'

    const getProducts = async () => {
        const response = await useFetch(`${baseUrl}/products`)
        console.log(response);
        
        return response
    }

    const getProductById = async (id: any) => {
        return await $fetch('/products/' + id, { baseURL: baseUrl })
    }
    return {
        getProducts,
        getProductById
    }
}