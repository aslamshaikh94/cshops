import React, {useEffect, useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {getToken} from '../../methods/methods';
import Ratings from '../../components/Ratings';
import {Inputfield, Textarea, Options} from '../../form/Inputfield';

import {AppContext} from '../../App';
const Cartview = ()=>{
	const {data, dispatch} = useContext(AppContext)
	const [carts, setCarts] = useState()
	const [orders, setOrders] = useState([])

	useEffect(()=>{
		getCarts()
	},[])

	useEffect(()=>{
		if(data.carts) setCarts(data.carts)
	},[data.carts]);
	
	function getCarts(){
		axios.get(`${data.API_URL}/addto/wishlist?type=cart`, getToken()).then((res)=>{
			if(res.data.status!=false) dispatch({type:'FETCH_CART', payload:res.data});				
		});
	}

	function removeItem(e, id){
		let userid = {id:id}
		axios.delete(`${data.API_URL}/addto/${id}`, getToken()).then((res)=>{
			getCarts()
		});
	}

	function inputChange(e, id){
		let name = e.target.name;
		let value = e.target.value;
		let filterorders = orders.filter(e=> e.product_id!==id);
		setOrders([...filterorders, {product_id:id, [name]:value}])
	}
	function placeOrder(){
		axios.post(`${data.API_URL}/orders`, orders, getToken()).then((res)=>{
			console.log(res.data)
		})
	}
	
	return (
			<React.Fragment>
				<main className="wishlist" >
					<div className="container">					
						<ul className="list-unstyled">
							{
								carts? 
								carts.map((item, i)=>{
									let photo = JSON.parse(item.photos)									
									return(
										  <li className="media" style={itemStyle} key={item.product_name+i}>									  	
										    <img className="mr-3" src={photo.photosurl[photo.display]} 
										    		 height="80" 
										    		 alt={item.product_name}
										    		/>
										    <div className="media-body">
										      <h5 className="mt-0 mb-1">{item.product_name}</h5>
										      <i className="far fa-rupee-sign"></i> {item.selling_price}
											    <div style={{'width': "120px"}}>
											      <Inputfield  
							    						name="quantity" 
							    						label="Quantity" 
							    						type="number"
							    						formgroup="mb-0"
							    						defaultValue={0}
							    						onChange={e=>inputChange(e, item.product_id)}
							    						/>										    	
											    </div>
										    </div>										    
									     	<i className="fal fa-times" onClick={e=>removeItem(e, item.addto_id)}></i>
										  </li>										
										)
								})
								:null
							}
						</ul>
					</div>
				</main>
				<div style={stickyBottom}>
					<div className="container">
						<div className="d-flex justify-content-end">
							<button className="btn btn_orange text-uppercase" onClick={e=>placeOrder(e)}>Place Order</button>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
}

const itemStyle={
  background:'#fff',    
  padding:'15px',
  marginBottom:'5px'
}
let linkStyle={
	textDecoration:'none',
}
let stickyBottom = {
	position:'sticky',
	bottom:'0px',
	width:'100%',
	background:'#fff',
	padding:'15px',
}

export default Cartview