import { Paper } from '@mui/material';
import { useState } from 'react';

const CardContainer = ({ children }) => {
	const [hover, setHover] = useState(false);

	return (
		<Paper
			sx={{
				p: 1,
			}}
			elevation={hover ? 4 : 1}
			onMouseEnter={(e) => setHover(true)}
			onMouseLeave={(e) => setHover(false)}>
			{children}
		</Paper>
	);
};

export default CardContainer;
