import { Typography } from '@mui/material';

import PageFader from '../../Components/UI/PageFader';
import CardContainer from '../../Components/UI/CardContainer';

export const Settings = () => {
	return (
		<PageFader>
			<Typography
				padding={2}
				margin={2}
				variant='h4'>
				تنظیمات
			</Typography>
			<CardContainer>salam</CardContainer>
		</PageFader>
	);
};
