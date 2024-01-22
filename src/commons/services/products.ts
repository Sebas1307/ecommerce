import type {
	APIProductsResponse,
	Product,
} from '../types/productsApi'

export const getProductList = async (): Promise<APIProductsResponse> => {
	const res = await fetch('https://dummyjson.com/products', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	})

	const data = (await res.json()) as APIProductsResponse

	return data
}

export const getProductById = async ({ id }: { id: number }) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    if (!res.ok) {
        throw new Error(`API response error: ${res.statusText}`)
    }
    try {
        const product = (await res.json()) as Product
        return product
    } catch (error) {
        console.error('Failed to parse JSON:', error)
        throw error
    }
}