import { useState } from 'react';
import {
	Box,
	Stack,
	IconButton,
	Typography,
	useMediaQuery,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FullscreenLoader from '../../../Components/UI/FullscreenLoader';
import CardContainer from '../../../Components/UI/CardContainer';
import PageFader from '../../../Components/UI/PageFader';

const UserFinancialReport = () => {
	const mobileScreen = useMediaQuery('(max-width: 470px)');
	const { id } = useParams();
	const navigate = useNavigate();

	// if (!data) return <FullscreenLoader />;
	return (
		<PageFader>
			<Stack spacing={1}>
				<CardContainer>
					<Box
						display='flex'
						gap={2}
						flexDirection={mobileScreen ? 'column' : 'row'}
						alignItems='center'
						justifyContent='space-between'>
						<Box>
							<IconButton
								onClick={(e) =>
									navigate('/endusers/detail/' + id)
								}>
								<ArrowForwardIcon />
							</IconButton>
							<Typography
								sx={{ fontWeight: 'bold' }}
								variant='p'
								m={2}
								p={2}>
								گزارش وضعیت مالی کاربر
							</Typography>
						</Box>
					</Box>
				</CardContainer>
			</Stack>
		</PageFader>
	);
};

export default UserFinancialReport;
