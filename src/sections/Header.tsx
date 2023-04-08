import ToggleSwitch from "../components/ToggleSwitch";

const Header: React.FC = () => {
	return (
		<>
			<header className="header container">
				<div className="header__title">
					<h1>Social Media Dashboard</h1>
					<p>Total followers: 23,004</p>
				</div>
				<ToggleSwitch />
			</header>
		</>
	);
};

export default Header;
