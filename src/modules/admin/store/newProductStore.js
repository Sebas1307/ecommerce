import { map } from 'nanostores'

export const $newProductStore = map({
    title: '',
    description: '',
    price: 0,
    rating: 0,
    images: [],
})