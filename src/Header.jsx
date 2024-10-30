function Header({ changeTheme, theme }) {
	return (
		<header>
			<button onClick={() => changeTheme()}>
				{theme == 'dark' ? 'Dark' : 'Light'} Mode
			</button>
		</header>
	);
}

export default Header;
