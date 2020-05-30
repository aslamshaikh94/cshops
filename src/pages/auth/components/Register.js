import React, {useState, useEffect, useContext, memo} from  'react';
import {Col, Button, Form} from 'react-bootstrap';
import {Radio} from 'custom-input-aslam';
import {useHistory } from "react-router-dom";
import {initializeAnalatics} from '../../../components/GoogleAnalatics';

import {Axios} from '../../../config/apis';
import {AppContext} from '../../../App';



const Register = (props)=>{
	const {dispatch} = useContext(AppContext);
	const history = useHistory()
	

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
		if(!user.fname){dispatch({type:'FETCH_ERROR', payload:'Please Enter First Name'})}
		else if(!user.lname){dispatch({type:'FETCH_ERROR', payload:'Please Enter Last Name'})}		
		else if(!user.email){dispatch({type:'FETCH_ERROR', payload:'Please Enter Email'})}
		else if(!user.username){dispatch({type:'FETCH_ERROR', payload:'Please Enter Username'})}
		else if(!user.password){dispatch({type:'FETCH_ERROR', payload:'Please Enter Password'})}
		else if(user.password!==user.cpassword){dispatch({type:'FETCH_ERROR', payload:'Password does not match'})}
		// else if(!user.address){addToast('Please Enter Address', { appearance: 'error', autoDismiss:true,  autoDismissTimeout :2000 })}
		else{
			Axios.post(`/auth/signup`, user).then((res)=>{
				if(!res.data.status){
					dispatch({type:'FETCH_ERROR', payload:res.data.message})
				} 
				else{
					dispatch({type:'FETCH_SUCCESS', payload:'User Registered Successfully'})					
				}
			})
		}		
	}




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
			      <Button block type="button" className="login" onClick={e=>register(e)}>Register</Button>     					 
					</Form>
			</React.Fragment>
		)
}

export default memo(Register);