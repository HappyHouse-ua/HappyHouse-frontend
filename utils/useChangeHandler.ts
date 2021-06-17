import { StateUpdater } from 'preact/hooks'
import { ChangeEvent } from 'react'

export interface IValidationState {
	[key: string]: [(value: string) => boolean, boolean]
}

export type ChangeHandler = (
	dataType: string,
	shouldBeValidated?: boolean
) => (event: ChangeEvent) => void

export function useChangeHandler<DataType>(setDataFunc: StateUpdater<DataType>): ChangeHandler
export function useChangeHandler<DataType, ValidationType extends IValidationState>(
	setDataFunc: StateUpdater<DataType>,
	setValidationsFunc: StateUpdater<ValidationType>
): ChangeHandler
export function useChangeHandler<DataType, ValidationType extends IValidationState>(
	setDataFunc: StateUpdater<DataType>,
	setValidationsFunc?: StateUpdater<ValidationType>
) {
	const changeHandler =
		(dataType: string, shouldBeValidated?: boolean) => (event: ChangeEvent) => {
			const elementClass = getElementClass(event.target.nodeName)

			if (!elementClass) {
				return
			}
			setDataFunc(prevData => {
				if (event.target instanceof elementClass) {
					const value = event.target.value
					let newData: DataType = { ...prevData, [dataType]: value }

					if (setValidationsFunc && shouldBeValidated) {
						setValidationsFunc(prevValidations => {
							const validationFunc = prevValidations[dataType][0]
							const isValid = validationFunc(value)

							if (isValid) {
								newData = { ...prevData, [dataType]: value }
							} else {
								newData = { ...prevData }
							}

							return {
								...prevValidations,
								[dataType]: [validationFunc, validationFunc(value)]
							}
						})
					}

					return newData
				} else {
					return prevData
				}
			})
		}
	return changeHandler
}

type AllowedElementsClasses = HTMLInputElement | HTMLSelectElement

interface IAllowedElements {
	[index: string]: { new (): AllowedElementsClasses }
}

function getElementClass(elementType: string) {
	if (!HTMLElement) {
		return null
	}

	const allowedElements: IAllowedElements = { INPUT: HTMLInputElement, SELECT: HTMLSelectElement }

	if (allowedElements[elementType]) {
		return allowedElements[elementType]
	}

	return null
}
