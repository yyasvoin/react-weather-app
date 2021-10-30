// jshint esversion:9
/* jshint node: true */
/* jshint browser: true */
'use strict';

import { makeStyles, Box, Typography } from '@material-ui/core';
import Image from '../img/bg-2.jpg';
import Form from './Form';

const useStyles = makeStyles({
	component: {
		height: '100vh',
		display: 'flex',
		alignItems: 'center',
		width: '65%',
		margin: '0 auto',
	},
	leftContainer: {
		width: '40%',
		height: '80%',
		backgroundImage: `url(${Image})`,
		backgroundSize: 'cover',
		borderRadius: '20px 0 0 20px',
	},
	rightContainer: {
		width: '60%',
		height: '80%',
		background: 'linear-gradient(to right, #E44A4C, #ed8c8d)',
	},
});

const Weather = () => {
	const classes = useStyles();
	return (
		<Box className={classes.component}>
			<Box className={classes.leftContainer}></Box>
			<Box className={classes.rightContainer}>
				<Form />
			</Box>
		</Box>
	);
};

export default Weather;
