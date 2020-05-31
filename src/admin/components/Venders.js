import React, {useState, useEffect} from 'react';
import {Axios} from '../../config/apis';

import Hocpanel from './Hocpanel';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const Venders =(props)=>{
	const [venders, setVenders] = useState([]);	
	useEffect(()=>{
		getVenders()
	},[])

	function getVenders(){
		Axios.get(`/users/venders`).then((res)=>{
			if(res.data.status!==false) setVenders(res.data)
		})
	}

	
	const requestAction = (e, id, action)=>{
		let statusData = {
			status:action,
		}			
		Axios.post(`/users/vender_request/action/${id}`, statusData).then((res)=>{
			console.log(res.data)
		});
		getVenders()
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
					  		venders? venders.map((item, i)=>{
					  			return(
					  					<Tr key={item.id}>
									      <Td>{i+1}</Td>
									      <Td>{item.fname} {item.lname}</Td>
									      <Td>{item.email}</Td>
									      <Td>{item.address}</Td>
									      <Td>
									      <div className="d-flex">
									      	<button className="btn btn_red btn-sm" 
									      					onClick={e=>requestAction(e, item.request_id, false)}>
									      		<i className="fal fa-times"></i>  Reject
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

export default Hocpanel(Venders);