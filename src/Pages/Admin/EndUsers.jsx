import { Typography } from '@mui/material';

import PageFader from '../../Components/UI/PageFader';
import CardContainer from '../../Components/UI/CardContainer';

export const EndUsers = () => {
	return (
		<PageFader>
			<Typography
				padding={2}
				margin={2}
				variant='h4'>
				کاربران
			</Typography>
			<CardContainer>salam</CardContainer>
		</PageFader>
	);
};
