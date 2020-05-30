import {useContext, useEffect} from 'react';
import {useToasts } from 'react-toast-notifications';

import {AppContext} from './App';
function Toster() {
	const {data, dispatch} = useContext(AppContext)
	const { addToast } = useToasts();	

	useEffect(()=>{
    if(data.success){
    	addToast(data.success, { appearance: 'success', autoDismiss:true,  autoDismissTimeout :2000 })
    	setTimeout(()=> dispatch({type:'FETCH_SUCCESS', payload:''}), 2000);
    } 
  },[data.success])

  useEffect(()=>{
    if(data.error){
    	 addToast(data.error, { appearance: 'error', autoDismiss:true,  autoDismissTimeout :2000 })
    	 setTimeout(()=> dispatch({type:'FETCH_ERROR', payload:''}), 2000);
    }
  },[data.error])

	return ''
}

export default Toster