import React, {useContext, useEffect, memo} from 'react';
import Product from '../../components/Product';
import SideNav from '../../components/SideNav';
import Banner from '../../components/Banner';
import ErrorBoundary from '../../components/ErrorBoundary';
import {initializeAnalatics} from '../../components/GoogleAnalatics';

import Filterbox from '../../components/Filterbox';
import {AppContext} from '../../App';
import {Axios} from '../../config/apis';

const Home = ()=>{
	const {data, dispatch} = useContext(AppContext);	

	useEffect(()=>{		
		initializeAnalatics()
	},[])
	
	useEffect(()=>{
		// if(!data.products){
			dispatch({type:'FETCH_REQUEST', payload:true})
			Axios.get(`/product/select?seokey=id,product_name,thumbnail,brand_name,
				selling_price,venders_price,minorder,slugs`).then((res, err)=>{
				if(err){
					dispatch({type:'FETCH_ERROR', payload:err})
				}
				else{
					if(res.data) dispatch({type:'FETCH_PRODUCTS', payload:res.data})
				}
			})				
		// }		
	},[])
	
	return(
		<main className="home">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-2 sidenavecol">
						<SideNav/>
					</div>
					<div className="col-lg-10">
						<Banner />
						<Filterbox />
						<div className="row no-gutters">
							<ErrorBoundary>
								{
									data.products? data.products.map((item)=>{
										return <Product product={item} key={item.product_name+item.id} />
									}) :null
								}
							</ErrorBoundary>
						</div>
					</div>
				</div>
			</div>
		</main>
		)
}

export default memo(Home);