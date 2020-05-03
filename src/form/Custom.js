import React, {useRef, useEffect} from 'react';
import './custom.css';
import pseudoStyle from './pseudoStyle'
const Checkbox = (props)=>{
	const {label, color, bg, text, size, ...all} = props;
	const inputEl = useRef(null)	
	useEffect(()=>{		
		inputEl.current.pseudoStyle("after","background", bg);
		inputEl.current.pseudoStyle("before","border-color", color);
		inputEl.current.style.transform = `scale(${size})`; 
	},[])
	return(
			<label className="labelcheckbox">
				<input 	
							type="checkbox" 
							className="checkbox" 							
							ref={inputEl} 
							{...all}
					/>
			    <span style={{'color': text}}>{label}</span>
			</label>
		)
}

const Radio = (props)=>{
	const {label, color, bg, text, size, ...all} = props;
	const inputEl = useRef(null)	
	useEffect(()=>{		
		inputEl.current.pseudoStyle("after","background", bg);
		inputEl.current.pseudoStyle("before","background", color);
		inputEl.current.style.transform = `scale(${size})`; 
	},[])
	return(
			<label className="labelradio custom-control-inline">
      	<input 
      				type="radio"       				
      				className="radio"       				
      				{...all}
      				ref={inputEl}
      	/>
        <span style={{'color': text}}>{label}</span>
      </label>
		)
}

export {Checkbox, Radio}