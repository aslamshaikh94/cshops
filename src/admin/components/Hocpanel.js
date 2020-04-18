import React from 'react';

const Hocpanel =(HocComponent)=>{
	return (props)=>(
			<div className="adminpanel">								
				<HocComponent {...props} />
			</div>		
	)		
}

export default Hocpanel