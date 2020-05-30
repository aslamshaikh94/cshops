import React, {useState, lazy, Suspense, memo, useContext} from 'react';
import {Button} from 'react-bootstrap';
import '../../assets/css/auth.css';

import {useHistory } from "react-router-dom";


import FacebookLogin from 'react-facebook-login';


import { GoogleLogin } from 'react-google-login';

import {Axios} from '../../config/apis';

const Register =  lazy(()=> import('./components/Register'));
const Login =  lazy(()=> import('./components/Login'));



const Auth = ()=>{
	const history = useHistory()

	const [authForm, setAuthForm] = useState('Login')
	const [type, setType] = useState('buyer')
	const clickHandle = ()=>{
		setAuthForm(authForm==="Register"? "Login" : "Register")
	}

	const responseGoogle = (response) => {
	  const {profileObj, accessToken} = response
	  console.log(profileObj);
	}

	const responseFacebook = (res) => {
	  Axios.post(`/auth/facebook?access_token=${res.accessToken}&type=${type}`).then((res)=>{
			if(res.data.status){
				localStorage.setItem('auth', true)
				localStorage.setItem('token', res.data.token)				
				history.push('/admin/myprofile')
			}
			else{
			
			}
		})
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
					    clientId="65459548614-fbcasihgr5n1j6mg2fa2hi45loh97ank.apps.googleusercontent.com"
					    buttonText="Login"
					    onSuccess={responseGoogle}					    
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