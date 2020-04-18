import React, {useState, useEffect, memo, useContext, useRef} from 'react';
import {Form, Col, Image, Row, InputGroup, FormControl, Badge} from 'react-bootstrap';
import axios from 'axios';

import {Inputfield, Textarea} from '../../form/Inputfield';
import {useToasts } from 'react-toast-notifications';
// import Resizer from 'react-image-file-resizer';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import {AdminContext} from '../Admin';
import {getToken} from '../../methods/methods';

const Productform =(props)=>{
	const {data, dispatch} = useContext(AdminContext);	
	const [xfields, setXfields] = useState([])
	const [srcDefault, setSrcDefault] = useState('')
	const fieldName = useRef()
	const fieldValue = useRef()
	const { addToast } = useToasts();
	let toastSetting = { appearance: 'error', autoDismiss:true,  autoDismissTimeout :2000 }
	const [fileData, setFileData] =	useState([]);
	const [displayimg, setDisplayimg] =	useState(0);

	const [product, setProduct] =	useState({
		seller_id:'',
		categories:'',
		type:'',
		product_name:'',	
		purchase_price:'',
		selling_price:'',
		venders_price:'',
		stock:'',
		minorder:'',
		warranty:'',
		extra_fields:[],
		details:'',
		terms_conditions:'',
		photos:{display:0, photosurl:[]},
	})
	const cropper = useRef(null);
	useEffect(()=>{
		if(props.data){
			setProduct(props.data)
			setFileData(JSON.parse(props.data.photos))
		} 
	},[props]);
	
	useEffect(()=>{
		let photo = JSON.stringify({display:displayimg, photosurl:fileData })
		
		if(product) setProduct({...product, photos:photo})
	}, [fileData, displayimg])

	useEffect(()=>{
		let fieldsData = JSON.stringify(xfields);
		setProduct({...product, extra_fields:fieldsData})
	},[xfields])

	const addField = ()=>{
		let name  = fieldName.current.value;
		let value  = fieldValue.current.value;
		setXfields([...xfields, {name, value}])
		fieldName.current.value= '';
		fieldValue.current.value='';
	}	
		
	function productValidation(){		
		if(!product.categories){
			addToast('Please select catagory', toastSetting)
			return false
		}
		else if(!product.type){
			addToast('Please select type', toastSetting)
			return false
		}
		else if(!product.product_name){
			addToast('Please enter product name', toastSetting)
			return false
		}
		else if(!product.selling_price){
			addToast('Please enter selling price', toastSetting)
			return false
		}
		else if(!product.selling_price){
			addToast('Please enter selling price', toastSetting)
			return false
		}
		else if(!product.venders_price){
			addToast('Please enter venders price', toastSetting)
			return false
		}
		else if(!product.stock){
			addToast('Please enter stock', toastSetting)
			return false
		}
		else if(!product.warranty){
			addToast('Please enter warranty', toastSetting)
			return false
		}
		else if(!product.details){
			addToast('Please enter details', toastSetting)
			return false
		}
		else if(!product.terms_conditions){
			addToast('Please enter details', toastSetting)
			return false
		}
		else if(product.photos.length<=2){
			addToast('Please select photos', toastSetting)
			return false
		}
		else{
			return true
		}
	}
	function cropImg(e){
		if(e!==false){
	    const dataUrl = cropper.current.getCroppedCanvas().toDataURL();    
	   	setFileData([...fileData, dataUrl])			
		}
  }
  function removeImage(i){
  let newfileData = fileData;
  	newfileData.splice(i, 1);  	
  	setFileData([...newfileData])
  }
  function setDisplay(i){
  	setDisplayimg(i)
  }
	const uploadFiles=(e)=>{
		var reader = new FileReader();
    reader.onload = function(){      
			setSrcDefault(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
	}
	const creatProduct=()=>{
		let validate = productValidation();
		if(validate){
			axios.post(`${data.API_URL}/product/add`, product, getToken() ).then((res)=>{
				if(res.data.status===false){
					addToast(res.data.message, toastSetting)
				}
				else{
					getProducts()
					addToast('Product added successfully', { appearance: 'success', autoDismiss:true,  autoDismissTimeout :2000 })										
				}
			})			
		}
	}
	const getProducts =()=>{
		axios.get(`${data.API_URL}/product/admin/products`, getToken() ).then((res)=>{			
			dispatch({type:'FETCH_PRODUCTS', payload:res.data})
		})
	}
	const inputChange = (e)=>{
		let name = e.target.name;
		let value = e.target.value;		
		setProduct({
			...product,
			[name]:value
		})
	}
	
	return(
		<div className="p-2 mb-3 border-bottom">
			<Form>
			  <Form.Row>
				  <div className="form-group col-lg-3 col-12">		
				  	<Form.Control as="select" name="categories" onChange={e=>inputChange(e)}>
				      <option>Choose Categories</option>
				      <option value="industrial">Industrial</option>
				      <option value="construction">Construction</option>
				      <option value="agriculture">Agriculture</option>
				      <option value="housewares">Housewares</option>			      
				    </Form.Control>
				  </div>
				  <div className="form-group col-lg-3 col-12">
				    <Form.Control as="select" name="type" onChange={e=>inputChange(e)}>
				      <option>Choose Type</option>
				      <option value="Hand Tools">Hand Tools</option>
				      <option value="Automobile">Automobile</option>
				      <option value="Furniture">Furniture</option>			      			      
				      <option value="electrical">Electrical</option>			      			      
				    </Form.Control>		  	
				  </div>			  	
			    <Inputfield col={3} 
			    						name="product_name" 
			    						placeholder="Product Name" 
			    						type="text"
			    						defaultValue={product.product_name}
			    						onChange={e=>inputChange(e)}
			    						/>		    
			  	<Inputfield col={3}
			  							name="purchase_price" 
			  							placeholder="Purchase Price" 
			  							type="number"  
			  							defaultValue={product.purchase_price}
			  							onChange={e=>inputChange(e)}
			  							/>
			  	<Inputfield col={3} 
			  							name="selling_price" 
			  							placeholder="Selling Price" 
			  							type="number"
			  							defaultValue={product.selling_price}
			  							onChange={e=>inputChange(e)}
			  							/>
			  	<Inputfield col={3} 
			  							name="venders_price" 
			  							placeholder="Venders Price" 
			  							type="number"
			  							defaultValue={product.venders_price}
			  							onChange={e=>inputChange(e)}
			  							/>
			  	<Inputfield col={2} 
			  							name="stock" 
			  							placeholder="Stock" 
			  							type="number"
			  							defaultValue={product.stock}
			  							onChange={e=>inputChange(e)}
			  							/>
			  	<Inputfield col={2} 
			  							name="minorder"
			  							placeholder="Min Order" 
			  							type="number"
			  							defaultValue={product.minorder}
			  							onChange={e=>inputChange(e)}
			  							/>
			  	<Inputfield col={2} 
			  							name="warranty" 
			  							placeholder="Warranty in Months" 
			  							type="number"
			  							defaultValue={product.warranty}
			  							onChange={e=>inputChange(e)}
			  							/>			
				</Form.Row>
				<Form.Row>
					<div className="ml-1">
						{
							xfields? xfields.map((item, i)=>{
								return(
										<Badge className="bg_yellow white ml-1" key={item.name+i}> {`${item.name} : ${item.value}` }</Badge>
									) 
							})
							:null
						}					
					</div>
					<div className="col-4">
						<InputGroup className="mb-3" size="sm">
						  <FormControl placeholder="Label Name" ref={fieldName} />
						  <FormControl placeholder="Value" ref={fieldValue} />
						  <InputGroup.Prepend>
						    <button className="btn btn-sm btn_green" type="button" onClick={e=>addField(e)}>
						    	<i className="fal fa-plus"></i> Add More
						    </button>
						  </InputGroup.Prepend>
						</InputGroup>						
					</div>
				</Form.Row>
			  <Form.Row>
			  	<Textarea col={6} 
			  						name="details" 
			  						placeholder="Details" 
			  						value={product.details}
			  						onChange={e=>inputChange(e)}
			  						/>
			  	<Textarea col={6} 
			  						name="terms_conditions" 
			  						placeholder="Terms and Conditions" 
			  						value={product.terms_conditions}
			  						onChange={e=>inputChange(e)}
			  						/>
				</Form.Row>
				<Form.Row>
				  <div className='col-lg-6'>
				  	<div className="custom-file">
					    <input type="file" className="custom-file-input"  id="customFile" onChange={e=>uploadFiles(e)} />
					    <label className="custom-file-label" htmlFor="customFile">Choose file</label>
					  </div>
						<Cropper
			        ref={cropper}
			        src={srcDefault}
			        style={{maxHeight: 400, maxWidth: '100%'}}
			        // Cropper.js options
			        aspectRatio={1 / 1}
			        guides={false}
			        // crop={e=>cropImg(e)} 
			      />
			      <button type="button" className="btn btn_orange" onClick={e=>cropImg(false)} >Cancel</button>
			      <button type="button" className="btn btn_blue" onClick={e=>cropImg(e)} >Crop</button>
					</div>
					<div className="col-lg-6">
						<Row>
							{fileData? fileData.map((item, i)=>{
						    return (
							    	<Col xs={6} md={2} key={item}>
								    	<div style={{border:`2px solid ${displayimg==i? 'green' :'#dee2e6'}`}} onClick={e=>setDisplay(i)}>
								    		<i className="fal fa-times" onClick={e=>removeImage(i)}></i> 
									      <Image src={`${item}`} className="img-fluid" />
								    	</div>
								    </Col>	
							    )							
							}) :null}
					  </Row>
					</div>					
			  </Form.Row>
			  <div className="d-flex justify-content-end">
				  <button className="btn btn-sm btn_blue" onClick={e=>creatProduct(e)}  type="button">Save Product</button>				  
			  </div>
			</Form>
		</div>
		)
}

export default memo(Productform);