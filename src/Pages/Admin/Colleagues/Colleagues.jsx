import { Box, Typography } from '@mui/material';

import PageFader from '../../../Components/UI/PageFader';
import CardContainer from '../../../Components/UI/CardContainer';
import CreateColleague from '../../../Components/Admin/CreateColleague';
import ColleaguesList from '../../../Components/Admin/ColleaguesList';

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
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row-reverse',
					}}>
					<CreateColleague />
				</Box>
				<ColleaguesList />
			</CardContainer>
		</PageFader>
	);
};
