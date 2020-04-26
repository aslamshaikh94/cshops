import React, {useState, useEffect, useContext, lazy, memo} from 'react';
import axios from 'axios';
import {AppContext} from '../../App';
import {getToken} from '../../methods/methods';
import Hocpanel from '../components/Hocpanel';

import Contactinfo from '../../components/Contactinfo';
const Contactinfoform = lazy(()=> import('../../components/Contactinfoform'));

const Myprofile=()=>{
	const {data, dispatch} = useContext(AppContext)
	const [contact, setContact] = useState();
	const [cInfo, setCinfo] = useState();

	useEffect(()=>{
		getContactInfo()
	},[])

	function setContactData(data){
		setContact(data)
	}
	function saveContact(){
		axios.post(`${data.API_URL}/myprofile/contact_info`, contact, getToken() ).then((res)=>{
			getContactInfo()
		})
	}
	function getContactInfo(){
		axios.get(`${data.API_URL}/myprofile/contact_info`, getToken() ).then((res)=>{
			setCinfo(res.data[0])
		})
	}
	
	return (
			<div className="adminpanel">
				<div className="p-2">
					<div className="card">
						<div className="card-body">
							{
								!cInfo? 
									<div>
										<Contactinfoform infodata={setContactData}/>
										<div className="d-flex justify-content-end">
											<button className="btn btn-sm btn_orange" onClick={e=>saveContact(e)}>Save</button> 
										</div>
									</div>
								:null
							}
							{cInfo? <Contactinfo data={cInfo} /> :null}
						</div>
					</div>
				</div>
			</div>
		)
}

export default Hocpanel(Myprofile)