import React, {useState, useEffect, useContext, lazy} from 'react';
import axios from 'axios';
import {AppContext} from '../../App';
import {getToken} from '../../methods/methods';

const Contactinfo = lazy(()=> import('../../components/Contactinfo'));

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
										<Contactinfo infodata={setContactData}/>
										<div className="d-flex justify-content-end">
											<button className="btn btn-sm btn_orange" onClick={e=>saveContact(e)}>Save</button> 
										</div>
									</div>
								:null
							}
							<h6>Contact Information</h6>
							<p className="m-0">Name:  {cInfo? cInfo.fname :null}</p>
							<p className="m-0">Phone:  {cInfo? cInfo.phone :null}</p>
							<p className="m-0">Email:  {cInfo? cInfo.email :null}</p>
							<p className="m-0">
							Address: 
								{
									cInfo? ` ${cInfo.address}, ${cInfo.cities}, 
													${cInfo.states}, ${cInfo.pincode}, ${cInfo.countries}` 
									:null
								} 				
							</p>
						</div>
					</div>
				</div>
			</div>
		)
}

export default Myprofile