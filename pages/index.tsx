import MainLayout from '../components/MainLayout'
import { Box } from '@material-ui/core'
import { useBreakpoints } from '../utils/useBreakpoints'

import { TheImageCard } from '../components/Index/TheImageCard'
import { TheHeader } from '../components/Index/TheHeader'

const images = new Array(5).fill({
	src: '/images/image1.jpg',
	title: 'pepega',
	width: 500,
	href: '/search'
})

function Index() {
	const breakpoints = useBreakpoints()

	return (
		<MainLayout>
			<TheHeader />
			<Box component='main' display='flex' justifyContent='center' flexWrap='wrap'>
				{images.map((image, index) => (
					<TheImageCard
						key={index}
						src={image.src}
						title={image.title}
						href={image.href}
						width={breakpoints.mdDown ? image.width / 1.5 : image.width}
					/>
				))}
			</Box>
		</MainLayout>
	)
}

export default Index
