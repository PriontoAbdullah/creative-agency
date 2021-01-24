import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import DashBoard from './components/AdminPannel/Dashboard/Dashboard';
import Home from './components/HomePage/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = React.createContext();

function App() {
	const [ LoggedInUser, SetLoggedInUser ] = useState({});
	const [ selectedService, SetSelectedService ] = useState([]);
	const [reviews, SetReviews] = useState([]);
	const [services, SetServices] = useState([]);

  useEffect(() => {
    fetch("https://creative-agency-71.herokuapp.com/Services")
      .then(res => res.json())
      .then(getServices => {
        SetServices(getServices.slice(0, 6));
      });
  }, []);

	useEffect(() => {
	  fetch("https://creative-agency-71.herokuapp.com/Reviews")
		.then(res => res.json())
		.then(getReviews => {
		  SetReviews(getReviews.slice(0, 6));
		});
	}, []);

	return (
		<UserContext.Provider
			value={{
				LoggedInUser,
				SetLoggedInUser,
				selectedService,
				SetSelectedService,
				reviews,
				SetReviews,
				services,
				SetServices
			}}
		>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<PrivateRoute path="/dashboard">
						<DashBoard />
					</PrivateRoute>
				</Switch>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
