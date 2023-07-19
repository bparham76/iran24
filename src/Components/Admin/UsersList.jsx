import { useState, useEffect } from 'react';
import axios from 'axios';
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

const EndUsersList = () => {
	const mobileScreen = useMediaQuery('(max-width: 470px)');
	const [users, setUsers] = useState();
	const [loading, isLoading] = useState(true);

	const navigate = useNavigate();

	const getUsers = async () => {
		try {
			const response = await axios.get('admin/users/list');
			if (response.status == 200) setUsers(response.data);
		} catch {}
		isLoading(false);
	};

	useEffect(() => {
		getUsers();
	}, []);

	const CustomTableRow = ({ data }) => (
		<TableRow
			onClick={(e) => navigate('/endusers/detail/' + data.id)}
			sx={{
				':hover': {
					cursor: 'pointer',
					backgroundColor: 'lightcyan',
				},
			}}>
			<TableCell>{data.first_name}</TableCell>
			<TableCell>{data.last_name}</TableCell>
			<TableCell>{data.phone}</TableCell>
			<TableCell>{data.created_by}</TableCell>
		</TableRow>
	);

	const tableHeads = ['نام', 'نام خانوادگی', 'تلفن', 'ساخته شده توسط'];

	if (loading) return;

	return (
		<Box p={2}>
			<TextField
				label='جستجو در کاربران'
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
					overflowX: mobileScreen ? 'scroll' : 'hidden',
					width: '100%',
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
						{users.map((item, index) => (
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

export default EndUsersList;
