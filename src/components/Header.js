import React, {useContext, useEffect, useState, memo} from 'react';
import { Container} from 'react-bootstrap';
import '../assets/css/header.css';
import {NavLink, Link, useHistory } from "react-router-dom";
import logo from '../assets/images/cshops.png';
import axios from 'axios';
import {getToken} from '../methods/methods';

import {AppContext} from '../App';

const Header = ()=>{
	const {data, dispatch} = useContext(AppContext);	
	const [favorites, setFavorites] = useState([]);
	const [carts, setCarts] = useState([]);
	const history = useHistory()
	

	useEffect(()=>{
		getFavorites();
		getCarts();		
	},[])

	useEffect(()=>{
		if(data.favorites) setFavorites(data.favorites)
	},[data.favorites])

	useEffect(()=>{		
		if(data.carts) setCarts(data.carts)			
	},[data.carts]);

	function getFavorites(){
		axios.get(`${data.API_URL}/addto/wishlist?type=favorite`, getToken()).then((res)=>{
			if(res.data.status!==false) dispatch({type:'FETCH_FAVORITE', payload:res.data});		
		});
	}
	function getCarts(){		
		axios.get(`${data.API_URL}/addto/wishlist?type=cart`, getToken()).then((res)=>{
			if(res.data.status!==false) dispatch({type:'FETCH_CART', payload:res.data});				
		});
	}
	function getUserDetails(){
		axios.get(`${data.API_URL}/users/user`, getToken() ).then((res)=>{
      dispatch({type:'LOGGED_IN_USER', payload:res.data[0]})
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
	const signOut =()=>{
		localStorage.removeItem('auth')
		localStorage.removeItem('token')
		getUserDetails()
		history.push('/auth')
	}
	

	return (
			<React.Fragment>
				<header>
					<div className="headerGroup">
						<Container fluid>
							<div className="row d-flex align-items-center justify-content-between">
								<div>
									<Link to="/"><img src={logo} alt={logo} height="30" /></Link>
								</div>
								<div>
									<ul className="navlink">							
										<li><NavLink to="/admin/myprofile">My Account</NavLink></li>
										{
											data.loggedInUser? 
												<li><button className="btn" onClick={e=>signOut(e)}><i className="fal fa-sign-out"></i></button></li>
											:null
										}
										<li>
											<NavLink to={'/cartview'} className="btn position-relative">
												<i className="fal fa-shopping-cart"></i>
												<span style={count} 
															className="d-flex align-items-center justify-content-center bg_orange">
													{carts.length}
												</span>
											</NavLink>
										</li>
										<li>
											<NavLink to={'/wishlist'} className="btn position-relative">
												<i className="fal fa-heart"></i>
												<span style={count} 
															className="d-flex align-items-center justify-content-center bg_orange">
													{favorites.length}
												</span>
											</NavLink>
										</li>
									</ul>
								</div>
							</div>
						</Container>
					</div>
					<div className="progress" id='loader' style={{'display':'none'}}>
					  <div className="indeterminate"></div>
					</div>
				</header>
			</React.Fragment>
		)
}

let count = {	
	color:'white',
	fontSize:'10px',
	borderRadius:100,
	width:'15px',
	height:'15px',	
	top:0,
	right:'-2px',
	position:'absolute'
}

export default memo(Header)