import { Typography, Box, Button } from '@mui/material';
import CardContainer from '../Components/UI/CardContainer';
import PageFader from '../Components/UI/PageFader';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
	const navigate = useNavigate();
	return (
		<PageFader>
			<CardContainer>
				<Box
					height='100vh'
					width='100vw'
					display='flex'
					flexDirection='column'
					gap={4}
					alignItems='center'
					justifyContent='center'>
					<Typography variant='h4'>
						متاسفانه صفحه مورد نظر پیدا نشد.
					</Typography>
					<Button
						variant='contained'
						onClick={(e) => navigate('/')}>
						صفحه اصلی
					</Button>
				</Box>
			</CardContainer>
		</PageFader>
	);
};

export default NotFound;
