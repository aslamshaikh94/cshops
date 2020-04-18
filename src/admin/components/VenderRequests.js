import React, {useContext, useState, useEffect, lazy} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useToasts } from 'react-toast-notifications';
import {mDate} from 'dateutility-aslam';
import Hocpanel from './Hocpanel';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {getToken} from '../../methods/methods';

import {AdminContext} from '../Admin';
const Productform = lazy(()=>import('./Productform'));

const VenderRequests =(props)=>{
	const {data, dispatch} = useContext(AdminContext);
	const [requests, setRequests] = useState([]);
	const { addToast } = useToasts();	
	useEffect(()=>{
		getVenders()
	},[])

	function getVenders(){
		axios.get(`${data.API_URL}/users/vender_requests`, getToken() ).then((res)=>{					
			if(res.data.status!==false) setRequests(res.data)
		})
	}

	function requestAction(e, id, action){		
		let statusData = {
			status:action,
		}			
		axios.post(`${data.API_URL}/users/vender_request/action/${id}`, statusData, getToken() ).then((res)=>{
			if(res.data.status!=false) getVenders();
		});		
	}
	function requestDelete(id){
		axios.delete(`${data.API_URL}/users/vender_request/action/${id}`, getToken() ).then((res)=>{
			if(res.data.status!=false) getVenders();
		});	
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
					      <Th>Date & Time	</Th>
					      <Th width="170">Action</Th>					      
					    </Tr>
					  </Thead>
					  <Tbody>
					  	{
					  		requests? requests.map((item, i)=>{
					  			return(
					  					<Tr key={item.id}>
									      <Td>{i+1}</Td>
									      <Td>{item.fname} {item.lname}</Td>
									      <Td>{item.email}</Td>
									      <Td>{item.address}</Td>
									      <Td>{mDate(item.created_at).lastSeenFormat()}</Td>
									      <Td>
									      <div className="d-flex">
									      	<button className="btn btn_green btn-sm mr-1" 
									      					onClick={e=>requestAction(e, item.request_id, true)}>
									      		<i className="fal fa-check"></i>  Accept
									      	</button>
									      	<button className="btn btn_red btn-sm" 
									      					onClick={e=>requestDelete(item.request_id)}>
									      		<i className="fal fa-trash"></i>  Delete
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

export default Hocpanel(VenderRequests);