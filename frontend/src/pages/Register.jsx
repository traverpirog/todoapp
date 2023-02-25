import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import classes from "../assets/css/Auth.module.css";
import Input from "../components/ui/Input.jsx";
import Title from "../components/ui/Title.jsx";

const Register = () => {
	const [email, setEmail] = useState("");
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	function register() {
		axios({
			method: "POST",
			url: "http://62.113.107.30:8080/api/users/register",
			data: {
				email,
				login,
				password,
				todos: {
					title: "First todo",
					content: "Todo content"
				}
			}
		}).then(res => console.log(res));
	}

	const getFormData = e => {
		e.preventDefault();
		register();
	};

	return (
		<div className={classes.authWrapper}>
			<div className="bg-white p-7">
				<Title>Create account</Title>
				<form className="mb-3" onSubmit={getFormData}>
					<Input
						caption={"Email"}
						type={"text"}
						placeholder={"ivan@mail.ru"}
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<Input
						caption={"Login"}
						type={"text"}
						placeholder={"ivanivan22"}
						value={login}
						onChange={e => setLogin(e.target.value)}
					/>
					<Input
						caption={"Password"}
						type={"password"}
						placeholder={"********"}
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<input
						className={classes.submit}
						type="submit"
						value="Sign Up"
					/>
				</form>
				<div className="text-center gap-3 flex items-center font-medium before:w-full before:bg-blue-600 before:h-0.5 after:w-full after:bg-blue-600 after:h-0.5">
					<div className="flex gap-1 flex-1 w-full flex-shrink-0">
						or{" "}
						<NavLink className="text-blue-600 underline" to={"/"}>
							login
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
