import ToggleSwitch from "../components/ToggleSwitch";
import { useState } from "react";

const Header: React.FC = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleThemeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsDarkMode(event.target.checked);
	};

	return (
		<>
			<header className="header container">
				<div className="header__title">
					<h1>Social Media Dashboard</h1>
					<p>Total followers: 23,004</p>
				</div>
				<ToggleSwitch
					id="dark-light-switch"
					darkMode={isDarkMode}
					onChange={toggleThemeHandler}
				/>
			</header>
		</>
	);
};
export default Header;
