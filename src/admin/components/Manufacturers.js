import React, {useContext, useState, useEffect, lazy} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useToasts } from 'react-toast-notifications';

import Hocpanel from './Hocpanel';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {getToken} from '../../methods/methods';

import {AdminContext} from '../Admin';
const Productform = lazy(()=>import('./Productform'));

const Manufacturers =(props)=>{
	const {data, dispatch} = useContext(AdminContext);
	const [manufacturers, setManufacturers] = useState([]);
	const { addToast } = useToasts();

	useEffect(()=>{
		axios.get(`${data.API_URL}/users/manufacturers`, getToken() ).then((res)=>{
			if(res.data.status!==false) setManufacturers(res.data)
		})
	},[])

	const requestVender = (e, id)=>{		
		console.log(id)
		axios.post(`${data.API_URL}/users/vender_request/${id}`, '', getToken() ).then((res)=>{
			if(res.data.status===false){
				addToast(res.data.message , { appearance: 'error', autoDismiss:true,  autoDismissTimeout :2000 })
			}
			else{
				addToast('Your sent successfully' , { appearance: 'success', autoDismiss:true,  autoDismissTimeout :2000 })
			}
		})
	}
	return(
			<div className="p-2">
					<Table className="table table-sm table-bordered" size="sm">
					  <Thead>
					    <Tr>
					      <Th>#</Th>
					      <Th>Full Name</Th>
					      <Th className="text-nowrap">Email</Th>
					      <Th>Address</Th>
					      <Th width="170">Action</Th>					      
					    </Tr>
					  </Thead>
					  <Tbody>
					  	{
					  		manufacturers? manufacturers.map((item, i)=>{
					  			return(
					  					<Tr key={item.fname+item.user_id}>
									      <Td>{i+1}</Td>
									      <Td>{item.fname} {item.lname}</Td>
									      <Td>{item.email}</Td>
									      <Td>{item.address}</Td>
									      <Td>
									      <div className="d-flex">
									      	<button className="btn btn_yellow btn-sm" 
									      					onClick={e=>requestVender(e, item.user_id)}>
									      		Request for Vender <i className="fal fa-share"></i> 
									      	</button>
									      </div>
									      </Td>
									    </Tr>					    
					  				)
					  		}) :null
					  	}					    
					  </Tbody>
					</Table>					
			</div>
		)
}

export default Hocpanel(Manufacturers);