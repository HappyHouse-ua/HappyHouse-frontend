import { Container, CssBaseline } from '@material-ui/core'
import { ComponentChildren } from 'preact'

interface IMainLayoutProps {
	children: ComponentChildren
}

function MainLayout({ children }: IMainLayoutProps) {
	return (
		<>
			<CssBaseline />
			<Container maxWidth={false}>
				<div>{children}</div>
			</Container>
		</>
	)
}

export default MainLayout
