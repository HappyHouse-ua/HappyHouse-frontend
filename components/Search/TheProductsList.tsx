import { Box } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import { TheProductCard } from './TheProductCard'
import { TheHeader } from './TheHeader'
import { useState } from 'preact/hooks'
import { ShortProductInfo } from '../../utils/interfaces'

const product: ShortProductInfo = {
	image: '/images/image1.jpg',
	priceUSD: 5000,
	priceUAH: 100000,
	address: 'ул. Новогородская',
	shortDescription:
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias ',
	properties: {
		type: 'Квартира',
		area: 100,
		roomCount: 3,
		buildingFloorCount: 5,
		floor: 2
	}
}

const products = new Array(10).fill(product)

export function TheProductsList() {
	const [page, setPage] = useState(1)
	return (
		<>
			<TheHeader />
			<Box display='flex' flexDirection='column' flexWrap='wrap'>
				{products.map((product, index) => (
					<TheProductCard key={index} {...product} href='/product/12' />
				))}
			</Box>
			<Box display='flex' justifyContent='center'>
				<Pagination
					count={10}
					page={page}
					color='primary'
					onChange={(_, page) => setPage(page)}
				/>
			</Box>
		</>
	)
}
