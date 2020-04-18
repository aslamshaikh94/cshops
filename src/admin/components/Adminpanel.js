import React, {useEffect, useContext} from 'react';
import axios from 'axios';
import Productslist from './Productslist';
import Hocpanel from './Hocpanel';
import {getToken} from '../../methods/methods';

import {AdminContext} from '../Admin';
const Adminpanel =()=>{
	const {data, dispatch} = useContext(AdminContext);

	useEffect(()=>{
		axios.get(`${data.API_URL}/product/admin/products`, getToken() ).then((res)=>{
			dispatch({type:'FETCH_PRODUCTS', payload:res.data})
		});
	},[]);
	

	return(
			<div>								
				{data.loggedInUser && data.loggedInUser.usertype!=="buyer"? <Productslist /> :null}
			</div>
		)
}

export default Hocpanel(Adminpanel)