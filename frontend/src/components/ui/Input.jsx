import React from "react";

import classes from "../../assets/css/Auth.module.css";

const Input = props => {
	const {
		caption = "Field",
		type = "text",
		placeholder,
		value,
		onChange
	} = props;

	return (
		<label className={classes.label}>
			<span className={classes.caption}>{caption}:</span>
			<input
				className={classes.input}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</label>
	);
};

export default Input