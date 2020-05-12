import React, {memo} from 'react';

const Contactinfo=(props)=>{
	const {fname, phone, email, address, states, cities, pincode, countries} = props.data;
	
	return (
			<React.Fragment>
				<div className="d-flex justify-content-between">
					<h6>Contact Information</h6> 
						<button className="btn btn-sm btn_orange" onClick={props.actionbtn}>
							<i className="fal fa-pen"></i> Edit
						</button> 
				</div>				
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


