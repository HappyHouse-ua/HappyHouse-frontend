import { Box, Grid, Hidden } from '@material-ui/core'
import { ProductCard } from '../components/ProductCard'
import { TheSearchHeader } from '../components/TheSearchHeader'

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
	properties: IProductProperties
}

const product: IProduct = {
	imageSrc: 'images/image1',
	priceUSD: 5000,
	priceUAH: 100000,
	shortDescription: 'Отличная квартира в центре',
	properties: {
		type: 'Квартира',
		area: 100,
		roomCount: 3,
		buildingFloorCount: 5,
		floor: 2
	}
}

const products = new Array(5).fill(product)

function Search() {
	return (
		<Grid container>
			<Grid item xs={12} md={6}>
				<TheSearchHeader />
				<Box display='flex' flexDirection='column'>
					{products.map((product, index) => (
						<ProductCard key={index} />
					))}
				</Box>
			</Grid>
			<Hidden smDown>
				<Grid item md={6}>
					<p>in the future, here will be map</p>
				</Grid>
			</Hidden>
		</Grid>
	)
}
export default Search
