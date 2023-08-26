import * as React from 'react';
import useTheme from '../../hooks/useTheme';
import { HiSun, HiMoon } from 'react-icons/hi';
import './ThemeButton.css';

const ThemeButton = () => {
	const [theme, toggleTheme] = useTheme();

	React.useEffect(() => {
		document.body.dataset.theme = theme;
	}, [theme]);

	return (
		<div className="container" onClick={toggleTheme}>
			<div className="switch ring-4 ring-blue-primary" />
			<div className="btn-text">
				<div className="btn-text-icon">
					<HiSun size="20" color="var(--color-text)" />
				</div>
				<div className="btn-text-icon">
					<HiMoon size="20" />
				</div>
			</div>
		</div>
	);
};

export default ThemeButton;
