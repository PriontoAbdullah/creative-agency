import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/HomePage/Home/Home';
import Login from './components/Login/Login';

export const UserContext = React.createContext();

function App() {
	const [ LoggedInUser, SetLoggedInUser ] = useState({});
	const [ selectedService, SetSelectedService ] = useState([]);

	return (
		<UserContext.Provider
			value={{
				LoggedInUser,
				SetLoggedInUser,
				selectedService,
				SetSelectedService
			}}
		>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
          <Route path='/login'>
            <Login />
          </Route>
				</Switch>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
