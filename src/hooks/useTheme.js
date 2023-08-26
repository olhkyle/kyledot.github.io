import React from 'react';

const useTheme = () => {
	let initializeTheme;

	if (typeof window !== 'undefined') {
		initializeTheme = () => localStorage.getItem('theme') ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
	}

	const [theme, setTheme] = React.useState(initializeTheme);

	const toggleTheme = () => {
		setTheme(theme => {
			return theme === 'light' ? 'dark' : 'light';
		});
		localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
	};

	return [theme, toggleTheme];
};

export default useTheme;
