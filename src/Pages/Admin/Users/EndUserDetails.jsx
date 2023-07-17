import { useState, useEffect } from 'react';
import PageFader from '../../../Components/UI/PageFader';
import CardContainer from '../../../Components/UI/CardContainer';
import {
	Stack,
	Box,
	Button,
	Typography,
	IconButton,
	useMediaQuery,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EditIcon from '@mui/icons-material/Edit';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import { useParams, useNavigate } from 'react-router-dom';
import PersonalInfo from '../../../Components/Admin/PersonalInfo';
import FullscreenLoader from '../../../Components/UI/FullscreenLoader';
import users from '../../../data/users.json';

const EndUserDetails = () => {
	const mobileScreen = useMediaQuery('(max-width: 470px)');
	const { id } = useParams();
	const navigate = useNavigate();
	const [data, setData] = useState(null);
	const [active, setActive] = useState(true);

	const suspend = () => {
		setActive(false);
	};
	const resume = () => {
		setActive(true);
	};

	useEffect(() => {
		users.data.forEach((item) => {
			if (item.id == id) setData(item);
		});
	}, []);

	if (!data) return <FullscreenLoader />;
	return (
		<PageFader>
			<Stack spacing={1}>
				<CardContainer>
					<Box
						display='flex'
						alignItems='center'
						gap={2}
						flexDirection={mobileScreen ? 'column' : 'row'}
						justifyContent='space-between'>
						<Box>
							<IconButton onClick={(e) => navigate('/endusers')}>
								<ArrowForwardIcon />
							</IconButton>
							<Typography
								sx={{ fontWeight: 'bold' }}
								variant='p'
								m={2}
								p={2}>
								مشخصات کاربر
							</Typography>
						</Box>
						<Box>
							{active ? (
								<Button
									onClick={suspend}
									variant='contained'
									color='error'
									startIcon={<StopCircleIcon />}>
									تعلیق
								</Button>
							) : (
								<Button
									onClick={resume}
									variant='contained'
									color='success'
									startIcon={<PlayCircleIcon />}>
									فعال سازی
								</Button>
							)}
							<Button
								sx={{ ml: 1 }}
								variant='contained'
								startIcon={<EditIcon />}>
								ویرایش
							</Button>
						</Box>
					</Box>
					<Box
						flexDirection={mobileScreen ? 'column' : 'row'}
						display='flex'
						alignItems='center'
						justifyContent='flex-start'
						padding={2}
						gap={2}>
						<Box>
							<PersonalInfo data={data} />
						</Box>
						{/* QR code and connection here */}
					</Box>
				</CardContainer>
				<CardContainer>
					<Box
						display='flex'
						gap={2}
						flexDirection='row'
						alignItems='center'
						justifyContent='space-between'>
						<Box>
							<Typography
								sx={{ fontWeight: 'bold' }}
								variant='p'
								m={2}
								p={2}>
								وضعیت مالی
							</Typography>
						</Box>
						<Button
							onClick={(e) => navigate('financial')}
							variant='contained'>
							گزارش تفصیلی
						</Button>
					</Box>
				</CardContainer>
				<CardContainer>
					<Box
						display='flex'
						gap={2}
						flexDirection='row'
						alignItems='center'
						justifyContent='space-between'>
						<Box>
							<Typography
								sx={{ fontWeight: 'bold' }}
								variant='p'
								m={2}
								p={2}>
								وضعیت مصرف
							</Typography>
						</Box>
						<Button
							onClick={(e) => navigate('consume')}
							variant='contained'>
							گزارش تفصیلی
						</Button>
					</Box>
				</CardContainer>
			</Stack>
		</PageFader>
	);
};

export default EndUserDetails;
