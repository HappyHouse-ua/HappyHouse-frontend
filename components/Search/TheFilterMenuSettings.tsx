import { ChangeHandler, IValidationState } from '../../utils/useChangeHandler'
import { TextField, Typography, Box } from '@material-ui/core'

import styles from './TheFiterMenuSetting.module.css'
import { ValidatingFilterSettings } from '../../utils/interfaces'

interface ITheFiterMenuSettingProps {
	changeHandler: ChangeHandler
	type: string[]
	settings: ValidatingFilterSettings
	validations: IValidationState
}

interface titles {
	costFrom: string
	areaFrom: string
	floorFrom: string
	buildingFloorCountFrom: string
	roomCountFrom: string
}

const titles = {
	costFrom: 'Стоимость',
	areaFrom: 'Площадь',
	floorFrom: 'Этаж',
	buildingFloorCountFrom: 'Этажность здания',
	roomCountFrom: 'Количество комнат'
}

export function TheFiterMenuSetting({
	changeHandler,
	type,
	settings,
	validations
}: ITheFiterMenuSettingProps) {
	const firstValueType = type[0]
	const secondValueType = type[1]

	return (
		<>
			<Typography component='h3' variant='h6'>
				{titles[firstValueType as keyof titles]}:
			</Typography>
			<Box display='flex' className={styles.settingBlockSpacing}>
				<TextField
					value={settings[firstValueType as keyof ValidatingFilterSettings]}
					error={!validations[firstValueType][1]}
					label='От'
					onChange={changeHandler(firstValueType, true)}
				></TextField>
				<div className={styles.inputSpacing}></div>
				<TextField
					value={settings[secondValueType as keyof ValidatingFilterSettings]}
					error={!validations[secondValueType][1]}
					label='До'
					onChange={changeHandler(secondValueType, true)}
				></TextField>
			</Box>
		</>
	)
}
