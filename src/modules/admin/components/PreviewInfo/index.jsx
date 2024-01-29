import { useStore } from '@nanostores/preact'
import { Button } from '../../../../commons/components/Button.tsx'
import ActiveImage from '../../../../commons/components/Info/ActiveImage.astro'
import Details from '../../../../commons/components/Info/Details.astro'
import ImageList from '../../../../commons/components/Info/ImageList.astro'
import Quantity from '../../../../commons/components/Info/Quantity.astro'
import { $newProductStore } from '../../store/newProductStore.js'

export const PreviewInfo = () => {
	const product = useStore($newProductStore)
	const { title, description, price, images, rating } = product

	console.log(product)

	return (
		<>
			<div class="grid md:grid-cols-5 gap-3 items-start">
				{images.length > 0 && (
					<>
						<ImageList images={images} /> <ActiveImage image={product.images[0]} />
					</>
				)}
			</div>

			<div class="grid gap-4 md:gap-10 items-start">
				<div class="hidden md:flex items-start">
					<div class="grid gap-4">
						<h1 class="font-bold text-3xl lg:text-4xl">{title}</h1>
						<div>
							<p>{description}</p>
						</div>
						{/* {rating && <Rating rating={rating} />} */}
					</div>
					<div class="text-4xl font-bold ml-auto">${price}</div>
				</div>
				{/* <Quantity /> */}
				<Button title="Add to card" />
			</div>
		</>
	)
}
