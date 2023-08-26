import * as React from 'react';

const Spacer = ({ direction = 'horizontal', size, ...props }) => {
	const width = direction === 'horizontal' ? `w-${size}` : '';
	const height = direction === 'vertical' ? `w-full h-${size}` : '';

	return <div className={`${width}${height}`} {...props}></div>;
};

export default Spacer;
