import { create } from 'zustand'
import type { Product } from '../types/productsApi'

interface ProductsArray extends Array<Product> { }
interface Products {
  products: ProductsArray
  addProduct: (product: Product) => void
}

const useProductsCardStore = create<Products>()((set) => ({
  products: [],
  addProduct: (product: Product) => set((state) => ({ products: [...state.products, product] }))
}))