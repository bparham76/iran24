import { Typography, Grid } from '@mui/material';
import CardContainer from '../../Components/UI/CardContainer';
import PageFader from '../../Components/UI/PageFader';

import CreateUser from '../../Components/CreateUser';
import CreateColleague from '../../Components/Admin/CreateColleague';
import UserStatsSummary from '../../Components/Admin/UserStatsSummary';
import FinancialStatsSummary from '../../Components/Admin/FinancialStatsSummary';

export const Home = () => {
	return (
		<PageFader>
			<Typography
				variant='h4'
				padding={2}
				margin={2}>
				صفحه اصلی
			</Typography>
			<Grid
				container
				spacing={1}>
				<Grid
					item
					xs={12}>
					<CardContainer>
						<Typography
							variant='h6'
							pb={2}>
							دسترسی سریع
						</Typography>
						<CreateUser />
						<CreateColleague />
					</CardContainer>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}>
					<CardContainer>
						<UserStatsSummary />
					</CardContainer>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}>
					<CardContainer>
						<FinancialStatsSummary />
					</CardContainer>
				</Grid>
			</Grid>
		</PageFader>
	);
};
