import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { useBreakpoints } from '../utils/useBreakpoints'
import { useState } from 'preact/hooks'
import { ChangeEvent } from 'react'
import Link from 'next/link'

import styles from './TheIndexHeader.module.css'

const accommodationTypes = ['Квартира', 'Дом', 'Земля']
const cities = ['Славянск', 'Краматорск']

interface ISearchSettings {
	actType: 'Покупка' | 'Аренда'
	accommodationType: string
	city: string
}

export function Header() {
	const breakpoints = useBreakpoints()

	const [searchSettings, setSearchSettings] = useState<ISearchSettings>({
		actType: 'Покупка',
		accommodationType: accommodationTypes[0],
		city: cities[0]
	})

	const changeHandler = (event: ChangeEvent, type: string) => {
		setSearchSettings((prevSettings: ISearchSettings): ISearchSettings => {
			if (event instanceof HTMLSelectElement) {
				return { ...prevSettings, [type]: event.value }
			}
			return prevSettings
		})
	}
	return (
		<header>
			<Grid container>
				<Grid
					item
					md={6}
					xs={12}
					container
					direction='column'
					alignItems='center'
					justify='center'
				>
					<Typography
						component='h1'
						variant={breakpoints.mdDown ? 'h2' : 'h1'}
						className={styles.caption}
					>
						HappyHouse
					</Typography>
				</Grid>
				<Grid item md={6} xs={12}>
					<form noValidate autoComplete='off' className={styles.settingsForm}>
						<TextField
							select
							label='Тип жилья'
							value={searchSettings.accommodationType}
							onChange={e => changeHandler(e, 'accommodationType')}
							SelectProps={{
								native: true
							}}
							variant='outlined'
							margin='normal'
							fullWidth={breakpoints.mdDown}
							className={styles.formElementWidth}
						>
							{accommodationTypes.map(type => (
								<option key={type} value={type}>
									{type}
								</option>
							))}
						</TextField>
						<TextField
							select
							label='Тип сделки'
							value={searchSettings.actType}
							onChange={e => changeHandler(e, 'actType')}
							SelectProps={{
								native: true
							}}
							variant='outlined'
							margin='normal'
							fullWidth={breakpoints.mdDown}
							className={styles.formElementWidth}
						>
							<option value='Покупка'>Покупка</option>
							<option value='Аренда'>Аренда</option>
						</TextField>
						<TextField
							select
							label='Город'
							value={searchSettings.city}
							onChange={e => changeHandler(e, 'city')}
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
						<Link href='/search'>
							<Button
								color='primary'
								variant='contained'
								fullWidth={breakpoints.mdDown}
								className={styles.formElementWidth}
							>
								Найти
							</Button>
						</Link>
					</form>
				</Grid>
			</Grid>
		</header>
	)
}
