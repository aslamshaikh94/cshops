import React,{useContext, useState, memo} from 'react';
import '../assets/css/filterbox.css';
import {Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap';
import axios from 'axios';
import {loaderBar} from '../methods/methods';

import {AppContext} from '../App';
const Filterbox = ()=>{
	const [search, setSearch]=useState()
	const {data, dispatch} = useContext(AppContext);

	const searProducts=(e)=>{
		loaderBar(true)
		axios.get(`${data.API_URL}/product?field=product_name&search=${search}`).then((res)=>{
			dispatch({type:'FETCH_PRODUCTS', payload:res.data})
			loaderBar(false)
		})
	}
	const inputKeyDown=(e)=>{
		if(e.key==='Enter') searProducts()
	}
	const inputChange=(e)=>{
		setSearch(e.target.value)
	}
	function filterNav(){
		let element = document.querySelector('.sidenavecol')		
		element.classList.toggle("open");		
	}
	return(
			<div className="filterbox">
				<Row className="justify-content-md-center">
					<Col lg="6"> 
						<InputGroup className="mb-0" size="sm">
							<div className="filterOpen">
					      <button className="btn btn-sm">
					      	<i className="far fa-bars orange" onClick={e=>filterNav(e)}></i>
					      </button>
					    </div>
					    <FormControl
					    	type="search"
					      placeholder="Search Products"
					      aria-label="Search Products"
					      aria-describedby="basic-addon2"
					      onChange={e=>inputChange(e)}
					      onKeyDown={e=>inputKeyDown(e)}
					    />
					    <InputGroup.Append>
					      <Button variant="outline-secondary" onClick={e=>searProducts(e)}><i className="far fa-search"></i></Button>
					    </InputGroup.Append>
					  </InputGroup>						
					</Col>
				</Row>
			</div>
		)
}

export default memo(Filterbox);