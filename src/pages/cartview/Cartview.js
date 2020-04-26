import React, {useEffect, useContext, useState, memo} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {getToken} from '../../methods/methods';
import Ratings from '../../components/Ratings';
import Contactinfo from '../../components/Contactinfo';
import Contactinfoform from '../../components/Contactinfoform';
import {useToasts } from 'react-toast-notifications';
import {Inputfield, Textarea, Options} from '../../form/Inputfield';

import {AppContext} from '../../App';
const Cartview = ()=>{
	const {data, dispatch} = useContext(AppContext)
	const [carts, setCarts] = useState()
	const { addToast } = useToasts()
	const [cInfo, setCinfo] = useState();

	useEffect(()=>{
		// getCarts()
	},[])

	useEffect(()=>{
		if(data.carts){
			let initdata = data.carts.map((item)=>{
				return {...item, quantity:item.minorder}
			})
			setCarts(initdata)
		} 
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
		let cartsItem = carts.map(el=>	{					
					if(el.id===id){
						return {...el, [name]:value}
					}
					else{
						return el
					}	 
				}
			);
			
		setCarts(cartsItem)
	}

	function inputonBlur(e, id){
		let name = e.target.name;
		let value = e.target.value;	
		let min = e.target.min;	
		if(value<min){
			e.target.value = min
			let cartsItem = carts.map(el=>	{					
						if(el.id===id){
							return {...el, [name]:min}
						}
						else{
							return el
						}	 
					}
				);
				
			setCarts(cartsItem)
		}
	}

	function placeOrder(){	
		let postOrder = carts.map((item)=>{	
			let {id, product_id, seller_id, product_name, price, quantity}	= item	
			return {id, product_id, seller_id, product_name, price, quantity}
		})
		
		axios.post(`${data.API_URL}/orders`, postOrder, getToken()).then((res)=>{			
			if(res.data.status===true) getCarts()
		})
	}
	useEffect(()=>{
		getContactInfo()
	},[])

	function getContactInfo(){
		axios.get(`${data.API_URL}/myprofile/contact_info`, getToken() ).then((res)=>{			
			setCinfo(res.data[0])
		})
	}

	function setData(data){
		// console.log('data', data)
	}

	console.log(data.carts)
	
	return (
			<React.Fragment>
				<main className="wishlist" >
					<div className="container">	
						<div className="row">
							<div className="col-lg-8">
								<ul className="list-unstyled">
									{
										data.carts? 
										data.carts.map((item, i)=>{																		
											return(
												  <li className="media" style={itemStyle} key={item.product_name+i}>									  	
												    <img className="mr-3" src={item.thumbnail} 
												    		 height="80" 
												    		 alt={item.product_name}
												    		/>
												    <div className="media-body">
												      <h5 className="mt-0 mb-1">{item.product_name}</h5>
												      <i className="far fa-rupee-sign"></i> {item.price}
													    <div style={{'width': "120px"}}>
													      <Inputfield  
									    						name="quantity" 
									    						label="Quantity" 
									    						type="number"
									    						formgroup="mb-0"
									    						min={item.minorder}
									    						defaultValue={item.quantity || item.minorder}									    						
									    						onBlur={e=>inputonBlur(e, item.id)}
									    						onChange={e=>inputChange(e, item.id)}
									    						/>										    	
													    </div>
												    </div>										    
											     	<i className="fal fa-times" onClick={e=>removeItem(e, item.id)}></i>
												  </li>										
												)
										})
										:null
									}
								</ul>
							</div>
							<div className="col-lg-4">
								<div className="bg_white p-3">
									{cInfo? <Contactinfo data={cInfo} /> :null}
									
								</div>
							</div>
						</div>				
					</div>
				</main>
				<div style={stickyBottom}>
					<div className="container">
						<div className="d-flex justify-content-end">
							<button className="btn btn_orange text-uppercase" onClick={e=>placeOrder()}>Place Order</button>
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

export default memo(Cartview)