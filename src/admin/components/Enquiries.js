import React, {useState, useEffect, useContext} from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {Link} from 'react-router-dom';
import {mDate} from 'dateutility-aslam';

import Hocpanel from './Hocpanel';
import ReplyModal from './ReplyModal';
import {Axios} from '../../config/apis';

// import {AdminContext} from '../Admin';
import {AppContext} from '../../App';

const Enquiries = (props)=>{
	const {data, dispatch} = useContext(AppContext);
	const [modalShow, setModalShow] = useState(false);
	const [userData, setUserData] = useState(false);

	useEffect(()=>{
		Axios.get(`/enquiry`).then((res)=>{			
			if(res.data.status!==false) dispatch({type:'ENQUIRIES', payload:res.data})
		});
	},[]);	
	
	const replyForm=(e, data)=>{
		setModalShow(true)
		setUserData(data)
	}
	const modalAction=()=>{
		setModalShow(false)
	}
	
	return (
			<div className="p-2">
					<Table className="table table-sm table-bordered" size="sm">
					  <Thead>
					    <Tr>
					      <Th>#</Th>
					      <Th>Full Name</Th>
					      <Th className="text-nowrap">Contact Number</Th>
					      <Th>Email</Th>
					      <Th>Quantity</Th>
					      <Th>Date & Time</Th>
					      <Th>Actions</Th>
					    </Tr>
					  </Thead>
					  <Tbody>
					  	{
					  		data.enquiries? data.enquiries.map((item, i)=>{
					  			return(
					  					<Tr key={item.id}>
									      <Td>{`ENQ${item.id}`}</Td>
									      <Td>{item.fullname}</Td>									      
									      <Td>{item.phone}</Td>									      
									      <Td>{item.email}</Td>
									      <Td>{item.quantity}</Td>
									      <Td>{mDate(item.created_at).lastSeenFormat()} </Td>
									      <Td>
									      <div className="d-flex">
									      	<Link className="btn btn_green btn-sm mr-1" 
									      				target="_blank"
									      				to={`/product/${item.product_id}`}
									      				>
									      		<i className="fal fa-eye"></i> View Product
									      	</Link>
									      	<button className="btn btn_yellow btn-sm" onClick={e=>replyForm(e, {id:item.id, user_id:item.user_id})}>
									      		<i className="fal fa-share"></i> Open / Reply
									      	</button>
									      </div>
									      </Td>
									    </Tr>					    
					  				)
					  		}) :null
					  	}					    
					  </Tbody>
					</Table>
					<ReplyModal show={modalShow} actionbtn={modalAction} userdata={userData} />
			</div>
		)
}

export default Hocpanel(Enquiries)