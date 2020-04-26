import React, {useState, useEffect, memo} from 'react';
import {Inputfield, Textarea, Options} from '../form/Inputfield';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

const Contactinfoform=(props)=>{
	const [info, setInfo] = useState({
		country:'',
		state:''
	});
	useEffect(()=>{
		props.infodata(info)
	},[info])

	function inputChange(e){
		let name = e.target.name;
		let value = e.target.value;
		setInfo({...info, [name]:value})
	}	
	function selectCountry(e){		
		setInfo({
			...info, country:e
		})
	}
	function selectRegion(e){
		setInfo({
			...info, state:e
		})
	}

	return(
			<div className="addressForm">
				<h6>Contact Information</h6>
				<div className='row'>
					<Inputfield col={3} 
  							name="name" 
  							placeholder="Name"
  							type="text"
  							defaultValue={''}
  							onChange={e=>inputChange(e)}
  							/>
  				<Inputfield col={3}
  							name="phone" 
  							placeholder="10-digit mobile number" 
  							type="tel"
  							defaultValue={''}
  							onChange={e=>inputChange(e)}
  							/>
  				<Inputfield col={3}
  							name="email" 
  							placeholder="Email" 
  							type="email"
  							defaultValue={''}
  							onChange={e=>inputChange(e)}
  							/>
  				<Inputfield col={3}
  							name="pincode" 
  							placeholder="Pincode" 
  							type="number"
  							defaultValue={''}
  							onChange={e=>inputChange(e)}
  							/>	
  				<div className="form-group col-lg-4 col-12">
	  				<CountryDropdown
	  					className="form-control"
		          value={info.country}
		          onChange={(val) =>selectCountry(val)} />
	        </div>
	        <div className="form-group col-lg-4 col-12">
		        <RegionDropdown
		        	className="form-control"
		          country={info.country}
		          value={info.state}
		          onChange={(val) => selectRegion(val)} />
	        </div>
	        <Inputfield col={4}
  							name="city" 
  							placeholder="City" 
  							type="text"
  							defaultValue={''}
  							onChange={e=>inputChange(e)}
  							/>
  				<Textarea col={12} 
	  						name="address" 
	  						placeholder="Address (Area and Street)" 					  						
	  						onChange={e=>inputChange(e)}
	  						/>	
				</div>
			</div>
		)
}

export default memo(Contactinfoform)