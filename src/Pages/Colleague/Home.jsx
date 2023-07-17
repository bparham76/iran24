import { Typography, Grid, Box, useMediaQuery } from '@mui/material';
import CardContainer from '../../Components/UI/CardContainer';
import PageFader from '../../Components/UI/PageFader';

import CreateUser from '../../Components/CreateUser';
import CreateTestConnection from '../../Components/CreateTestConnection';

export const Home = () => {
	const mobileScreen = useMediaQuery('(max-width: 470px)');

	return (
		<PageFader>
			<Grid
				container
				spacing={1}>
				<Grid
					item
					xs={12}>
					<CardContainer>
						<Typography
							variant='h4'
							padding={2}
							margin={2}>
							صفحه اصلی
						</Typography>
						<Box
							sx={{
								display: 'flex',
								flexDirection: mobileScreen
									? 'column'
									: 'row-reverse',
							}}>
							<CreateUser />
							<CreateTestConnection />
						</Box>
					</CardContainer>
				</Grid>
				{/*<Grid
				// 	item
				// 	xs={12}
				// 	md={6}>
				// 	<CardContainer></CardContainer>
				// </Grid>
				// <Grid
				// 	item
				// 	xs={12}
				// 	md={6}>
				// 	<CardContainer></CardContainer>
						</Grid>*/}
			</Grid>
		</PageFader>
	);
};
