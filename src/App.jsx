import CountdownTimer from './CountdownTimer';
import Header from './Header';
import './App.css';

function App() {
	return (
		// todo: Add button to change time zone
		// todo: Add theme class to main div
		<main>
			<Header />
			<h1>{"We're launching soon"}</h1>
			<CountdownTimer />
		</main>
	);
}

export default App;
