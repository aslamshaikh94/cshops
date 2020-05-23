import React, {createContext, useContext, useReducer, useEffect, Suspense, lazy, memo} from 'react';
import {BrowserRouter as Router, Route, useHistory } from "react-router-dom";

import '../assets/css/panelwraper.css';
import {API_URL} from '../config/apis';
import axios from 'axios';

import {getToken} from '../methods/methods';
import {useToasts } from 'react-toast-notifications';
import {AppContext} from '../App';


const SideNave = lazy(()=> import('./components/SideNave'));
const Adminpanel = lazy(()=> import('./components/Adminpanel'));
const Enquiries = lazy(()=> import('./components/Enquiries'));
const Manufacturers = lazy(()=> import('./components/Manufacturers'));
const VenderRequests = lazy(()=> import('./components/VenderRequests'));
const Venders = lazy(()=> import('./components/Venders'));
const Dashboard = lazy(()=> import('./dashboard/Dashboard'));
const Myprofile = lazy(()=> import('./myprofile/Myprofile'));
const Myorders = lazy(()=> import('./myorders/Myorders'));
const Mybookings = lazy(()=> import('./mybookings/Mybookings'));


let initialState={
  API_URL:API_URL  
}


const Admin =(props)=>{
	const {data, dispatch} = useContext(AppContext)
	const history = useHistory()
	const { addToast } = useToasts();			


	useEffect(()=>{
			axios.get(`${data.API_URL}/users/user`, getToken()).then((res)=>{
				dispatch({type:'LOGGED_IN_USER', payload:res.data[0]})
				if(res.data.status===false){
						dispatch({type:'FETCH_PRODUCTS', payload:''})
						localStorage.setItem('auth', false)
						localStorage.removeItem('token')
						history.push('/login')
					}
				else{
					localStorage.setItem('auth', true)
				}
				}).catch((err)=>{
				// setError({message:err})
			});
	},[data.API_URL, history])

	function mobileMenu(){
		let element = document.querySelector('.adminSidebar')
		element.classList.toggle("open");
	}	
	return(
			<React.Fragment>			
				<div className="mobileMenu">
					<i className="fal fa-bars orange" onClick={e=>mobileMenu()}></i>
				</div>
				<main className="admin d-flex">
					<div className="d-flex panelwraper">
						<Suspense fallback={<div className="loader">Loading...</div>}>
							
								<Router>
									<SideNave />
									<Route path="/admin/dashboard" component={Dashboard} /> 
									<Route path="/admin/producs" component={Adminpanel} /> 
									<Route path="/admin/enquiries" component={Enquiries} /> 
									<Route path="/admin/manufacturers" component={Manufacturers} /> 
									<Route path="/admin/vender_requests" component={VenderRequests} /> 
									<Route path="/admin/venders" component={Venders} /> 
									<Route path="/admin/myprofile" component={Myprofile} /> 
									<Route path="/admin/myorders" component={Myorders} /> 
									<Route path="/admin/mybookings" component={Mybookings} /> 
								</Router>
							
						</Suspense>
					</div>
				</main>
			</React.Fragment>
		)
}

export default memo(Admin)