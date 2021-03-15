export const IMAGES_TYPES = [ 'image/jpeg', 'image/png' ];

export const MSWORD_TYPES = [
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
	'application/msword'
];

export const PDF_TYPES = [ 'application/pdf' ];

export const ALLOWED_TYPES = [ ...IMAGES_TYPES, ...MSWORD_TYPES, ...PDF_TYPES ];

export const hasInvalidFiles = (type, files) => !ALLOWED_TYPES.includes(type);

export const isImage = (type) => IMAGES_TYPES.includes(type);

export const isWord = (type) => MSWORD_TYPES.includes(type);

export const isPDF = (type) => PDF_TYPES.includes(type);
