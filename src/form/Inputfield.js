import React from 'react';

const Inputfield = (props)=>{
	const {col, formgroup, ...all} = props;
	return(
			<div className={`form-group ${formgroup} ${col? 'col-lg-' +col+ ' col-12' :''}`}>
				<input {...all}
							 className="form-control" />
			</div>
		)
}

const Textarea = (props)=>{
	const {col, ...all} = props;
	return(
			<div className={`form-group col-lg-${col} col-12`}>
				<textarea {...all}
									className="form-control"></textarea>
			</div>
		)
}


export  {Inputfield, Textarea}