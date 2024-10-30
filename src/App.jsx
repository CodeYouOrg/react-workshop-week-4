import { useEffect, useState } from 'react';
import CountdownTimer from './CountdownTimer';
import './App.css';
import Header from './Header';

function App() {
	const [theme, setTheme] = useState('');
	const [now, setNow] = useState(new Date());
	const [launchDate] = useState(
		new Date(Date.now() + 9 * (1000 * 60 * 60 * 24))
	);

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

	useEffect(() => {
		const initializer = setInterval(() => {
			setNow(new Date());
		}, 1000);
		return () => {
			clearInterval(initializer);
		};
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
		<main className={`${theme}`}>
			<Header changeTheme={changeTheme} theme={theme}></Header>
			<h1>{"We're launching soon"}</h1>
			<CountdownTimer now={now} launchDate={launchDate} />
		</main>
	);
}

export default App;
