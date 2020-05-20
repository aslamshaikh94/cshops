import React, {useState, useEffect, useContext, memo} from  'react';
import {Col, Button, Form} from 'react-bootstrap';
import {Radio} from 'custom-input-aslam';
import axios from 'axios';
import {useHistory } from "react-router-dom";
import {initializeAnalatics} from '../../../components/GoogleAnalatics';

import {useToasts } from 'react-toast-notifications';
import FacebookLogin from 'react-facebook-login';

import {AppContext} from '../../../App';



const Register = (props)=>{
	const {data} = useContext(AppContext);
	const history = useHistory()
	const { addToast } = useToasts()

	useEffect(()=>{
		initializeAnalatics(history.location.pathname)		
	},[])
	const [user, setUser] = useState({
		usertype:'buyer',
	})
	const changeInput =(e)=>{
		let name = e.target.name;
		let value = e.target.value;
		setUser({
			...user,
			[name] : value
		})		
		props.type(value)
	}

	const register = ()=>{
		if(!user.fname){addToast('Please Enter First Name', { appearance: 'error', autoDismiss:true,  autoDismissTimeout :2000 })}
		else if(!user.lname){addToast('Please Enter Last Name', { appearance: 'error', autoDismiss:true,  autoDismissTimeout :2000 })}
		else if(!user.lname){addToast('Please Enter Last Name', { appearance: 'error', autoDismiss:true,  autoDismissTimeout :2000 })}
		else if(!user.email){addToast('Please Enter Email', { appearance: 'error', autoDismiss:true,  autoDismissTimeout :2000 })}
		else if(!user.username){addToast('Please Enter Username', { appearance: 'error', autoDismiss:true,  autoDismissTimeout :2000 })}
		else if(!user.password){addToast('Please Enter Password', { appearance: 'error', autoDismiss:true,  autoDismissTimeout :2000 })}
		else if(user.password!==user.cpassword){addToast('Password does not match', { appearance: 'error', autoDismiss:true,  autoDismissTimeout :2000 })}
		else if(!user.address){addToast('Please Enter Address', { appearance: 'error', autoDismiss:true,  autoDismissTimeout :2000 })}
		else{
			axios.post(`${data.API_URL}/auth/signup`, user).then((res)=>{
				if(!res.data.status){
					addToast(res.data.message, { appearance: 'error', autoDismiss:true,  autoDismissTimeout :2000 })					
				} 
				else{
					addToast('User Registered Successfully', { appearance: 'success', autoDismiss:true,  autoDismissTimeout :2000 })					
				}
			}).catch((err)=>{
				addToast(err, { appearance: 'error', autoDismiss:true,  autoDismissTimeout :2000 })
			});
		}		
	}

	// const responseFacebook = (response) => {
	//   console.log(response);
	// }
	// const componentClicked = (response) => {
	//   axios.post(`${data.API_URL}/auth/facebook/callback`, user).then((res)=>{
	// 		console.log(res)
	// 	})
	// }



	return(
			<React.Fragment>
					<h2 className="text-center">Register</h2>
					<p className="text-center">Log in with your email and password</p>
					<Form>
						<div className="d-flex">
							<Radio label="Buyer" value="buyer" name="usertype" onChange={e=>changeInput(e)} defaultChecked={true} />													
							<Radio label="Supplier" value="supplier" name="usertype" onChange={e=>changeInput(e)}  />
							<Radio label="Manufacturer" value="manufacturer" name="usertype" onChange={e=>changeInput(e)} />
						</div>
						<Form.Row>
			        <Form.Group as={Col} md="6">
			          <Form.Control required type="text" placeholder="First name" name="fname" onChange={e=>changeInput(e)}/>
			        </Form.Group>
			        <Form.Group as={Col} md="6">
			          <Form.Control required type="text" placeholder="Last name" name="lname" onChange={e=>changeInput(e)}/>
			        </Form.Group>
			      </Form.Row>
			      <Form.Row>
			        <Form.Group as={Col} md="6">
			          <Form.Control placeholder="Email" type="email" name="email" onChange={e=>changeInput(e)} />
			        </Form.Group>
			        <Form.Group as={Col} md="6">
			          <Form.Control placeholder="User name" name="username" onChange={e=>changeInput(e)} />
			        </Form.Group>
			      </Form.Row>
			      <Form.Row>
			        <Form.Group as={Col} md="6">
			          <Form.Control placeholder="Password" type="password" name="password" onChange={e=>changeInput(e)} />
			        </Form.Group>
			        <Form.Group as={Col} md="6">
			          <Form.Control placeholder="Confirm  Password" type="password" name="cpassword" onChange={e=>changeInput(e)} />
			        </Form.Group>
			      </Form.Row>       					 
					</Form>
			</React.Fragment>
		)
}

export default memo(Register);