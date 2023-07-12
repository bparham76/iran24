import { Fade, Box } from '@mui/material';

const PageFader = ({ children }) => {
	return (
		<Fade
			in={true}
			timeout={300}>
			<Box>{children}</Box>
		</Fade>
	);
};

export default PageFader;
