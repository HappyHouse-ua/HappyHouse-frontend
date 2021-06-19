import { Box, Typography, TextField, Icon, IconButton, Popover } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { useState } from 'preact/hooks'
import { MouseEvent } from 'react'
import { useBreakpoints } from '../../utils/useBreakpoints'
import { TheFilterMenu } from './TheFilterMenu'
import Link from 'next/link'

import styles from './TheHeader.module.css'

const cities = ['Славянск', 'Краматорск']

const searchOptions = [
	{ title: 'р. Новочеркасский', id: { district: 'новочеркасский' } },
	{ title: 'ул. Ленина', id: { street: 'ленина' } }
]

const sortTypes = ['Самые новые', 'Самые дешевые', 'Самые дорогие']

export function TheHeader() {
	const breakpoints = useBreakpoints()

	const [city, setCity] = useState(cities[0])

	const [sortType, setSortType] = useState(sortTypes[0])

	const [searchOption, setSearchOption] = useState('')

	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const open = !!anchorEl
	return (
		<>
			<Box
				display='flex'
				flexDirection={breakpoints.mdDown ? 'column' : 'row'}
				justifyContent='space-evenly'
			>
				<Link href='/'>
					<Typography component='h1' variant='h2' className={styles.caption}>
						HappyHouse
					</Typography>
				</Link>

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
				>
					{cities.map(city => (
						<option key={city} value={city}>
							{city}
						</option>
					))}
				</TextField>
			</Box>

			<Box
				display='flex'
				alignItems='flex-start'
				flexWrap={breakpoints.mdDown ? 'wrap' : 'nowrap'}
			>
				<Autocomplete
					freeSolo
					options={searchOptions}
					getOptionLabel={option => option.title}
					renderInput={params => (
						<TextField {...params} label='Введите район или улицу' />
					)}
					inputValue={searchOption}
					onInputChange={(_, value) => setSearchOption(value)}
					fullWidth={true}
				/>
				<Box
					display='flex'
					marginLeft={!breakpoints.mdDown && '10px'}
					width={breakpoints.mdDown ? '100%' : '30%'}
				>
					<TextField
						select
						value={sortType}
						onChange={e => setSortType(e.target.value)}
						SelectProps={{
							native: true
						}}
						margin='normal'
						fullWidth={true}
						className={styles['sorting-select']}
					>
						{sortTypes.map(sort => (
							<option key={sort} value={sort}>
								{sort}
							</option>
						))}
					</TextField>
					<Box position='relative' width='56px' flexShrink='0'>
						<IconButton className={styles['filter-btn']} onClick={handleClick}>
							<Icon className='icon'>filter_alt</Icon>
						</IconButton>
						<Popover
							open={open}
							anchorEl={anchorEl}
							onClose={() => setAnchorEl(null)}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'center'
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'center'
							}}
						>
							<TheFilterMenu close={() => setAnchorEl(null)} />
						</Popover>
					</Box>
				</Box>
			</Box>
		</>
	)
}
