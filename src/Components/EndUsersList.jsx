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

//faker data
import users from '../data/users.json';

const EndUsersList = () => {
	const mobileScreen = useMediaQuery('(max-width: 470px)');
	const [loading, isLoading] = useState(false);
	const [commitSearch, setCommitSearch] = useState(false);

	const navigate = useNavigate();

	const CustomTableRow = ({ data }) => (
		<TableRow
			onClick={(e) => navigate('/endusers/detail/' + data.id)}
			sx={{
				':hover': {
					cursor: 'pointer',
					backgroundColor: 'lightcyan',
				},
			}}>
			<TableCell>{data.firstName}</TableCell>
			<TableCell>{data.lastName}</TableCell>
			<TableCell>{data.phone}</TableCell>
			<TableCell>{data.createdBy}</TableCell>
		</TableRow>
	);

	const tableHeads = ['نام', 'نام خانوادگی', 'تلفن', 'ساخته شده توسط'];

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
						{users.data.map((item, index) => (
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
