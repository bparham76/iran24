import { Typography, Box, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import PageFader from '../../Components/UI/PageFader';
import CardContainer from '../../Components/UI/CardContainer';

export const Statistics = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<PageFader>
			<CardContainer>
				<Typography
					padding={2}
					margin={2}
					variant='h4'>
					شرح آمار
				</Typography>
				<Box sx={{ width: '100%' }}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<Tabs
							value={value}
							onChange={handleChange}>
							<Tab
								label='کاربران'
								{...a11yProps(0)}
							/>
							<Tab
								label='همکاران'
								{...a11yProps(1)}
							/>
							<Tab
								label='فنی'
								{...a11yProps(2)}
							/>
							<Tab
								label='مالی'
								{...a11yProps(3)}
							/>
						</Tabs>
					</Box>
					<CustomTabPanel
						value={value}
						index={0}>
						کاربران
					</CustomTabPanel>
					<CustomTabPanel
						value={value}
						index={1}>
						همکاران
					</CustomTabPanel>
					<CustomTabPanel
						value={value}
						index={2}>
						فنی
					</CustomTabPanel>
					<CustomTabPanel
						value={value}
						index={3}>
						مالی
					</CustomTabPanel>
				</Box>
			</CardContainer>
		</PageFader>
	);
};

function CustomTabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}
