import { useState, useEffect } from 'react';
import PageFader from '../Components/UI/PageFader';
import CardContainer from '../Components/UI/CardContainer';
import {
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
import PersonalInfo from '../Components/Admin/PersonalInfo';
import FullscreenLoader from '../Components/UI/FullscreenLoader';
import users from '../data/users.json';

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
					justifyContent='space-around'
					padding={2}
					gap={2}>
					<Box>
						<PersonalInfo data={data} />
					</Box>
					<Box>
						<Typography>{data.firstName}</Typography>
						<Typography>{data.lastName}</Typography>
						<Typography>{data.phone}</Typography>
					</Box>
				</Box>
			</CardContainer>
		</PageFader>
	);
};

export default EndUserDetails;
