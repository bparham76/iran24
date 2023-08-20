import {
	Box,
	Stack,
	IconButton,
	Typography,
	useMediaQuery,
	TextField,
	InputAdornment,
	Table,
	TableHead,
	TableRow,
	TableBody,
	TableCell,
	Button,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FullscreenLoader from '../../../Components/UI/FullscreenLoader';
import CardContainer from '../../../Components/UI/CardContainer';
import PageFader from '../../../Components/UI/PageFader';
import { useState, useEffect } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Search } from '@mui/icons-material';
import axios from 'axios';

const ColleagueUsersReport = () => {
	const mobileScreen = useMediaQuery('(max-width: 470px)');
	const { id } = useParams();
	const navigate = useNavigate();

	const [users, setUsers] = useState();
	const [colleague, setColleague] = useState();
	const [loading, isLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [maxPage, setMaxPage] = useState(0);

	const handleNextPage = () =>
		currentPage < maxPage &&
		setCurrentPage((currentPage) => currentPage + 1);
	const handlePreviousPage = () =>
		currentPage > 1 && setCurrentPage((currentPage) => currentPage - 1);

	const getUsersList = async () => {
		try {
			isLoading(true);
			const response = await axios.get(
				'admin/colleagues/' + id + '/users?page=' + currentPage
			);
			if (response.status == 200) {
				setUsers(response.data.users);
				setMaxPage(response.data.pages);
				setColleague(response.data.creator);
				isLoading(false);
			}
		} catch {
			isLoading(false);
		}
	};

	useEffect(() => {
		getUsersList();
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
		</TableRow>
	);

	const tableHeads = ['نام', 'نام خانوادگی', 'تلفن'];

	if (loading) return <FullscreenLoader />;

	return (
		<PageFader>
			<Stack spacing={1}>
				<CardContainer>
					<Box
						display='flex'
						gap={2}
						flexDirection={mobileScreen ? 'column' : 'row'}
						alignItems='center'
						justifyContent='space-between'>
						<Box>
							<IconButton
								onClick={(e) =>
									navigate('/colleagues/detail/' + id)
								}>
								<ArrowForwardIcon />
							</IconButton>
							<Typography
								sx={{ fontWeight: 'bold' }}
								variant='p'
								m={2}
								p={2}>
								کاربران ثبت شده توسط
								{' ' +
									colleague?.first_name +
									' ' +
									colleague?.last_name}
							</Typography>
						</Box>
					</Box>
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
				</CardContainer>
			</Stack>
		</PageFader>
	);
};

export default ColleagueUsersReport;
