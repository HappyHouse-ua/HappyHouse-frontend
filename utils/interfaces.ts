export interface IOnlyStringKeys<ValueType> {
	[key: string]: ValueType
}

type ProductProperties = string | number

export interface IProductProperties extends IOnlyStringKeys<ProductProperties> {
	type: string
	area: number
	roomCount: number
	buildingFloorCount: number
	floor: number
}
