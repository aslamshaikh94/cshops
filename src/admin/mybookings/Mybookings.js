import React, {useEffect, useState} from 'react';
import {AppContext} from '../../App';
import {getToken} from '../../methods/methods';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Hocpanel from '../components/Hocpanel';
import {Axios} from '../../config/apis';

const Mybookings = ()=>{
	// const {data} = useContext(AppContext);
	const [orders, setOrders] = useState()
	useEffect(()=>{
		getOrders()
	},[])

	function getOrders(){
		Axios.get(`/orders/mybookings`, getToken() ).then((res)=>{
			setOrders(res.data)
		})
	}

	function productAction(id, quantity, product_id){		
		Axios.put(`/orders`, {id:id, product_id:product_id, quantity:quantity}, getToken() ).then((res)=>{
			if(res.data.status!==false) getOrders()
		})
	}
	
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
									      	{
									      		item.status!=='accepted'? 
											      	<Button size="sm" className="ml-1 btn_orange" 
											      					onClick={e=>productAction(item.id, item.quantity, item.product_id)}>
											      		<i className="fal fa-check"></i> Accept
											      	</Button>
									      		:null
									      	}
									      	<Button size="sm" className="ml-1 btn_red">
									      		<i className="fal fa-times"></i> Close
									      	</Button>
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

export default Hocpanel(Mybookings);