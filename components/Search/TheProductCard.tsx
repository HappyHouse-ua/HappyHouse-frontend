import { Box, Typography } from '@material-ui/core'
import Image from 'next/image'
import Link from 'next/link'
import { ShortProductInfo } from '../../utils/interfaces'
import { useBreakpoints } from '../../utils/useBreakpoints'

import styles from './TheProductCard.module.css'

interface ProductCardProps extends ShortProductInfo {
	href: string
}

interface propertyNames {
	type: string
	area: string
	roomCount: string
	floor: string
	buildingFloorCount: string
}

const propertyNames: propertyNames = {
	type: '',
	area: 'Площадь:',
	roomCount: 'Число комнат:',
	floor: 'Этаж:',
	buildingFloorCount: 'Этажность здания:'
}

export function TheProductCard({
	image,
	priceUAH,
	priceUSD,
	shortDescription,
	address,
	href,
	properties
}: ProductCardProps) {
	const breakpoints = useBreakpoints()

	return (
		<Link href={href}>
			<Box
				display='flex'
				margin='10px'
				className={styles.root}
				flexDirection={breakpoints.mdDown ? 'column' : 'row'}
			>
				<Box
					width={breakpoints.mdDown ? '100%' : '40%'}
					position='relative'
					flexShrink='0'
					height={breakpoints.mdDown ? '200px' : 'auto'}
				>
					<Image src={image} layout='fill' objectFit='cover'></Image>
				</Box>
				<Box display='flex' flexDirection='column' marginLeft='10px'>
					<Box marginBottom='50px'>
						<Typography variant='h4' component='h2'>
							{priceUAH} грн
						</Typography>
						<Typography variant='h5' component='h3'>
							{address}
						</Typography>
					</Box>
					<div>
						<Typography className={styles.description} variant='h6' component='p'>
							{shortDescription}
						</Typography>
						<Box
							display='flex'
							flexWrap='wrap'
							justifyContent='space-between'
							marginTop='20px'
						>
							{Object.keys(properties).map(propertyName => (
								<Typography
									key={propertyName}
									variant='h6'
									component='p'
									className={styles.property}
								>
									{propertyNames[propertyName as keyof propertyNames]}{' '}
									{properties[propertyName as keyof propertyNames]}
								</Typography>
							))}
						</Box>
					</div>
				</Box>
			</Box>
		</Link>
	)
}
