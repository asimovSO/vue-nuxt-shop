// composables/useCart.ts
export const useCart = () => {
  const cart = ref<any[]>([])
  const isLoading = ref(false)
  const CART_KEY = 'shopping-cart'

  // Имитация задержки (как будто запрос на сервер)
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  // Загрузка корзины из localStorage
  const loadCart = () => {
    // process.client = true, если код выполняется в браузере
    // process.client = false, если код выполняется на сервере
      const saved = localStorage.getItem(CART_KEY)
      if (saved) {
        try {
          cart.value = JSON.parse(saved)
        } catch (e) {
          console.error('Ошибка загрузки корзины:', e)
          cart.value = []
        }
    }
  }

  // Сохранение корзины в localStorage
  const saveCart = () => {
      localStorage.setItem(CART_KEY, JSON.stringify(cart.value))
  }

  // Добавить товар в корзину (с задержкой)
  const addToCart = async (product: any) => {
    isLoading.value = true
    
    try {
      // Имитируем загрузку (например, отправка на сервер)
      await delay(800) // 800ms задержка
      
      const existingItem = cart.value.find(item => item.id === product.id)
      
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        cart.value.push({
          ...product,
          quantity: 1
        })
      }
      
      saveCart()
      return { success: true }
    } catch (error) {
      console.error('Ошибка добавления в корзину:', error)
      return { success: false, error }
    } finally {
      isLoading.value = false
    }
  }

  // Удалить товар из корзины (с задержкой)
  const removeFromCart = async (productId: number | string) => {
    isLoading.value = true
    
    try {
      await delay(500) // 500ms задержка
      
      cart.value = cart.value.filter(item => item.id !== productId)
      saveCart()
      return { success: true }
    } catch (error) {
      console.error('Ошибка удаления из корзины:', error)
      return { success: false, error }
    } finally {
      isLoading.value = false
    }
  }

  // Изменить количество товара (с задержкой)
  const updateQuantity = (productId: number | string, quantity: number) => {
    // isLoading.value = true
    
    try {
      // await delay(500) // 500ms задержка
      
      const item = cart.value.find(item => item.id === productId)
      if (item) {
        if (quantity <= 0) {
          cart.value = cart.value.filter(item => item.id !== productId)
        } else {
          item.quantity = quantity
        }
        saveCart()
      }
      return { success: true }
    } catch (error) {
      console.error('Ошибка обновления количества:', error)
      return { success: false, error }
    } finally {
      isLoading.value = false
    }
  }

  // Очистить корзину (с задержкой)
  const clearCart = async () => {
    isLoading.value = false
    
    try {
      await delay(600) // 600ms задержка
      
      cart.value = []
      saveCart()
      return { success: true }
    } catch (error) {
      console.error('Ошибка очистки корзины:', error)
      return { success: false, error }
    } finally {
      isLoading.value = false
    }
  }

  // Общая сумма
  const totalPrice = computed(() => {
    return cart.value.reduce((sum, item) => {
      return sum + (item.price * item.quantity)
    }, 0)
  })

  // Количество товаров
  const totalItems = computed(() => {
    return cart.value.reduce((sum, item) => sum + item.quantity, 0)
  })

  // Проверить есть ли товар в корзине
  const isInCart = (productId: number | string) => {
    return computed(() => cart.value.some(item => item.id === productId))
  }

  // Загружаем корзину при инициализации (только в браузере)
  onMounted(() => {
    loadCart()
  })

  return {
    cart: readonly(cart),
    isLoading: readonly(isLoading),
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice,
    totalItems,
    isInCart
  }
}