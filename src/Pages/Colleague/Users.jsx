import { Typography } from '@mui/material';

import PageFader from '../../Components/UI/PageFader';
import CardContainer from '../../Components/UI/CardContainer';

const Users = () => {
	return (
		<PageFader>
			<CardContainer>
				<Typography
					padding={2}
					margin={2}
					variant='h4'>
					کاربران
				</Typography>
			</CardContainer>
		</PageFader>
	);
};

export default Users;
