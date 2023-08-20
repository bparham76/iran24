import { Box } from '@mui/material';
import PageFader from './PageFader';
import SyncIcon from '@mui/icons-material/Sync';

import './spinner.css';

const DivLoader = () => {
	return (
		<PageFader>
			<Box
				sx={{
					position: 'fixed',
					top: 0,
					left: 0,
					backgroundColor: 'rgba(255,255,255,0.7)',
					width: '100%',
					height: '100%',
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
		</PageFader>
	);
};

export default DivLoader;
