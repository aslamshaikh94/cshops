import React, {useState, useContext, memo} from 'react';
import {Button, Form} from 'react-bootstrap';
import axios from 'axios';
import {useHistory } from "react-router-dom";
import {useToasts } from 'react-toast-notifications';
import {AppContext} from '../../../App';
import {getToken} from '../../../methods/methods';
const Login = ()=>{
	const {data, dispatch} = useContext(AppContext);	

	const { addToast } = useToasts()
	const history = useHistory()	
	const [user, setUser] = useState({
		"username":"",
		"password":""
	})	

	const changeInput =(e)=>{
		let name = e.target.name;
		let value = e.target.value;
		setUser({
			...user,
			[name] : value
		})		
	}
	function getUserDetails(){
		axios.get(`${data.API_URL}/users/user`, getToken() ).then((res)=>{
      dispatch({type:'LOGGED_IN_USER', payload:res.data.user})
      if(res.data.status===false){
          dispatch({type:'FETCH_PRODUCTS', payload:''})
          localStorage.setItem('auth', false)
          localStorage.removeItem('token')
        }
      else{
        localStorage.setItem('auth', true)
      }
      }).catch((err)=>{
      // setError({message:err})
    });
	}
	const loginUser = ()=>{
		if(user.username && user.password){
			axios.post(`${data.API_URL}/auth/login`, user).then((res)=>{					
				if(res.data.status){
					localStorage.setItem('auth', true)
					localStorage.setItem('token', res.data.token)
					getUserDetails()
					history.push('/admin/myprofile')
				}
				else{
					addToast(res.data.message, { appearance: 'error', autoDismiss:true,  autoDismissTimeout :2000 })
				}
			}).catch((err)=>{
				addToast(err, { appearance: 'error', autoDismiss:true,  autoDismissTimeout :2000 })
			});
		}
		else{			
			addToast('Please inter field', { appearance: 'error', autoDismiss:true,  autoDismissTimeout :2000 })				
		}		
	}


	return(
			<React.Fragment>
				<h2 className="text-center">Login</h2>
				<p className="text-center">Log in with your email and password</p>				
				<Form>			      
	        <Form.Group>
	          <Form.Control placeholder="User name" name="username" onChange={e=>changeInput(e)} />
	        </Form.Group>
	        <Form.Group>
	          <Form.Control placeholder="Password" type="password" name="password" onChange={e=>changeInput(e)} />
	        </Form.Group>	        
				  <Button block type="button" className="login" onClick={e=>loginUser(e)}>Login</Button>
				</Form>
			</React.Fragment>
		)
}

export default memo(Login);