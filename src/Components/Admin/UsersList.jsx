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
	Button,
	Typography,
	useMediaQuery,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FullscreenLoader from '../UI/FullscreenLoader';

const EndUsersList = () => {
	const mobileScreen = useMediaQuery('(max-width: 470px)');
	const [users, setUsers] = useState();
	const [loading, isLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [maxPage, setMaxPage] = useState(0);

	const handleNextPage = () =>
		currentPage < maxPage &&
		setCurrentPage((currentPage) => currentPage + 1);
	const handlePreviousPage = () =>
		currentPage > 1 && setCurrentPage((currentPage) => currentPage - 1);

	const navigate = useNavigate();

	const getUsers = async () => {
		isLoading(true);
		try {
			const response = await axios.get(
				'admin/users/list/page?page=' + currentPage
			);
			if (response.status == 200) {
				setUsers(response.data.users);
				setMaxPage(response.data.pages);
				isLoading(false);
			}
		} catch {
			isLoading(false);
		}
	};

	useEffect(() => {
		getUsers();
	}, [currentPage]);

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

	if (loading) return <FullscreenLoader />;

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
			<Box
				sx={{
					display: 'flex',
					width: '100%',
					mt: '1rem',
					justifyContent: 'end',
					alignItems: 'center',
					gap: 2,
				}}>
				<Button
					onClick={handlePreviousPage}
					disabled={currentPage == 1}>
					<ChevronRightIcon />
				</Button>
				<Typography variant='p'>
					صفحه {currentPage} از {maxPage}
				</Typography>
				<Button
					onClick={handleNextPage}
					disabled={currentPage == maxPage}>
					<ChevronLeftIcon />
				</Button>
			</Box>
		</Box>
	);
};

export default EndUsersList;
