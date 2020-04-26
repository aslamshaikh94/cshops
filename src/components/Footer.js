import React, {memo} from 'react';
import '../assets/css/footer.css';

const Footer = ()=>{
	return(
			<footer>
				<p className="m-0">Copyright © 2019. CShops. All rights reserved.</p>
			</footer>
		)
}

export default memo(Footer)