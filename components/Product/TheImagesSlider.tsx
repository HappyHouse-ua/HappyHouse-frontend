import { Box } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import Image from 'next/image'

import styles from './TheImagesSlider.module.css'
import { useState } from 'preact/hooks'

interface TheImageSliderProps {
	images: string[]
}

export function TheImagesSlider({ images }: TheImageSliderProps) {
	const [currentImage, setCurrentImage] = useState(0)

	console.log(currentImage)
	return (
		<>
			<Carousel
				autoPlay={false}
				navButtonsAlwaysVisible={true}
				timeout={200}
				animation='slide'
				index={currentImage}
			>
				{images.map((image, i) => (
					<Box key={i} position='relative' height='400px'>
						<Image src={image} layout='fill' objectFit='contain' />
					</Box>
				))}
			</Carousel>
			<Box display='flex' justifyContent='flex-start'>
				{images.map((image, i) => (
					<Box
						key={i}
						width='20%'
						position='relative'
						height='150px'
						marginRight='30px'
						className={styles.image}
						onClick={e =>
							setCurrentImage(prevImage =>
								e.target instanceof HTMLImageElement ? +e.target.id : prevImage
							)
						}
					>
						<Image src={image} layout='fill' objectFit='contain' id={`${i}`} />
					</Box>
				))}
			</Box>
		</>
	)
}
