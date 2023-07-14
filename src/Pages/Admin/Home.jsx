import { useState, useEffect } from 'react';
import { Typography, Grid, Button, useMediaQuery } from '@mui/material';
import CardContainer from '../../Components/UI/CardContainer';
import PageFader from '../../Components/UI/PageFader';

import CreateUser from '../../Components/CreateUser';
import UserStatsSummary from '../../Components/Admin/UserStatsSummary';
import FinancialStatsSummary from '../../Components/Admin/FinancialStatsSummary';

export const Home = () => {
	const mobileScreen = useMediaQuery('(max-width: 470px)');
	const [showUserDialog, setShowUserDialog] = useState(false);
	const [isColleague, setIsColleague] = useState(false);

	useEffect(() => {
		if (!showUserDialog)
			setTimeout(() => {
				setIsColleague(false);
			}, 500);
	}, [showUserDialog]);

	const QAButton = ({ children, ...others }) => (
		<Button
			{...others}
			fullWidth={mobileScreen}
			variant='contained'
			sx={{ mb: 1, mr: 1 }}>
			{children}
		</Button>
	);

	return (
		<PageFader>
			<CreateUser
				open={showUserDialog}
				onClose={(e) => setShowUserDialog(false)}
				isColleague={isColleague}
			/>
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
						<QAButton
							onClick={(e) => {
								setShowUserDialog(true);
								setIsColleague(true);
							}}>
							ساخت حساب همکار
						</QAButton>
						<QAButton onClick={(e) => setShowUserDialog(true)}>
							ساخت حساب کاربر
						</QAButton>
						<QAButton>حسابهای انتهای دوره</QAButton>
						<QAButton>حساب های انتهای مصرف</QAButton>
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
