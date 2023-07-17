import { Box, Typography, useMediaQuery } from '@mui/material';

import PageFader from '../../Components/UI/PageFader';
import CardContainer from '../../Components/UI/CardContainer';
import CreateUser from '../../Components/CreateUser';
import CreateTestConnection from '../../Components/CreateTestConnection';
import EndUsersList from '../../Components/EndUsersList';

export const EndUsers = () => {
	const mobileScreen = useMediaQuery('(max-width: 470px)');

	return (
		<PageFader>
			<CardContainer>
				<Typography
					padding={2}
					margin={2}
					variant='h4'>
					کاربران
				</Typography>
				<Box
					sx={{
						display: 'flex',
						flexDirection: mobileScreen ? 'column' : 'row-reverse',
					}}>
					<CreateUser />
					<CreateTestConnection />
				</Box>
				<EndUsersList />
			</CardContainer>
		</PageFader>
	);
};
