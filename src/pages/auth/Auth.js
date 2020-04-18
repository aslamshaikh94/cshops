import React, {useState, lazy, Suspense} from 'react';
import {Button} from 'react-bootstrap';
import '../../assets/css/auth.css';

const Register =  lazy(()=> import('./components/Register'));
const Login =  lazy(()=> import('./components/Login'));

const Auth = ()=>{
	const [authForm, setAuthForm] = useState('Login')
	const clickHandle = ()=>{
		setAuthForm(authForm==="Register"? "Login" : "Register")
	}

	const form = authForm==="Login"? <Register/> : <Login />
	return(
			<main className="auth d-flex align-items-center">
				<div className="authbanner">
				</div>
				<div className="authform">					
					<Suspense fallback={<div>Loading...</div>}>
		        {form}
		      </Suspense>
	      	<div className="d-flex mt-2 social justify-content-between">
					  <Button block type="button" size="md" className="facebook"><i className="fab fa-facebook-f"></i> Login with Facebook</Button>
					  <Button block type="button" size="md" className="twitter"><i className="fab fa-twitter"></i> Login with Twitter</Button>					  	
				  </div>
					<div className="d-flex justify-content-end">
						<Button variant="link" onClick={e=>clickHandle()}>{authForm}</Button>						
					</div>
				</div>
			</main>
		)
}

export default Auth;