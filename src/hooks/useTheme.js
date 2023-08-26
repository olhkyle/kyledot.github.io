import React from 'react';

const useTheme = () => {
	let initializeTheme;

	if (typeof window !== 'undefined') {
		initializeTheme = () => localStorage.getItem('theme') ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
	}

	const [theme, setTheme] = React.useState(initializeTheme);

	React.useEffect(() => {
		document.body.dataset.theme = theme;
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		const darkQuery = theme === 'light' ? 'dark' : 'light';

		setTheme(theme => darkQuery);
	};

	return [theme, toggleTheme];
};

export default useTheme;
