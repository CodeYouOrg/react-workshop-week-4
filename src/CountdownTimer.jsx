import { useEffect, useState } from 'react';
import Counter from './Counter';

function CountdownTimer() {
	const [now, setNow] = useState(new Date());
	const [launchDate] = useState(new Date('January 1, 2025 00:00:00'));

	function convertTimeZone(date, timeZone) {
		return new Date(new Date(date).toLocaleString('en-US', { timeZone }));
	}

	useEffect(() => {
		const initializer = setInterval(() => {
			//todo: convert timezone
			setNow(new Date());
		}, 1000);
		return () => {
			clearInterval(initializer);
		};
	}, []);

	const diff = launchDate.getTime() - now.getTime();

	const remaining = diff < 0 ? 0 : diff;

	function timeConversion(remaining) {
		let seconds = 0;
		let minutes = 0;
		let hours = 0;
		let days = 0;
		if (remaining) {
			seconds = (remaining % 60000) / 1000;
			minutes = Math.floor(remaining / 60000);
			hours = Math.floor(minutes / 60);
			days = Math.floor(hours / 24);
		}
		return { seconds, minutes, hours, days };
	}

	const { seconds, minutes, hours, days } = timeConversion(remaining);

	function format(value) {
		return value.toString().padStart(2, '0');
	}

	return (
		<div className='countdown-timer'>
			<Counter time={format(days)} interval='days' />
			<Counter time={format(hours ? hours % 24 : 0)} interval='hours' />
			<Counter
				time={format(minutes ? minutes % 60 : 0)}
				interval='minutes'
			/>
			<Counter
				time={format(seconds ? Math.floor(seconds) : 0)}
				interval='seconds'
			/>
		</div>
	);
}

export default CountdownTimer;
