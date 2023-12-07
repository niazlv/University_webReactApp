import React from "react";
import Header from "./Components/header";
import Main from "./Components/main";
import Footer from "./Components/footer";

import "./App.css";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";



function App() {
	const [userstate, setUserState] = useState({});
	console.log(userstate)
    return (
			<div className="App">
			<Router>
				<Routes>
					<Route
						path="/"
						element={<div>
							<Header />
							<Main />
							<Footer />
							</div>
						}/>
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
				</Routes>
			</Router>
			</div>
		);
}

export default App;