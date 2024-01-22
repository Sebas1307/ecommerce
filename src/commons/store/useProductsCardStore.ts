import { create } from 'zustand'

interface Products {
  name: string
  quantity: number
  price: number
  image: string
  addProduct: (name: string, quantity: number, price: number, image: string) => void
}

interface ProductsArray extends Array<Product> {}

const useProductsCardStore = create<Products>()((set) => ({
  name: '',
  quantity: 0,
  price: 0,
  image: '',
  addProduct: (name, quantity, price, image) => set((state): Products => ([...state, { name, quantity, price, image }]))
}))