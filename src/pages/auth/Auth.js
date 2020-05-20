import React, {useState, lazy, Suspense, memo, useContext} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import axios from 'axios';
import '../../assets/css/auth.css';
import {AppContext} from '../../App';
import {useHistory } from "react-router-dom";


import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';


const Register =  lazy(()=> import('./components/Register'));
const Login =  lazy(()=> import('./components/Login'));



const Auth = ()=>{
	const {data} = useContext(AppContext);
	const history = useHistory()

	const [authForm, setAuthForm] = useState('Login')
	const [type, setType] = useState('buyer')
	const clickHandle = ()=>{
		setAuthForm(authForm==="Register"? "Login" : "Register")
	}

	const responseGoogle = (response) => {
	  console.log(response);
	}

	const responseFacebook = (res) => {		
	  axios.post(`${data.API_URL}/auth/facebook?access_token=${res.accessToken}&type=${type}`).then((res)=>{
			if(res.data.status){
				localStorage.setItem('auth', true)
				localStorage.setItem('token', res.data.token)				
				history.push('/admin/myprofile')
			}
			else{
				// addToast(res.data.message, { appearance: 'error', autoDismiss:true,  autoDismissTimeout :2000 })
			}
		}).catch((err)=>{
			// addToast(err, { appearance: 'error', autoDismiss:true,  autoDismissTimeout :2000 })
		});
	}

	function usertype(type){		
		setType(type)
	}

	const form = authForm==="Login"? <Register type={usertype}/> : <Login />
	return(
			<main className="auth d-flex align-items-center">
				<div className="authbanner">
				</div>
				<div className="authform">					
					<Suspense fallback={<div>Loading...</div>}>
		        {form}
		      </Suspense>
	      	<div className="d-flex mt-2 social flex-column">
	      		<FacebookLogin
						  appId="286856442338632"
						  autoLoad={false}
						  callback={responseFacebook}
						  disableMobileRedirect={true}
						  cssClass="facebook btn btn-primary btn-block btn-md mb-2"
						  icon="fa-facebook-f"
						/>
						
						<GoogleLogin
					    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
					    buttonText="Login"
					    onSuccess={responseGoogle}
					    onFailure={responseGoogle}
					    cookiePolicy={'single_host_origin'}
					  />
					  
					  
				  </div>
					<div className="d-flex justify-content-end">
						<Button variant="link" onClick={e=>clickHandle()}>{authForm}</Button>						
					</div>
				</div>
			</main>
		)
}

export default memo(Auth);