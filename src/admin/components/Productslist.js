import React, {useContext, useState, useEffect, lazy, memo} from 'react';
import {Button} from 'react-bootstrap';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {Link} from 'react-router-dom';
import {Axios} from '../../config/apis';
import {getToken} from '../../methods/methods';

// import {AdminContext} from '../Admin';
import {AppContext} from '../../App';

const Productform = lazy(()=>import('./Productform'));
const defaultObject = false

const Productslist =(props)=>{
	const {data, dispatch} = useContext(AppContext);
	const [proForm, setproForm] = useState(false)
	const [products, setProducts] = useState([])
	const [formtype, setFormtype] = useState(true)

	const [editItem, setEditItem] = useState(defaultObject)

	useEffect(()=>{
		if(data.products) setProducts(data.products)		
	},[data]);

	const deleteProduct =(e, id)=>{
		Axios.delete(`/product/delete/${id}`, getToken() ).then((res)=>{
			dispatch({type:'DELETE_PRODUCT', payload:id})
			getProducts()
		})
	}
	const getProducts =()=>{
		Axios.get(`/product/admin/products`, getToken() ).then((res)=>{
			if(res.data.status!==false) dispatch({type:'FETCH_PRODUCTS', payload:res.data})			
		})
	}
	const editProduct =(e, id)=>{
		setproForm(true)
		setEditItem(products.find(e=> e.id===id))
		setFormtype(false)
	}
	const addProduct = async (e)=>{
		await setproForm(proForm? false :true)
		await setEditItem(defaultObject)
	}

	return(
			<React.Fragment>
				<div className="border-bottom d-flex justify-content-end p-2 panelheader">
					<Button size="sm" className="btnadd" onClick={e=>addProduct(e)}>
						<i className={`far fa-${proForm? 'times': 'plus'}`}></i> {proForm? 'Cancel' :'Add Product'}
					</Button>
				</div>
				{proForm? <Productform data={editItem} create={formtype} /> :null }
				<div className="p-3">
					<Table className="table table-sm table-bordered" size="sm">
					  <Thead>
					    <Tr>
					      <Th>#</Th>
					      <Th>Product Name</Th>
					      <Th>Purchase Price</Th>
					      <Th>Selling Price</Th>
					      <Th>Venders Price</Th>
					      <Th>Stock</Th>
					      <Th>Warranty</Th>
					      <Th>Photos</Th>
					      <Th>Actions</Th>
					    </Tr>
					  </Thead>
					  <Tbody>
					  	{
					  		products? products.map((item, i)=>{					  			
					  			return(
					  					<Tr key={item.id}>
									      <Td>{`CSP${item.id}`}</Td>
									      <Td>{item.product_name}</Td>									      
									      <Td>{item.purchase_price}</Td>
									      <Td>{item.selling_price}</Td>
									      <Td>{item.venders_price}</Td>
									      <Td>{item.stock}</Td>
									      <Td>{item.warranty}</Td>
									      <Td><img src={item.thumbnail} alt={item.product_name} wdith="30" height="30" /></Td>
									      <Td>
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
									      </Td>
									    </Tr>					    
					  				)
					  		}) :null
					  	}					    
					  </Tbody>
					</Table>					
				</div>
			</React.Fragment>
		)
}

export default memo(Productslist);