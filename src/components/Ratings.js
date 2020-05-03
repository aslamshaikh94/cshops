import React, {memo} from 'react';


const Ratings = (props)=>{
			let content = [];
	    for (let i=5; i>=0; i--) {	      
	      if(i<props.rat){
	      	content.push(<i className="fas fa-star orange" key={i}></i>);
	      } 
	      else{
	      	content.push(<i className="fas fa-star gray" key={i}></i>);
	      }
	    }
	    
	return(
			content
		)
}

export default memo(Ratings);