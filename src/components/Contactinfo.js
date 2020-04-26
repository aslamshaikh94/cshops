import React, {memo} from 'react';

const Contactinfo=(props)=>{
	const {fname, phone, email, address, states, cities, pincode, countries} = props.data	
	return (
			<React.Fragment>
				<h6>Contact Information</h6>
				<p className="m-0">Name:  {fname? fname :null}</p>
				<p className="m-0">Phone:  {phone? phone :null}</p>
				<p className="m-0">Email:  {email? email :null}</p>
				<p className="m-0">
				Address: 
					{` ${address}, ${cities}, ${states}, ${pincode}, ${countries}` } 				
				</p>
			</React.Fragment>
		)
}

export default memo(Contactinfo)


