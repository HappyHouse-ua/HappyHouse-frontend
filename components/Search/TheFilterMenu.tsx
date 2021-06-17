import {
	FormControl,
	RadioGroup,
	FormControlLabel,
	Radio,
	TextField,
	IconButton,
	Icon
} from '@material-ui/core'
import { useState } from 'preact/hooks'
import { IValidationState, useChangeHandler } from '../../utils/useChangeHandler'
import { useValidations } from '../../utils/useValidations'
import { TheFiterMenuSetting } from './TheFilterMenuSettings'

import styles from './TheFilterMenu.module.css'
import { IOnlyStringKeys } from '../../utils/interfaces'

const accommodationTypes = ['Квартира', 'Дом', 'Земля']

interface ITheFilterMenuProps {
	close: () => void
}

interface IFilterSettings extends IOnlyStringKeys<string> {
	accommodationType: string
	currency: string
	costFrom: string
	costTo: string
	areaFrom: string
	areaTo: string
	roomCountFrom: string
	roomCountTo: string
	floorFrom: string
	floorTo: string
	buildingFloorCountFrom: string
	buildingFloorCountTo: string
}

const currencies = ['грн', '$']

export function TheFilterMenu({ close }: ITheFilterMenuProps) {
	const { onlyNumbers } = useValidations()

	const [filterSettings, setFilterSettings] = useState<IFilterSettings>({
		accommodationType: accommodationTypes[0],
		currency: currencies[0],
		costFrom: '',
		costTo: '',
		areaFrom: '',
		areaTo: '',
		roomCountFrom: '',
		roomCountTo: '',
		floorFrom: '',
		floorTo: '',
		buildingFloorCountFrom: '',
		buildingFloorCountTo: ''
	})
	const { accommodationType, currency, ...settings } = filterSettings

	const validationsReducerInitialValue: IValidationState = {}

	const [validations, setValidations] = useState<IValidationState>(
		Object.keys(settings).reduce(
			(prevValue, key) => ({ ...prevValue, [key]: [onlyNumbers, true] }),
			validationsReducerInitialValue
		)
	)

	const changeHandler = useChangeHandler(setFilterSettings, setValidations)

	const settingsReducerInitialValue: string[][] = []

	return (
		<>
			<IconButton className={styles.closeBtn} onClick={() => close()}>
				<Icon className='icon'>close</Icon>
			</IconButton>
			<form noValidate autoComplete='off' className={styles.formRoot}>
				<TextField
					select
					label='Тип жилья'
					value={filterSettings.accommodationType}
					onChange={changeHandler('accommodationType')}
					SelectProps={{
						native: true
					}}
					margin='normal'
				>
					{accommodationTypes.map(type => (
						<option key={type} value={type}>
							{type}
						</option>
					))}
				</TextField>
				<FormControl component='fieldset'>
					<RadioGroup
						row
						aria-label='position'
						name='position'
						defaultValue={currencies[0]}
						onChange={changeHandler('currency')}
					>
						<FormControlLabel
							value={currencies[0]}
							control={<Radio color='primary' />}
							labelPlacement='end'
							label={currencies[0]}
						/>
						<FormControlLabel
							value={currencies[1]}
							control={<Radio color='primary' />}
							labelPlacement='end'
							label={currencies[1]}
						/>
					</RadioGroup>
				</FormControl>

				{Object.keys(settings)
					.reduce((prevValue, currentValue, index) => {
						if (!((index + 1) % 2)) {
							prevValue[prevValue.length - 1][1] = currentValue
							return prevValue
						}
						return [...prevValue, [currentValue]]
					}, settingsReducerInitialValue)
					.map(settingType => (
						<TheFiterMenuSetting
							key={settingType[0]}
							changeHandler={changeHandler}
							type={settingType}
							settings={settings}
							validations={validations}
						/>
					))}
			</form>
		</>
	)
}
