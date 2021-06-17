import { Box, Grid, Hidden } from '@material-ui/core'
import MainLayout from '../components/MainLayout'
import { ProductCard } from '../components/Search/ProductCard'
import { TheHeader } from '../components/Search/TheHeader'

interface IProductProperties {
	type: string
	area: number
	roomCount: number
	buildingFloorCount: number
	floor: number
}

interface IProduct {
	imageSrc: string
	priceUSD: number
	priceUAH: number
	shortDescription: string
	address: string
	properties: IProductProperties
}

const product: IProduct = {
	imageSrc: '/images/image1.jpg',
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

const products = new Array(6).fill(product)

function Search() {
	return (
		<MainLayout>
			<Grid container>
				<Grid item xs={12} md={6}>
					<TheHeader />
					<Box display='flex' flexDirection='column' flexWrap='wrap'>
						{products.map((product, index) => (
							<ProductCard key={index} {...product} href='/pepega' />
						))}
					</Box>
				</Grid>
				<Hidden smDown>
					<Grid item md={6}>
						<p>in the future, here will be map</p>
					</Grid>
				</Hidden>
			</Grid>
		</MainLayout>
	)
}
export default Search
