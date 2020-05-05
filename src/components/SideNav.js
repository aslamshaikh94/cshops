import React,{memo, useState, useEffect, useContext} from 'react';
import '../assets/css/sidenav.css';
import {Checkbox} from 'custom-input-aslam';
import axios from 'axios';
import {loaderBar} from '../methods/methods';

import {AppContext} from '../App';
const SideNav = ()=>{
	const {data, dispatch} = useContext(AppContext);
	const [filterData, setFilterData] = useState([])
		
	const changeHandal =(e)=>{
		let checked = e.target.checked;
		let name = e.target.name;
		let value = e.target.value;
		loaderBar(true)
		axios.get(`${data.API_URL}/product/filters?field=${name}&search=${value}`).then((res)=>{
				let data = []
						res.data.forEach((item)=>{
							const found = filterData.some(el => el.id === item.id);							
							if (!found)	data.push(item)
			 			})
					
			setFilterData(checked? [...filterData, ...data] : filterData.filter(e=> e[name]!==value))				
		})
					
	}
	
	useEffect(()=>{
		if(filterData.length>0) dispatch({type:'FETCH_PRODUCTS', payload:filterData})			
			loaderBar(false)
	},[filterData])

	function clearFilters(){
		var items = document.querySelectorAll('input[type="checkbox"]');
    items.forEach(item=>item.checked = false )
		axios.get(`${data.API_URL}/product/products`).then((res)=>{
			dispatch({type:'FETCH_PRODUCTS', payload:res.data})
			setFilterData([])
		})
	}
	function filterNav(){
		let element = document.querySelector('.sidenavecol')		
		element.classList.toggle("open");		
	}
	return (
			<div className="sidenav">
				<div className="d-flex justify-content-end closeMenu" onClick={e=>filterNav()}>
					<i className="fal fa-times orange"></i>
				</div>
				{
     			filterData.length>0? 
     				<button className="btn btn-sm btn-block mb-2 btn_orange" onClick={e=> clearFilters(e)}>Clear Filters</button>
     			:null
     		}
				{
					data && data.loggedInUser && data.loggedInUser.usertype==="supplier"? 
			      <div className="border-bottom mb-2">
			      	<h6>Sellers</h6>
				      <Checkbox label="Bombay Hardware" name="sellers" value="Bombay Hardware" onChange={e=>changeHandal(e)}/>
				      <Checkbox label="Delhi Hardware" name="sellers" value="Delhi Hardware" onChange={e=>changeHandal(e)}/>
				      <Checkbox label="Pune Hardware" name="sellers" value="Pune Hardware" onChange={e=>changeHandal(e)}/>
				      <Checkbox label="Panvel Hardware" name="sellers" value="Panvel Hardware" onChange={e=>changeHandal(e)} />
			     	</div>
					:null
				}

	     	<div className="border-bottom mb-2">	     		
	      	<h6>Usage/Application</h6>		      
		      <Checkbox name="categories" label="Industrial" value="industrial" onChange={e=>changeHandal(e)} />		      
		      <Checkbox name="categories" label="Construction" value="construction" onChange={e=>changeHandal(e)} />
		      <Checkbox name="categories" label="Agriculture" value="agriculture" onChange={e=>changeHandal(e)} />
		      <Checkbox name="categories" label="Housewares" value="housewares" onChange={e=>changeHandal(e)} />
	     	</div>

	     	<div className="border-bottom mb-2">
	      	<h6>Type</h6>
		      <Checkbox name="type" label="Electrical" value="Electrical" onChange={e=>changeHandal(e)}  />
		      <Checkbox name="type" label="Hand Tools" value="Hand Tools" onChange={e=>changeHandal(e)}  />
		      <Checkbox name="type" label="Furniture"  value="Furniture"  onChange={e=>changeHandal(e)}  />
		      <Checkbox name="type" label="Automobile" value="Automobile" onChange={e=>changeHandal(e)}  />
	     	</div>	     	
			</div>
		)
}

export default memo(SideNav);