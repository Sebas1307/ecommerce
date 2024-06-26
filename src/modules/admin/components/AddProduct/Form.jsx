import { $newProductStore } from '../../store/newProductStore'
import '../../style/Form.css'

export const Form = () => {
	const handleChange = (event) => {
		const { name, value } = event.target
		console.log(name, value);
		$newProductStore.setKey(name, value)
	}

	return (
		<form className="mt-6 space-y-4">
			<div className="space-y-1">
				<label className="label" htmlFor="product-name">
					Product Name
				</label>
				<input
					className="input"
					name="title"
					id="product-name"
					placeholder="Enter product name"
					onInput={handleChange}
				/>
			</div>
			<div className="space-y-1">
				<label className="label" htmlFor="product-description">
					Product Description
				</label>
				<textarea
					className="textarea"
					name="description"
					id="product-description"
					placeholder="Enter product description"
					onInput={handleChange}
				></textarea>
			</div>
			<div className="space-y-1">
				<label className="label" htmlFor="product-price">
					Product Price
				</label>
				<input
					className="input"
					name="price"
					id="product-price"
					placeholder="Enter product price"
					onInput={handleChange}
				/>
			</div>
			<div className="space-y-1">
				<label className="label" htmlFor="product-category">
					Product Category
				</label>
				<button
					type="button"
					role="combobox"
					aria-controls="radix-:r1r:"
					aria-expanded="false"
					aria-autocomplete="none"
					dir="ltr"
					data-state="closed"
					data-placeholder=""
					className="input"
				>
					<span>Select category</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						className="h-4 w-4 opacity-50"
						aria-hidden="true"
					>
						<path d="m6 9 6 6 6-6"></path>
					</svg>
				</button>
				<select
					aria-hidden="true"
					tabIndex={-1}
					className="absolute border-0 w-px h-px p-0 m-[-1px] overflow-hidden whitespace-nowrap overflow-wrap-normal"
				>
					<option value=""></option>
				</select>
			</div>
			<div className="space-y-1">
				<label className="label" htmlFor="product-image">
					Product Image
				</label>
				<input className="input" id="product-image" type="file" />
			</div>
			<button className="btn" type="submit">
				Add Product
			</button>
		</form>
	)
}
