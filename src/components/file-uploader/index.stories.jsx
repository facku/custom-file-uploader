import React from 'react';
import { default as MyComponent } from '.';

const ExportAsDefault = {
	title: 'Components/File Uploader',
	component: MyComponent,
	args: {},
	argTypes: {}
};

export default ExportAsDefault;

const Story = (args) => <MyComponent {...args} />;

export const Default = Story.bind({});
Default.args = {};
