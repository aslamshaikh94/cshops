import React, {useContext, useEffect, useState, lazy, memo} from 'react';


import axios from 'axios'
import {AppContext} from '../../App';
import {getToken} from '../../methods/methods';
const Contactinfoform = lazy(()=> import('../../components/Contactinfoform'));
const Contactinfo = lazy(()=> import('../../components/Contactinfo'));

function setData(data){
	// console.log('data', data)
}

const Placeorder=()=>{
	const {data} = useContext(AppContext)
	const [cInfo, setCinfo] = useState();

	useEffect(()=>{
		getContactInfo()
	},[])

	function getContactInfo(){
		axios.get(`${data.API_URL}/myprofile/contact_info`, getToken() ).then((res)=>{			
			setCinfo(res.data[0])
		})
	}
	return(
			<main className="placeorder">
				<div className="container">
					<div className="bg_white p-3">
						<div className="">
							{cInfo? <Contactinfo data={cInfo} /> :null}

							<h5 className="border-bottom pb-2 mb-3">Placeorder</h5>
							<button className="btn btn-sm btn_blue"><i className='fal fa-plus'></i> ADD A NEW ADDRESS</button>
							<Contactinfoform infodata={setData}/>
						</div>
						<div className="d-flex justify-content-end">
							<button className="btn btn_orange text-uppercase" to="/placeorder">Place Order</button>
						</div>
					</div>
				</div>
			</main>
		)
}

export default memo(Placeorder);