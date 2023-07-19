import { Typography, Box } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import { useState, useEffect } from 'react';

const UserStatsSummary = () => {
	const [userStats, setUserStats] = useState({});

	const getUserStats = async () => {
		try {
			const response = await axios.get('admin/users/stats');
			if (response.status == 200) setUserStats(response.data);
		} catch {}
	};

	useEffect(() => {
		getUserStats();
	}, []);

	return (
		<Box>
			<Typography
				variant='h6'
				m={2}>
				خلاصه آمار کاربران
			</Typography>
			<Pie
				options={{ responsive: true }}
				data={{
					labels: ['کاربران فعال', 'کاربران غیرفعال'],
					datasets: [
						{
							label: 'تعداد',
							data: [userStats.active, userStats.blocked],
							backgroundColor: ['red', 'blue'],
						},
					],
				}}
				height='100%'
				width='100%'
				redraw
			/>
		</Box>
	);
};

export default UserStatsSummary;
