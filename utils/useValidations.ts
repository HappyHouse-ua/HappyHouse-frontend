export function useValidations() {
	return {
		onlyNumbers: (value: string) => (value.trim() ? !!Number(value) : true)
	}
}
