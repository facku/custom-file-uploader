import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton } from '@material-ui/core';

import { DeleteOutline } from '@material-ui/icons';

// import { isImage, isPDF, isWord } from '../types';

const CustomListItem = ({ name, size, type }) => {
	return (
		<Grid item sm={6} lg={3}>
			<Card>
				<CardActionArea>
					<CardMedia component="img" alt={name} height="140" src={'https://source.unsplash.com/random'} />
					<CardContent>contenido</CardContent>
				</CardActionArea>
				<CardActions>
					<IconButton>
						<DeleteOutline />
					</IconButton>
				</CardActions>
			</Card>
		</Grid>
	);
};

const FileList = ({ files = [] }) => {
	return (
		<Grid container spacing={4}>
			{files.map((file) => <CustomListItem key={file.name} {...file} />)}
		</Grid>
	);
};

export default FileList;
