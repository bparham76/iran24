import { Typography } from '@mui/material';

import PageFader from '../../Components/UI/PageFader';
import CardContainer from '../../Components/UI/CardContainer';

export const Colleagues = () => {
	return (
		<PageFader>
			<CardContainer>
				<Typography
					padding={2}
					margin={2}
					variant='h4'>
					همکاران
				</Typography>
			</CardContainer>
		</PageFader>
	);
};
