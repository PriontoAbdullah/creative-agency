import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import loadingEffect2 from '../../../images/icons/loading-effect.gif';
import SingleServiceList from '../SingleServiceList/SingleServiceList';

const ServicesList = () => {
	const [ listOfServices, SetListOfServices ] = useState([]);

	useEffect(() => {
		fetch('https://creative-agency-71.herokuapp.com/getAllOrder')
			.then((res) => res.json())
			.then((getlistOfServices) => SetListOfServices(getlistOfServices));
	}, []);

	return (
		<div className="serviceListTable" style={{ backgroundColor: 'white' }}>
			<Table responsive="lg" borderless>
				<thead className="tableHead">
					<tr>
						<th>Name</th>
						<th>Email ID</th>
						<th>Service </th>
						<th>Project Details</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{listOfServices.map((services) => <SingleServiceList key={services._id} services={services} />)}
				</tbody>
			</Table>
			{listOfServices.length === 0 && <img className="pl-5" src={loadingEffect2} alt="loading effect 1" />}
		</div>
	);
};

export default ServicesList;
