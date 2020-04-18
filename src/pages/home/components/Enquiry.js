import React, {useState, useEffect, useContext} from 'react';
import {Form, Col, Image, Row} from 'react-bootstrap';
import {Inputfield, Textarea, Options} from '../../../form/Inputfield';
import {useToasts } from 'react-toast-notifications';
import axios from 'axios';
import {getToken} from '../../../methods/methods';
import {AppContext} from '../../../App';

const Enquiry = (props)=>{
	const {data, dispatch} = useContext(AppContext);	

	const { addToast } = useToasts();
	let toastSetting = { appearance: 'error', autoDismiss:true,  autoDismissTimeout :2000 }
	const {enqId, sellerId} = props;	
	const [details, setDetails]= useState({
		user_id:'',
		product_id:enqId,
		seller_id:sellerId,
		fullname:'',
		phone:'',
		email:'',
		address:'',
		message:'',
		quantity:'',
	});

	useEffect(()=>{
		setDetails({...details, seller_id:sellerId})
	},[sellerId])

	const inputChange = (e)=>{
		let name = e.target.name;
		let value = e.target.value;		
		setDetails({
			...details,
			[name]:value
		})
	}
	const sendEnquiry=(e)=>{
		let {fullname, phone, email,address,message,quantity} = details;
		if(!fullname || !phone || !email || !address || !message || !quantity){
			addToast('Please enter given details', toastSetting)
		}
		else{
			axios.post(`${data.API_URL}/enquiry/send`, details, getToken()).then((res)=>{
				addToast('Your enquiry successfully send I will contact you soon', { appearance: 'success', autoDismiss:true,  autoDismissTimeout :3000 })
				props.cancelEnquiry(e)
			})			
		}
	}
	return (
			<div className="mt-4 pt-4 border-top">				
				  <Form.Row>
						<Inputfield col={4} 
						name="fullname" 
						placeholder="Full Name" 
						type="text"				    						
						onChange={e=>inputChange(e)}
						/>
						<Inputfield col={4} 
						name="phone" 
						placeholder="Contact Number" 
						type="phone"				    						
						onChange={e=>inputChange(e)}
						/>		    
						<Inputfield col={4}
						name="email" 
						placeholder="Email" 
						type="email"  				  							
						onChange={e=>inputChange(e)}
						/>
						<Inputfield col={3} 
						name="quantity" 
						placeholder="Quantity" 
						type="number"
						onChange={e=>inputChange(e)}
						/>			
						<Inputfield col={9} 
						name="address" 
						placeholder="Address" 
						type="text"
						onChange={e=>inputChange(e)}
						/>
					</Form.Row>
				  <Form.Row>
				  	<Textarea col={12} 
				  						name="message" 
				  						placeholder="Message" 				  						
				  						onChange={e=>inputChange(e)}
				  						/>
					</Form.Row>
					<div className="d-flex justify-content-end"> 
						<button className="btn btn_yellow mr-2" onClick={e=>props.cancelEnquiry(e)}>
							<i className="fal fa-times"></i> Cancel
						</button>						
						<button className="btn btn_orange" onClick={e=>sendEnquiry(e)}>
							<i className="fal fa-location-arrow"></i> SEND
						</button>						
					</div>				
			</div>
		)
}

export default Enquiry