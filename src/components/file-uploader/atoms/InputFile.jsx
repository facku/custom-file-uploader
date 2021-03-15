import React from 'react';

const InputFile = React.forwardRef((props, ref) => {
	return (
		<input
			multiple
			type="file"
			style={{ display: 'none' }}
			ref={ref}
			onChange={(e) => props.onFileSelected(e.target.files)}
		/>
	);
});

export default InputFile;
