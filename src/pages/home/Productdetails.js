import React, {useEffect, useState, useContext, memo} from 'react';
import axios from 'axios';
import imageHover from '../../settings/imageHover';
import Enquiry from './components/Enquiry';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import {useToasts } from 'react-toast-notifications';
import {getToken, loaderBar} from '../../methods/methods';
import {Helmet} from 'react-helmet';
import {initializeAnalatics} from '../../components/GoogleAnalatics';

import {AppContext} from '../../App';
const Productdetails =(props)=>{
	const {data, dispatch} = useContext(AppContext);	
	const [proDetails, setProDetails ] = useState()
	const [enquryForm, setEnquryForm ] = useState(false)
	const [proImages, setProImages ] = useState([])
	let proId = props.match.params.id;
	const { addToast } = useToasts();	

	useEffect(()=>{
		initializeAnalatics()
	},[])
	useEffect(()=>{
			// if(data.productDetails){
			// 	setProDetails(data.productDetails)
			// }
			// else{
				loaderBar(true)
				axios.get(`${data.API_URL}/product/${proId}`).then((res)=>{
					setProDetails(res.data[0])
					loaderBar(false)
				})				
			// }
	},[proId, data.API_URL]);
	
	function addto(id, add){
		let addinfo={product_id:id, type:add}
		axios.post(`${data.API_URL}/addto`, addinfo, getToken() ).then((res)=>{			
			if(res.data.status===false){
				addToast(res.data.message, { appearance: 'error', autoDismiss:true,  autoDismissTimeout :2000 })
			}
			else{
				getFavorites();
				getCarts();
			}
		})
	}
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
	useEffect(()=>{
		if(proDetails){
			let photos = JSON.parse(proDetails.photos)	
			let images = proDetails? 
				photos.photosurl.map((item)=>{
					return {original:`${item.url}`, thumbnail:`${item.url}`}
				}) 
			:null;		
			setProImages(images)
		} 
	},[proDetails]);
	
	function sendEnqury(){
		setEnquryForm(true)
	}
	function cancelEnquiry(){
		setEnquryForm(false)
	}			
	// console.log(proDetails)
	return (
			<main className="productDetails bg_white">
				<Helmet 
				 title={proDetails && proDetails.product_name? proDetails.product_name:null}
				 meta={[
				  {"name": "description", "content": proDetails? proDetails.details :'NA'},
				  {"name": "keywords", "content": proDetails && proDetails.product_name? proDetails.product_name:null},
				  {property: "og:type", content: "article"},
				  {property: "og:title", content: proDetails && proDetails.product_name? proDetails.product_name:null},
				  {property: "og:image", content: proDetails && proDetails.thumbnail? proDetails.thumbnail:null},
				  {property: "og:url", content: window.location.href}
				 ]}
				/>
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-5 border-right">
							{
								proImages? 
									<ImageGallery 
										items={proImages} 
										thumbnailPosition='right'
										showFullscreenButton={false}
				            showPlayButton={false}
				            showNav={false}
										renderItem={imageHover} 
									/> 
								:null
							}
						</div>
						<div className="col-lg-7">
							<h4 className="text-uppercase orange"> {proDetails? proDetails.product_name :'NA'} </h4>
							<hr/>
							<div className="text-uppercase">
								<h6><span className="blue">Price : </span> 
									{
										proDetails && data.loggedInUser && data.loggedInUser.usertype==='supplier'? 
										proDetails.venders_price : proDetails? proDetails.selling_price :'null'
									} 
								</h6>														
								<h6><span className="blue">Stock : </span> 
									{proDetails && proDetails.stock>0? proDetails.stock :' We will manufacture for you on pre order '} 
								</h6>
								<h6><span className="blue">Min. Order : </span> 
									{proDetails? proDetails.minorder :'NA'}<sup style={{'textTransform':'capitalize'}}>  Pieces</sup>
								</h6>
								<h6><span className="blue">Warranty : </span> 
									{proDetails? proDetails.warranty :'NA'}<sup style={{'textTransform':'capitalize'}}> Months</sup>
								</h6>
								{proDetails && proDetails.extra_fields? JSON.parse(proDetails.extra_fields).map((item,i)=>{
									return <h6 key={item.name+i}><span className="blue">{item.name} :</span> {item.value}</h6>
								}):null}								
							</div>
							<hr/>
							<h6 className="blue text-uppercase">Description</h6>
							<p>{proDetails? proDetails.details :'NA'} </p>
							<hr/>
							<button className="btn btn_yellow mr-2" onClick={e=>addto(proDetails.id, 'cart')}>
								<i className="fal fa-shopping-cart"></i> ADD TO CART
							</button>
							{/*<button className="btn btn_orange mr-2"><i class="fal fa-location-arrow"></i> ORDER NOW</button>*/}
							<button className="btn btn_orange mr-2" onClick={e=>sendEnqury(e)}>
								<i className="fal fa-location-arrow"></i> INQUIRY NOW
							</button>
							{
								proDetails && proDetails.phone? 
									<a href={`https://wa.me/91${proDetails.phone}?text=${window.location.href} I am interested for this product `} 
										 className="btn btn_whatsapp" target="_blanck" >
										<i className="fab fa-whatsapp"></i> WHATSAPP CHAT
									</a>								
								:null
							}
							{enquryForm? <Enquiry enqId={proId} cancelEnquiry={e=>cancelEnquiry(e)} sellerId={proDetails? proDetails.seller_id:null}/> :null}
						</div>
					</div>
					<hr />
					{
						proDetails && proDetails.terms_conditions? 
						<div>
							<h6 className="mb-0 blue text-uppercase" style={{'fontSize':'14px'}}>Terms Conditions</h6>
							<p style={{'fontSize':'12px'}}>{proDetails? proDetails.terms_conditions :'NA'} </p>
						</div>
						:null
					}
				</div>
			</main>
		)
}

export default memo(Productdetails)