import PageFader from '../../Components/UI/PageFader';
import CardContainer from '../../Components/UI/CardContainer';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useParams, useNavigate } from 'react-router-dom';

const ColleagueDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	return (
		<PageFader>
			<CardContainer>
				<Box
					display='flex'
					alignItems='center'
					justifyContent='space-between'>
					<Box>
						<IconButton onClick={(e) => navigate('/colleagues')}>
							<ArrowForwardIcon />
						</IconButton>
					</Box>
					<Typography
						variant='p'
						m={2}
						p={2}>
						مشخصات همکار
					</Typography>
				</Box>
				{id}
			</CardContainer>
		</PageFader>
	);
};

export default ColleagueDetails;
