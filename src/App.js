import React from "react";
import Header from "./Components/header";
import Main from "./Components/main";
import Footer from "./Components/footer";

import "./App.css";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Catalog from "./Components/Catalog/Catalog"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import Logout from "./Components/Logout/logout";



function App() {
	const [userstate, setUserState] = useState(() => {
		const savedUser = localStorage.getItem('userstate');
		return savedUser ? JSON.parse(savedUser) : null;
	});

	useEffect(() => {
		if (userstate) {
			localStorage.setItem('userstate', JSON.stringify(userstate));
		} else {
			localStorage.removeItem('userstate');
		}
	}, [userstate]);

	console.log(userstate);
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route
						path="/"
						element={
							<div>
								<Header userstate={userstate} />
								<Main />
								<Footer />
							</div>
						}
					/>
					<Route
						path="/profile"
						element={
							userstate && userstate._id ? (
								<Profile
									setUserState={setUserState}
									username={userstate.firstName}
								/>
							) : (
								<Login setUserState={setUserState} />
							)
						}
					></Route>
					<Route
						path="/login"
						element={<Login setUserState={setUserState} />}
					></Route>
					<Route path="/signup" element={<Register />}></Route>
					<Route path="/logout" element={<Logout setUserState={setUserState} />} />
					<Route path="/catalog" element={<Catalog />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/checkout" element={<Checkout />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;