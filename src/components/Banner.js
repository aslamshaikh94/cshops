import React, {memo} from 'react';
import banner5 from '../assets/images/banner6.jpg';
const Banner =()=>{
	return(
			<div className="banner">
				<img className="img-fluid" src={banner5} alt={banner5} />
			</div>
		)
}
export default memo(Banner);