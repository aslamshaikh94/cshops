import React from 'react';

import Contactinfo from '../../components/Contactinfo';

function setData(data){
	console.log('data', data)
}

const Placeorder=()=>{
	return(
			<main className="placeorder">
				<div className="container">
					<div className="bg_white p-3">
						<div className="">
							<h5 className="border-bottom pb-2 mb-3">Placeorder</h5>
							<button className="btn btn-sm btn_blue"><i className='fal fa-plus'></i> ADD A NEW ADDRESS</button>
							<Contactinfo infodata={setData}/>
						</div>
					</div>
				</div>
			</main>
		)
}

export default Placeorder;