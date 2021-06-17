import { Typography } from '@material-ui/core'
import Image from 'next/image'
import Link from 'next/link'

import styles from './TheImageCard.module.css'

interface ITheImageCardProps {
	title: string
	src: string
	width: number
	href: string
}

export function TheImageCard({ title, src, width, href }: ITheImageCardProps) {
	const height = (width * 9) / 16

	return (
		<Link href={href}>
			<div className={styles.root} style={{ width: `${width}px`, height: `${height}px` }}>
				<Typography variant='h4' className={styles.caption}>
					{title}
				</Typography>
				<Image src={src} layout='fill' className={styles.image} />
				<div className={styles.overlay}></div>
			</div>
		</Link>
	)
}
