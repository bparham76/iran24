import { Typography, Box } from '@mui/material';
import { Line } from 'react-chartjs-2';

const FinancialStatsSummary = () => {
	const data = {
		labels: [
			'شنبه',
			'یک شنبه',
			'دوشنبه',
			'سه شنبه',
			'چهارشنبه',
			'پنج شنبه',
			'جمعه',
		],
		datasets: [
			{
				label: 'مجموع فروش',
				backgroundColor: ['red'],
				borderColor: ['red'],
				data: [
					1200000, 1050000, 1350000, 1750000, 1400000, 1450000,
					1800000,
				],
			},
		],
	};

	const options = { responsive: true };

	return (
		<Box>
			<Typography
				variant='h6'
				m={2}>
				خلاصه وضعیت فروش در هفته جاری
			</Typography>
			<Line
				options={options}
				data={data}
				height='100%'
				width='100%'
				redraw
			/>
		</Box>
	);
};

export default FinancialStatsSummary;
