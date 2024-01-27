import { useState } from 'preact/hooks'

export const Cart = () => {
	const [sidebar, setSidebar] = useState(false)
	const showSidebar = () => setSidebar(!sidebar)
	const sidebarData = [
		{
			title: 'Home',
			path: '/',
			cName: 'nav-text',
		},
		{
			title: 'Reports',
			path: '/',
			cName: 'nav-text',
		},
		{
			title: 'Products',
			path: '/',
			cName: 'nav-text',
		},
		{
			title: 'Team',
			path: '/',
			cName: 'nav-text',
		},
		{
			title: 'Messages',
			path: '/',
			cName: 'nav-text',
		},
		{
			title: 'Support',
			path: '/',
			cName: 'nav-text',
		},
	]

	return (
		<>
			<button
				onClick={() => showSidebar()}
				className="hidden lg:flex items-center gap-2"
			>
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
					className="h-6 w-6"
				>
					<circle cx="8" cy="21" r="1"></circle>
					<circle cx="19" cy="21" r="1"></circle>
					<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
				</svg>
				<span className="text-sm">Cart</span>
			</button>

			<nav
				className={
					sidebar
						? 'bg-[#0f0f0f] w-64 h-screen flex justify-center fixed top-0 right-0 transition-all duration-300'
						: 'bg-[#0f0f0f] w-64 h-screen flex justify-center fixed top-0 -right-full transition-all duration-700'
				}
			>
				<ul className="w-full" onClick={() => showSidebar()}>
					<li className="bg-[#0f0f0f] w-full h-20 flex justify-start items-center">
						<button onClick={() => showSidebar()}>xd</button>
					</li>
					{sidebarData.map((item, index) => {
						return (
							<li
								key={index}
								className="flex justify-start items-center py-2 px-4 list-none h-15"
							>
								<a
									href={item.path}
									className="no-underline text-[#f5f5f5] text-xl w-11/12 h-full flex items-center px-4 rounded-md hover:bg-[#1a83ff]"
								>
									{/* {item.icon} */}
									<span className="ml-4">{item.title}</span>
								</a>
							</li>
						)
					})}
				</ul>
			</nav>
		</>
	)
}
