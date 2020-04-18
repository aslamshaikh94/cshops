import React from 'react';
import { LineChart, PieChart } from 'react-chartkick';
import 'chart.js';
// import Hocpanel from '../components/Hocpanel';

const Dashboard=()=>{
	return(
			<div className="dashboard">
				<div className="row">
					<div className="col-lg-4">
						<div className="card shadow-md">  
							<div className="card-body p-2">
								<span>My Enquiries</span>
								<div className="d-flex justify-content-center">
									<PieChart width="250px" height="250px" data={[["Pending", 44], ["Strawberry", 23]]} />								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="card shadow-md">  
							<div className="card-body p-2">
								<span>My Enquiries</span>
								<div className="d-flex justify-content-center">
									<LineChart data={{"2017-05-13": 2, "2017-05-14": 5}} />
								</div>
							</div>
						</div>
					</div>
				</div>				
			</div>
		)
}

export default Dashboard;