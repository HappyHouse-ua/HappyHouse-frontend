import { Box, Typography, TextField } from '@material-ui/core'
import { useState } from 'preact/hooks'
import { useBreakpoints } from '../utils/useBreakpoints'

import styles from './TheSearchHeader.module.css'

const cities = ['Славянск', 'Краматорск']

export function TheSearchHeader() {
	const breakpoints = useBreakpoints()

	const [city, setCity] = useState(cities[0])

	return (
		<>
			<Box
				display='flex'
				flexDirection={breakpoints.mdDown ? 'column' : 'row'}
				justifyContent='space-evenly'
			>
				<Typography
					component='h1'
					variant={breakpoints.mdDown ? 'h3' : 'h2'}
					className={styles.caption}
				>
					HappyHouse
				</Typography>
				<TextField
					select
					label='Город'
					value={city}
					onChange={e => setCity(e.target.value)}
					SelectProps={{
						native: true
					}}
					variant='outlined'
					margin='normal'
					fullWidth={breakpoints.mdDown}
					className={styles.formElementWidth}
				>
					{cities.map(city => (
						<option key={city} value={city}>
							{city}
						</option>
					))}
				</TextField>
			</Box>
		</>
	)
}
