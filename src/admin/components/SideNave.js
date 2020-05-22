import React, {useContext, useState, useEffect, memo} from 'react';
import { Media } from 'react-bootstrap';
import { NavLink, useHistory} from 'react-router-dom';
import '../../assets/css/adminsidebar.css';

// import {AdminContext} from '../Admin';
import {AppContext} from '../../App';
const SideNave =()=>{
	const history = useHistory()	
	const {data}=useContext(AppContext)
	const [loggedInUser, setLoggedInUser] = useState({
		fname:'',
		lname:'',
	})
	useEffect(()=>{
		if(data.loggedInUser) setLoggedInUser(data.loggedInUser)
	},[data])
	
	function mobileMenu(){
		let element = document.querySelector('.adminSidebar')
		element.classList.toggle("open");
	}

	useEffect(()=>{
		mobileMenu()
	},[history.location.pathname])
	

	return(
			<div className="adminSidebar">
				<Media className="profile border-bottom pb-2 d-flex align-items-center">
				  <img width={40} height={40} className="mr-3 rounded-circle"
				    src="https://www.w3schools.com/bootstrap4/img_avatar3.png"
				    alt="Generic placeholder"
				  />
				  <Media.Body>
				    <h6 className="mb-0 text-capitalize">{loggedInUser.fname  +' '+ loggedInUser.lname}</h6>
				    <span className="text-capitalize">{loggedInUser.usertype}</span>
				  </Media.Body>
				  <i className="fal fa-times orange closeBtn" onClick={mobileMenu}></i>
				</Media>
				<ul className="navlink">
					<li>
						<NavLink to="/admin/myprofile" >
							<i className="fal fa-user-circle"></i> <span>My Profile</span> 
						</NavLink>
					</li>
					<li>
						<NavLink to="/admin/dashboard" >
							<i className="fal fa-tachometer"></i> <span>Dashboard</span> 
						</NavLink>
					</li>
					{
						loggedInUser.usertype==='manufacturer'? 
							<li>
								<NavLink to="/admin/producs" >
									<i className="fal fa-list-ol"></i> 
									<span>My Products</span> 
								</NavLink>
							</li>
						:null
					}
					
					<li>
						<NavLink to="/admin/enquiries" >
							<i className="fal fa-envelope"></i> <span>My Enquiries</span> 
						</NavLink>
					</li>					
						{
							loggedInUser.usertype!=='manufacturer'? 
								<li>
									<NavLink to="/admin/myorders" >
										<i className="fal fa-shopping-cart"></i> <span>My Orders</span> 
									</NavLink>
								</li>
							:null
						}
						{
							loggedInUser.usertype==='manufacturer'? 
								<li>
									<NavLink to="/admin/mybookings" >
										<i className="fal fa-shopping-cart"></i> <span>My Bookings</span> 
									</NavLink>
								</li>
							:null
						}
						{
							loggedInUser.usertype==='supplier'? 
								<li>
									<NavLink to="/admin/manufacturers" >
										<i className="fal fa-industry-alt"></i> <span>Manufacturers</span> 
									</NavLink>
								</li>
							:null
						}
						{
							loggedInUser.usertype==='manufacturer'? 
								<li>
									<NavLink to="/admin/vender_requests" >
										<i className="fal fa-comment"></i> <span>Vender Requests</span> 
									</NavLink>
								</li>
							:null
						}
						{
							loggedInUser.usertype==='manufacturer'? 
								<li>
									<NavLink to="/admin/venders" >
										<i className="fal fa-users"></i> <span>Our Venders</span> 
									</NavLink>
								</li>
							:null
						}
				</ul>
			</div>
		)
}

export default memo(SideNave);