import { useMediaQuery, useTheme } from '@material-ui/core'

export function useBreakpoints() {
	const theme = useTheme()

	return {
		xs: useMediaQuery(theme.breakpoints.only('xs')),
		sm: useMediaQuery(theme.breakpoints.only('sm')),
		md: useMediaQuery(theme.breakpoints.only('md')),
		lg: useMediaQuery(theme.breakpoints.only('lg')),
		xl: useMediaQuery(theme.breakpoints.only('xl')),
		smDown: useMediaQuery(theme.breakpoints.down('sm')),
		mdDown: useMediaQuery(theme.breakpoints.down('md')),
		lgDown: useMediaQuery(theme.breakpoints.down('lg')),
		xlDown: useMediaQuery(theme.breakpoints.down('xl')),
		xsUp: useMediaQuery(theme.breakpoints.up('xs')),
		smUp: useMediaQuery(theme.breakpoints.up('sm')),
		mdUp: useMediaQuery(theme.breakpoints.up('md')),
		lgUp: useMediaQuery(theme.breakpoints.up('lg')),
		xlUp: useMediaQuery(theme.breakpoints.up('xl'))
	}
}
