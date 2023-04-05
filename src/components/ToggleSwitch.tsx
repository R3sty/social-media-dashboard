import React, { useState } from 'react';

interface ToggleSwitchProps {
	disabled?: boolean;
	checked: boolean;
	onChange: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
	disabled = false,
	checked,
	onChange,
}) => {
	const [isChecked, setIsChecked] = useState(checked);

	const handleToggle = () => {
		if (!disabled) {
			setIsChecked(!isChecked);
			onChange(!isChecked);
		}
	};

	return (
		<div
			className={`toggle-switch ${disabled ? 'toggle-switch-disabled' : ''}`}
		>
			<input
				type='checkbox'
				className='toggle-switch-checkbox'
				checked={isChecked}
				onChange={handleToggle}
			/>
			<label className='toggle-switch-label'>
				<span className='toggle-switch-inner'>
					<span className='toggle-switch-active'>Yes</span>
					<span className='toggle-switch-inactive'>No</span>
				</span>
				<span className='toggle-switch-switch' />
			</label>
		</div>
	);
};

export default ToggleSwitch;
