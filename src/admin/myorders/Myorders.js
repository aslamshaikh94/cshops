import React, {useEffect, useState} from 'react';
import {AppContext} from '../../App';

import {Link} from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Hocpanel from '../components/Hocpanel';
import {Axios} from '../../config/apis';

const Myorders = ()=>{
	// const {data} = useContext(AppContext);
	const [orders, setOrders] = useState()
	useEffect(()=>{
		getOrders()
	},[])

	function getOrders(){
		Axios.get(`/orders`).then((res)=>{
			setOrders(res.data)
		})
	}

	// function cancelProduct(){

	// }
	
	return(			
			<div className="p-2">
				<div className="p-2">
					<Table className="table table-sm table-bordered">
					  <Thead>
					    <Tr>
					      <Th>#</Th>
					      <Th>Product Name</Th>
					      <Th>Quantity</Th>
					      <Th>Price</Th>					     					      					      
					      <Th>Total</Th>
					      <Th>Status</Th>
					      <Th>Actions</Th>
					    </Tr>
					  </Thead>
					  <Tbody>
					  	{
					  		orders? orders.map((item, i)=>{					  					  			
					  			return(
					  					<Tr key={item.product_name+i}>
									      <Td>{`CSP${item.product_id}`}</Td>
									      <Td>{item.product_name}</Td>									      									      
									      <Td>{item.quantity}</Td>
									      <Td><i className="fal fa-rupee-sign"></i> {item.price}</Td>									      									      
									      <Td><i className="fal fa-rupee-sign"></i> {item.quantity * item.price}</Td>
									      <Td>{item.status}</Td>
									      <Td>									      									      	
									      	<Link className="btn btn_green btn-sm" 
									      				target="_blank"
									      				to={`/product/${item.product_id}`}
									      				>
									      		<i className="fal fa-eye"></i> View
									      	</Link>
									      </Td>
									    </Tr>					    
					  				)
					  		}) :null
					  	}					    
					  </Tbody>
					</Table>					
				</div>
			</div>			
		)
}

export default Hocpanel(Myorders);