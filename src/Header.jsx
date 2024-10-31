import { useEffect, useState } from 'react';

function Header() {
	const [theme, setTheme] = useState('');

	useEffect(() => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const changeTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
			localStorage.theme = 'dark';
		} else {
			setTheme('light');
			localStorage.theme = 'light';
		}
	};

	return (
		<header>
			<button onClick={() => changeTheme()}>
				{theme == 'dark' ? 'Dark' : 'Light'} Mode
			</button>
		</header>
	);
}

export default Header;
