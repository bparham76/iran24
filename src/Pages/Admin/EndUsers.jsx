import { Box, Typography } from '@mui/material';

import PageFader from '../../Components/UI/PageFader';
import CardContainer from '../../Components/UI/CardContainer';
import CreateUser from '../../Components/CreateUser';
import CreateTestConnection from '../../Components/CreateTestConnection';
import UsersList from '../../Components/UsersList';

export const EndUsers = () => {
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
						flexDirection: 'row-reverse',
					}}>
					<CreateUser />
					<CreateTestConnection />
				</Box>
				<UsersList />
			</CardContainer>
		</PageFader>
	);
};
