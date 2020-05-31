import React, {useState, useEffect, useContext, lazy} from 'react';
import {Axios} from '../../config/apis';
import {AppContext} from '../../App';
import Hocpanel from '../components/Hocpanel';
import Contactinfo from '../../components/Contactinfo';

const Contactinfoform = lazy(()=> import('../../components/Contactinfoform'));

const Myprofile=()=>{
	const {data, dispatch} = useContext(AppContext)
	const [contact, setContact] = useState();
	const [cInfo, setCinfo] = useState();
	const [cForm, setCForm] = useState(false);
	
	useEffect(()=>{
		getContactInfo()
	},[])

	useEffect(()=>{
		if(data.contactInfo) setCinfo(data.contactInfo)
	},[data.contactInfo])
	
	function formValidation(){		
		let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		let phoneno = /^\d{10}$/;
		if(!contact.fname){			
			dispatch({type:'FETCH_ERROR', payload:'Please enter full name'})
			return false
		}
		else if(!phoneno.test(contact.phone)){			
			dispatch({type:'FETCH_ERROR', payload:'Not a valid Phone Number'})
			return false
		}		
		else if(!mailformat.test(contact.email)){			
			dispatch({type:'FETCH_ERROR', payload:'Please enter email'})
			return false
		}
		if(!contact.address){
			dispatch({type:'FETCH_ERROR', payload:'Please enter address'})			
			return false
		}
		else if(!contact.country){			
			dispatch({type:'FETCH_ERROR', payload:'Please select country'})
			return false
		}
		else if(!contact.state){			
			dispatch({type:'FETCH_ERROR', payload:'Please select state'})
			return false
		}
		else if(!contact.city){			
			dispatch({type:'FETCH_ERROR', payload:'Please select city'})
			return false
		}						
		else if(!contact.pincode){
			dispatch({type:'FETCH_ERROR', payload:'Please enter pincode'})			
			return false
		}
		else{
			return true
		}
	}

	function setContactData(data){
		setContact(data)
	}
	function saveContact(){
		let validate = formValidation()
		if(validate){
			Axios.post(`/myprofile/contact_info`, contact).then((res)=>{
				getContactInfo()
			})			
		}
	}
	function updateContact(){
		let validate = formValidation()
		if(validate){
			Axios.put(`/myprofile/contact_info/${data.contactInfo.id}`, contact).then((res)=>{
				getContactInfo()
				dispatch({type:'FETCH_SUCCESS', payload:'Information updated successfully'})
			})			
		}
	}
	
	function getContactInfo(){
		Axios.get(`/myprofile/contact_info`).then((res)=>{					
			if(res.data){
				dispatch({type:'CONTACT_INFO', payload:res.data[0]})
			}
			else{
				// setCForm(true)	
			}
		})
	}
	function editcInfo(){
		setCForm(true)
	}
	
	return (
			<div className="adminpanel">
				{
					cInfo!==false? 
						<div className="p-2">
							<div className="card">
								<div className="card-body">
									{cForm? 
										<div>
											<Contactinfoform infodata={setContactData} data={cInfo}/>
											<div className="d-flex justify-content-end">
												{
													data.contactInfo? 
														<button className="btn btn-sm btn_orange" onClick={updateContact}>Update</button> 
													: <button className="btn btn-sm btn_orange" onClick={saveContact}>Save</button> 
												}
											</div>
										</div>
										: cInfo? <Contactinfo data={cInfo} actionbtn={e=>editcInfo()} /> :null
									}
								</div>
							</div>
						</div>
					:null
				}
			</div>
		)
}

export default Hocpanel(Myprofile)