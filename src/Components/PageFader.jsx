import { Fade, Box } from '@mui/material';

const PageFader = ({ children }) => {
	return (
		<Fade
			in={true}
			timeout={300}>
			<Box sx={{ width: '100%' }}>{children}</Box>
		</Fade>
	);
};

export default PageFader;
