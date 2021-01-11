import { faCartPlus, faCommentDots, faHdd, faPlus, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect } from 'react';
import { Link, Route, useHistory } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Order from '../Order/Order';
import './Dashboard.css';

const DashBoard = () => {
	const { LoggedInUser, SetLoggedInUser } = useContext(UserContext);

	useEffect(
		() => {
			fetch(`http://localhost:8080/getAdmin?email=${LoggedInUser.email}`)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data) {
						const newUser = { ...LoggedInUser };
						newUser.setUser = true;
						SetLoggedInUser(newUser);
					} else {
						const newUser = { ...LoggedInUser };
						newUser.setUser = false;
						SetLoggedInUser(newUser);
					}
				});
		},
		[ ]
	);

	let history = useHistory();

	const logoutHandle = () => {
		SetLoggedInUser('');
		history.push('/');
	};

	return (
		<div className="row dashboard">
			<SplitPane split="vertical">
				<div className="col-2 dashboardOptions d-flex flex-column justify-content-between">
					<div className="">
						<Link to="/">
							<img className="dashLogo" src={logo} alt="" />
						</Link>
						<div className="dashboardLink d-flex flex-column">
							{LoggedInUser.setUser ? (
								<div className="d-flex flex-column">
									<Link to="/dashboard/AllOrders">
										<FontAwesomeIcon icon={faHdd} /> All Orders
									</Link>
									<Link to="/dashboard/serviceAdd">
										<FontAwesomeIcon icon={faPlus} /> Add Services
									</Link>
									<Link to="/dashboard/makeAdmin">
										<FontAwesomeIcon icon={faUserPlus} /> Make Admin
									</Link>
								</div>
							) : (
								<div className="d-flex flex-column">
									<Link to="/dashboard">
										<FontAwesomeIcon icon={faCartPlus} /> Order
									</Link>
									<Link to="/dashboard/service-list">
										<FontAwesomeIcon icon={faHdd} /> Service List
									</Link>
									<Link to="/dashboard/create-review">
										<FontAwesomeIcon icon={faCommentDots} /> Reviews
									</Link>
									<Link to="/dashboard/makeAdmin">
										<FontAwesomeIcon icon={faUserPlus} /> Admin Dashboard
									</Link>
								</div>
							)}
						</div>
					</div>
					<div className="mt-auto">
						<p onClick={logoutHandle}>
							<FontAwesomeIcon icon={faSignOutAlt} /> Logout
						</p>
					</div>
				</div>

				<div className="col-10 dashboardRight pt-5">
					<div className="pageNameandUser d-flex justify-content-between px-5">
						<h6>{!LoggedInUser.setUser ? 'Order' : 'Admin Panel'}</h6>
						{<p className="lead">{LoggedInUser.name} </p>}
					</div>
					<div className="dashboardDetails">
						<div className="componentList" style={{ padding: '3rem' }}>
							<Route path="/dashboard" component={Order} />
							<Route path="/dashboard/makeAdmin" component={MakeAdmin} />
						</div>
					</div>
				</div>
			</SplitPane>
		</div>
	);
};

export default DashBoard;
