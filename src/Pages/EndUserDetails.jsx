import { useState, useEffect } from 'react';
import PageFader from '../Components/UI/PageFader';
import CardContainer from '../Components/UI/CardContainer';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useParams, useNavigate } from 'react-router-dom';

import users from '../data/users.json';

const EndUserDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [data, setData] = useState(null);

	useEffect(() => {
		users.data.forEach((item) => {
			if (item.id == id) setData(item);
		});
	}, []);

	if (!data) return 'loading';
	return (
		<PageFader>
			<CardContainer>
				<Box
					display='flex'
					alignItems='center'
					justifyContent='space-between'>
					<Box>
						<IconButton onClick={(e) => navigate('/endusers')}>
							<ArrowForwardIcon />
						</IconButton>
					</Box>
					<Typography
						variant='p'
						m={2}
						p={2}>
						مشخصات کاربر
					</Typography>
				</Box>
				<Box
					display='flex'
					alignItems='center'
					justifyContent='space-between'>
					<Typography>{data.firstName}</Typography>
					<Typography>{data.lastName}</Typography>
					<Typography>{data.phone}</Typography>
				</Box>
			</CardContainer>
		</PageFader>
	);
};

export default EndUserDetails;
