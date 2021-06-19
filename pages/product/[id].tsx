import { Grid, Box } from '@material-ui/core'
import { FullProductInfo } from '../../utils/interfaces'
import Carousel from 'react-material-ui-carousel'
import Image from 'next/image'
import { TheImagesSlider } from '../../components/Product/TheImagesSlider'

const info: FullProductInfo = {
	images: ['/images/image1.jpg', '/images/image1.jpg'],
	priceUSD: 5000,
	priceUAH: 100000,
	address: 'ул. Новогородская',
	shortDescription:
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias ',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum aliasLorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias',
	properties: {
		type: 'Квартира',
		area: 100,
		roomCount: 3,
		buildingFloorCount: 5,
		floor: 2
	}
}

const items = [
	{
		name: 'Random Name #1',
		description: 'Probably the most random thing you have ever seen!'
	},
	{
		name: 'Random Name #2',
		description: 'Hello World!'
	}
]

function Product() {
	return (
		<Grid container>
			<Grid item md={6} xs={12}>
				<h1>properties</h1>
			</Grid>
			<Grid item md={6} xs={12}>
				<TheImagesSlider images={info.images} />
			</Grid>
		</Grid>
	)
}

export default Product
