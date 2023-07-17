import { Typography } from '@mui/material';

import PageFader from '../../Components/UI/PageFader';
import CardContainer from '../../Components/UI/CardContainer';

const Financials = () => {
	return (
		<PageFader>
			<CardContainer>
				<Typography
					padding={2}
					margin={2}
					variant='h4'>
					امور مالی
				</Typography>
			</CardContainer>
		</PageFader>
	);
};

export default Financials;
