import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, CardHeader } from '@material-ui/core';
import { ImageSearchOutlined } from '@material-ui/icons';

import { hasInvalidFiles } from './types';
import InputFile from './atoms/InputFile';
import FileList from './atoms/FileList';

const FileUploader = ({ children, ...props }) => {
	const refInputFile = React.createRef();

	const [ state, setState ] = useState({
		loading: false,
		files: []
	});

	const parseInputFiles = (_files) => {
		setState({ ...state, loading: true });
		for (let i = 0; i < _files.length; i++) {
			if (hasInvalidFiles(_files[i].type)) {
				setState({ ...state, loading: false });
				return alert("🐞 Invalid file's type");
			}
		}

		const files = Array.from(_files, (F) => {
			/**
			 * Aca usar el FileReader
			 */

			return {
				name: F.name,
				type: F.type,
				size: Number(F.size / Math.pow(1000, 2)).toFixed(2),
				data: null
			};
		});

		const stateFilesNames = state.files.map((x) => x.name);

		const newFiles = files.filter((f) => !stateFilesNames.includes(f.name));

		setState({ ...state, files: [ ...state.files, ...newFiles ], loading: false });
	};

	const handleClick = () => {
		refInputFile.current.click();
	};

	const onFileSelected = (files) => {
		parseInputFiles(files);
	};

	return (
		<Card style={{ background: '#eee' }}>
			<CardHeader title="Files Uploader" subheader="Allowed file formats: JPG, PNG, DOCX, DOC y PDF." />
			<CardContent>
				<FileList files={state.files} />
			</CardContent>
			<CardActions>
				<Button variant="contained" onClick={handleClick} color="primary" disabled={state.loading}>
					<ImageSearchOutlined />
					Search Files
				</Button>
			</CardActions>

			<InputFile ref={refInputFile} onFileSelected={onFileSelected} />
		</Card>
	);
};

export default FileUploader;
