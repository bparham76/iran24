import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Box,
	TextField,
	InputAdornment,
	Table,
	TableHead,
	TableRow,
	TableBody,
	TableCell,
	useMediaQuery,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import axios from 'axios';

const ColleaguesList = () => {
	const mobileScreen = useMediaQuery('(max-width: 470px)');
	const [loading, isLoading] = useState(true);
	const [colleagues, setColleagues] = useState();

	const getColleaguesList = async () => {
		try {
			const response = await axios.get('admin/colleagues/list');
			if (response.status == 200) setColleagues(response.data);
		} catch {}
		isLoading(false);
	};

	useEffect(() => {
		getColleaguesList();
	}, []);

	const navigate = useNavigate();

	const CustomTableRow = ({ data }) => (
		<TableRow
			onClick={(e) => navigate('/colleagues/detail/' + data.id)}
			sx={{
				':hover': {
					cursor: 'pointer',
					backgroundColor: 'lightcyan',
				},
			}}>
			<TableCell>{data.first_name}</TableCell>
			<TableCell>{data.last_name}</TableCell>
			<TableCell>{data.phone}</TableCell>
		</TableRow>
	);

	const tableHeads = ['نام', 'نام خانوادگی', 'تلفن'];

	if (loading) return;

	return (
		<Box p={2}>
			<TextField
				label='جستجو در همکاران'
				helperText='برای جستجو عبارتی را وارد کنید.'
				InputProps={{
					startAdornment: (
						<InputAdornment position='start'>
							<Search />
						</InputAdornment>
					),
				}}
			/>
			<Box
				sx={{
					width: '100%',
					overflowX: mobileScreen ? 'scroll' : 'hidden',
				}}>
				<Table>
					<TableHead>
						<TableRow>
							{tableHeads.map((item, index) => (
								<TableCell
									sx={{ fontWeight: 'bold' }}
									key={index}>
									{item}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{colleagues.map((item, index) => (
							<CustomTableRow
								key={index}
								data={item}
							/>
						))}
					</TableBody>
				</Table>
			</Box>
		</Box>
	);
};

export default ColleaguesList;
