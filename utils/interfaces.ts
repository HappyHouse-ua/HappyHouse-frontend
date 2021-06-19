import { Except } from 'type-fest'

export interface IOnlyStringKeys {
	[key: string]: unknown
}

interface ProductProperties {
	type: string
	area: number
	roomCount: number
	buildingFloorCount: number
	floor: number
}

export interface ShortProductInfo {
	image: string
	priceUSD: number
	priceUAH: number
	shortDescription: string
	address: string
	properties: ProductProperties
}

export interface FullProductInfo extends Except<ShortProductInfo, 'image'> {
	images: string[]
	description: string
}

export interface FilterSettings {
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

export type ValidatingFilterSettings = Except<FilterSettings, 'accommodationType' | 'currency'>
