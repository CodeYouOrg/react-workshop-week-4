function Counter({ time, interval }) {
	return (
		<div className='counter'>
			<span>{time}</span>
			<span>{interval.toUpperCase()}</span>
		</div>
	);
}

export default Counter;
