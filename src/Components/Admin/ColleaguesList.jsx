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
} from '@mui/material';
import { Search } from '@mui/icons-material';

const ColleaguesList = () => {
	const [loading, isLoading] = useState(false);
	const [commitSearch, setCommitSearch] = useState(false);
	const [colleagueList, setColleagueList] = useState([]);

	const navigate = useNavigate();

	const CustomTableRow = () => (
		<TableRow
			onClick={(e) => navigate('/colleagues/detail/' + 1)}
			sx={{
				':hover': {
					cursor: 'pointer',
					backgroundColor: 'lightcyan',
				},
			}}>
			<TableCell>salam</TableCell>
			<TableCell>salam</TableCell>
			<TableCell>salam</TableCell>
		</TableRow>
	);

	const tableHeads = ['نام', 'نام خانوادگی', 'تلفن'];
	const data = [1, 2, 3, 45, 2, 2, 52, 2, 52, 6, 6, , 6];

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
					{data.map((item, index) => (
						<CustomTableRow key={index} />
					))}
				</TableBody>
			</Table>
		</Box>
	);
};

export default ColleaguesList;
