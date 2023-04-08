import { useState } from "react";

const ToggleSwitch = () => {
	return (
		<fieldset
			className="header__toggle toggle"
			aria-label="theme toggle"
			role="radiogroup"
		>
			<label htmlFor="light">Light</label>
			<div className="toggle__wrapper">
				<input type="radio" name="theme" id="light" checked />
				<input type="radio" name="theme" id="dark" />
				<span aria-hidden="true" className="toggle__background"></span>
				<span aria-hidden="true" className="toggle__button"></span>
			</div>
			<label htmlFor="dark">Dark</label>
		</fieldset>
	);
};

export default ToggleSwitch;
