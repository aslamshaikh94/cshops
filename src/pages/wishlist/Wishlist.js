import React, {useEffect, useContext, useState, memo} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Ratings from '../../components/Ratings';
import {getToken} from '../../methods/methods';

import {AppContext} from '../../App';
const Wishlist = ()=>{
	const {data, dispatch} = useContext(AppContext)
	const [favorites, setFavorites] = useState();

	useEffect(()=>{
		if(data.favorites) setFavorites(data.favorites)
	},[data.favorites])

	function favorite(){
		axios.get(`${data.API_URL}/addto/wishlist?type=favorite`, getToken() ).then((res)=>{
			if(res.data.status!=false) dispatch({type:'FETCH_FAVORITE', payload:res.data});			
		});
	}
	function removeItem(e, id){
		let userid = {id:id}		
		axios.delete(`${data.API_URL}/addto/${id}`, getToken() ).then((res)=>{
			favorite()
		});
	}

	
	return (
			<main className="wishlist" >
				<div className="container">					
					<ul className="list-unstyled">
						{
							favorites? 
							favorites.map((item, i)=>{								
								return(
									  <li className="media" style={itemStyle} key={item.product_name+i}>
									  	<Link to={`/product/${item.product_id}`} target="_blank" style={linkStyle} className="black w-100 d-flex">
										    <img className="mr-3" src={item.thumbnail} 
										    		 height="80" 
										    		 alt={item.product_name}
										    		/>
										    <div className="media-body">
										      <h5 className="mt-0 mb-1">{item.product_name}</h5>
										      <i className="far fa-rupee-sign"></i> {item.price}
										      <Ratings />
										    </div>
									    </Link>
									    <i className="fal fa-times" onClick={e=>removeItem(e, item.id)}></i>
									  </li>										
									)
							})
							:null
						}

					</ul>
				</div>
			</main>
		)
}

const itemStyle={
  background:'#fff',  
  cursor: 'pointer',
  padding:'15px',
  marginBottom:'5px'
}
let linkStyle={
	textDecoration:'none',
}

export default memo(Wishlist)