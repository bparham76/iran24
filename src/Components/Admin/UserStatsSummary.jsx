import { Typography, Box } from '@mui/material';
import { Pie } from 'react-chartjs-2';

const UserStatsSummary = () => {
	const data = {
		labels: ['کاربران فعال', 'کاربران غیرفعال'],
		datasets: [
			{
				label: 'تعداد',
				data: [318, 269],
				backgroundColor: ['red', 'blue'],
			},
		],
	};
	return (
		<Box>
			<Typography
				variant='h6'
				m={2}>
				خلاصه آمار کاربران
			</Typography>
			<Pie
				options={{ responsive: true }}
				data={data}
				height='100%'
				width='100%'
				redraw
			/>
		</Box>
	);
};

export default UserStatsSummary;
