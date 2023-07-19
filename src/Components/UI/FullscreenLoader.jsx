import { Box } from '@mui/material';
import PageFader from './PageFader';
import SyncIcon from '@mui/icons-material/Sync';

import './spinner.css';

const FullscreenLoader = () => {
	return (
		<Box
			sx={{
				height: '100vh',
				width: '100vw',
				position: 'fixed',
				top: 0,
				right: 0,
				backgroundColor: 'rgba(255,255,255,0.7)',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<SyncIcon
				sx={{
					fontSize: '4rem',
					animation: 'spin 2s infinite linear',
				}}
			/>
		</Box>
	);
};

export default FullscreenLoader;
