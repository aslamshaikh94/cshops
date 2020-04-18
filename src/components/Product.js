import React, {useContext, useState, useEffect} from 'react';
import '../assets/css/product.css';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Ratings from './Ratings';
import {getToken} from '../methods/methods';
import {AppContext} from '../App';
import axios from 'axios';
import {useToasts } from 'react-toast-notifications';

const Product = (props)=>{
	const {data, dispatch} = useContext(AppContext);
	const [favoritesIds, setFavoritesIds] = useState([]);
	const [cartsIds, setCartsIds] = useState([]);
	const { addToast } = useToasts()

	useEffect(()=>{		
		if(data.favorites && data.favorites.length>0){
			let favorite_ids = data.favorites.map((item)=>{
				return item.product_id
			})
			setFavoritesIds(favorite_ids)			
		}		
	},[data.favorites])
	
	useEffect(()=>{
		if(data.carts && data.carts.length>0){
			let carts_ids = data.carts.map((item)=>{
				return item.product_id
			})
			setCartsIds(carts_ids)			
		}
	},[data.carts])

	const {product} = props;
	let photos = JSON.parse(product.photos);	

	function addto(id, add){
		let addinfo={product_id:id, type:add}
		axios.post(`${data.API_URL}/addto`, addinfo, getToken()).then((res)=>{
			getFavorites();
			getCarts();
		})
	}

	function getFavorites(){
		axios.get(`${data.API_URL}/addto/wishlist?type=favorite`, getToken()).then((res)=>{
			if(res.data.status===false){
				addToast(res.data.message, { appearance: 'error', autoDismiss:true,  autoDismissTimeout :2000 })
			}
			else{
				dispatch({type:'FETCH_FAVORITE', payload:res.data});
			} 
		});
	}
	function getCarts(){
		axios.get(`${data.API_URL}/addto/wishlist?type=cart`, getToken()).then((res)=>{
			console.log(res.data)
			if(res.data.status!=false) dispatch({type:'FETCH_CART', payload:res.data});				
		});
	}
	let photo = JSON.parse(product.photos)
	
	return (
			<Col xl='2' lg="3" md="3" sm="4" xs="6" className='product'>
				<div className="details text-center">
					<Link to={`/product/${product.id}`} className="item">
						<img className="img-fluid" src={`${photo.photosurl[photo.display]}`} />
						<p className="name">{product.product_name.slice(0, 15)}</p>
						<div className="price">
							<i className="far fa-rupee-sign"></i> 															 
								{
									product && data.loggedInUser && data.loggedInUser.usertype==='supplier'? 
									product.venders_price : product? product.selling_price :'null'
								}
						</div>							
						<p className="name">{product.minorder || 'NA'} Pieces (Min. Order) </p>
						<Ratings />
					</Link>
						<div className="topstrip justify-content-between">
							<div className="stock">
							In Stock {product.stock} pcs
							</div>
							<div className="add">
								{
									!cartsIds.includes(product.id)?
										<i className="fal fa-shopping-cart orange" onClick={e=>addto(product.id, 'cart')}></i>
									:null									
								}
								{
									!favoritesIds.includes(product.id)?
										<i className="fal fa-heart orange" onClick={e=>addto(product.id, 'favorite')}></i>
									:null
								}
							</div>
						</div>
				</div>
			</Col>
		)
}

export default Product