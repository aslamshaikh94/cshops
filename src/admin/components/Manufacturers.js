import React, {useState, useEffect} from 'react';
import {useToasts } from 'react-toast-notifications';

import Hocpanel from './Hocpanel';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
// import {AdminContext} from '../Admin';
// import {AppContext} from '../../App';
import {Axios} from '../../config/apis';

const Manufacturers =(props)=>{
	// const {data} = useContext(AppContext);
	const [manufacturers, setManufacturers] = useState([]);
	const { addToast } = useToasts();

	useEffect(()=>{
		Axios.get(`/users/manufacturers`).then((res)=>{
			if(res.data.status!==false) setManufacturers(res.data)
		})
	},[])

	const requestVender = (e, id)=>{
		Axios.post(`/users/vender_request/${id}`).then((res)=>{
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