import React, {useEffect, useContext} from 'react';
import {Axios} from '../../config/apis';
import Productslist from './Productslist';
import Hocpanel from './Hocpanel';
import {getToken} from '../../methods/methods';

// import {AdminContext} from '../Admin';
import {AppContext} from '../../App';

const Adminpanel =()=>{
	const {dispatch} = useContext(AppContext);

	useEffect(()=>{
		Axios.get(`/product/admin/products`, getToken() ).then((res)=>{
			if(res.data.status!==false) dispatch({type:'FETCH_PRODUCTS', payload:res.data})
		});
	},[]);
	
	

	return(
			<div>
				<Productslist />								
				{/*data.loggedInUser && data.loggedInUser.usertype!=="buyer"? <Productslist /> :null*/}
			</div>
		)
}

export default Hocpanel(Adminpanel)