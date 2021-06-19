import { Grid, Hidden } from '@material-ui/core'

import MainLayout from '../components/MainLayout'
import { TheProductsList } from '../components/Search/TheProductsList'

function Search() {
	return (
		<MainLayout>
			<Grid container>
				<Grid item xs={12} md={6}>
					<TheProductsList />
				</Grid>
				<Hidden smDown>
					<Grid item md={6}>
						<p>in the future, here will be map</p>
					</Grid>
				</Hidden>
			</Grid>
		</MainLayout>
	)
}
export default Search
