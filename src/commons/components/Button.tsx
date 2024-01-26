interface Props {
	title: string
}

export const Button = ({ title }: Props) => {
	return (
		<button
			onClick={() => alert('Hola')}
			className={`bg-black align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100`}
			type="button"
		>
			{title}
		</button>
	)
}
