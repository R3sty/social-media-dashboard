import { useState } from 'react';
import ToggleSwitch from '../components/ToggleSwitch';

const Header: React.FC = () => {
	const [checked, setChecked] = useState(true);
	return (
		<>
			<header>
				<div>
					<h1>Social Media Dashboard</h1>
					<p>Total followers: 23,004</p>
				</div>
				<div>
					<ToggleSwitch
						disabled
						checked
						onChange={(checked) => setChecked(checked)}
					/>
				</div>
			</header>
		</>
	);
};

export default Header;
