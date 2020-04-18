import React, {useContext, useState, useEffect, lazy} from 'react';
import {Table, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {getToken} from '../../methods/methods';

import {AdminContext} from '../Admin';
const Productform = lazy(()=>import('./Productform'));

const Productslist =(props)=>{
	const {data, dispatch} = useContext(AdminContext);
	const [proForm, setproForm] = useState(false)
	const [products, setProducts] = useState([])
	const [editItem, setEditItem] = useState([])

	useEffect(()=>{
		if(data.products) setProducts(data.products)		
	},[data]);

	const deleteProduct =(e, id)=>{
		axios.delete(`${data.API_URL}/product/delete/${id}`, getToken() ).then((res)=>{
			dispatch({type:'DELETE_PRODUCT', payload:id})
			getProducts()
		})
	}
	const getProducts =()=>{
		axios.get(`${data.API_URL}/product/admin/products`, getToken() ).then((res)=>{
			dispatch({type:'FETCH_PRODUCTS', payload:res.data})
			console.log(res.data)
		})
	}
	const editProduct =(e, id)=>{		
		setproForm(true)
		setEditItem(products.filter(e=> e.id===id))
	}
	const addProduct =(e)=>{
		setproForm(proForm? false :true)
	}

	return(
			<React.Fragment>
				<div className="border-bottom d-flex justify-content-end p-2 panelheader">
					<Button size="sm" className="btnadd" onClick={e=>addProduct(e)}>
						<i className={`far fa-${proForm? 'times': 'plus'}`}></i> {proForm? 'Cancel' :'Add Product'}
					</Button>
				</div>
				{proForm? <Productform data={editItem[0]} /> :null }
				<div className="p-2">
					<Table bordered responsive hover size="sm">
					  <thead>
					    <tr>
					      <th>#</th>
					      <th>Product Name</th>
					      <th>Purchase Price</th>
					      <th>Selling Price</th>
					      <th>Venders Price</th>
					      <th>Stock</th>
					      <th>Warranty</th>
					      <th>Photos</th>
					      <th>Actions</th>
					    </tr>
					  </thead>
					  <tbody>
					  	{
					  		products? products.map((item, i)=>{
					  			let photo = JSON.parse(item.photos)					  			
					  			return(
					  					<tr key={item.id}>
									      <td>{`CSP${item.id}`}</td>
									      <td>{item.product_name}</td>									      
									      <td>{item.purchase_price}</td>
									      <td>{item.selling_price}</td>
									      <td>{item.venders_price}</td>
									      <td>{item.stock}</td>
									      <td>{item.warranty}</td>
									      <td><img src={`${photo.photosurl[photo.display]}`} alt={item.product_name} wdith="30" height="30" /></td>
									      <td>
									      	<button className="btn btn_red btn-sm mr-1" 
									      					onClick={e=>deleteProduct(e, item.id)}
									      					>
									      		<i className="fal fa-trash-alt"></i>
									      	</button>
									      	<button className="btn btn_orange btn-sm mr-1"
									      					onClick={e=>editProduct(e, item.id)}
									      					>
									      		<i className="fal fa-pen"></i>
									      	</button>
									      	<Link className="btn btn_green btn-sm" 
									      				target="_blank"
									      				to={`/product/${item.id}`}
									      				>
									      		<i className="fal fa-eye"></i>
									      	</Link>
									      </td>
									    </tr>					    
					  				)
					  		}) :null
					  	}					    
					  </tbody>
					</Table>					
				</div>
			</React.Fragment>
		)
}

export default Productslist;