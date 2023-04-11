import React, { ChangeEvent } from "react";

interface ToggleSwitchProps {
	id: string;
	darkMode: boolean;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
	id,
	darkMode,
	onChange,
}) => {
	return (
		<fieldset
			className="header__toggle toggle"
			aria-label="theme toggle"
			role="radiogroup"
		>
			<label htmlFor={`${id}-dark`}>
				Dark Mode <span className="visually-hidden">On</span>
			</label>
			<div className="toggle__wrapper">
				<input
					type="radio"
					name="theme"
					id={`${id}-dark`}
					onChange={onChange}
					checked
				/>
				<input
					type="radio"
					name="theme"
					id={`${id}-light`}
					onChange={onChange}
					checked
				/>
				<span aria-hidden="true" className="toggle__background"></span>
				<span aria-hidden="true" className="toggle__button"></span>
			</div>
			<label htmlFor={`${id}-light`} className="visually-hidden">
				Dark Mode Off
			</label>
		</fieldset>
	);
};

export default ToggleSwitch;
