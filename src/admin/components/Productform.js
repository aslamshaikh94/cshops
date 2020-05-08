import React, {useState, useEffect, memo, useContext, useRef} from 'react';
import {Button, Form, Col, Image, Row, InputGroup, FormControl, Badge} from 'react-bootstrap';
import axios from 'axios';

import ImageGallery from '../../components/ImageGallery';
import {Inputfield, Textarea} from '../../form/Inputfield';
import {useToasts } from 'react-toast-notifications';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import {Radio} from 'custom-input-aslam';

import {AdminContext} from '../Admin';
import {getToken} from '../../methods/methods';

const Productform =(props)=>{
	const {data, dispatch} = useContext(AdminContext);	
	const [xfields, setXfields] = useState([])
	const [srcDefault, setSrcDefault] = useState('')
	const fieldName = useRef()
	const fieldValue = useRef()
	const { addToast } = useToasts();
	const [fileData, setFileData] =	useState([]);
	const [displayimg, setDisplayimg] =	useState(0);
	const [imgLoging, setImgLoging] =	useState(false);
	const cropper = useRef(null);
	const [product, setProduct] =	useState(props.data)
	
	let errorSetting = { appearance: 'error', autoDismiss:true,  autoDismissTimeout :2000 }


	useEffect(()=>{
		let photo = JSON.stringify({display:displayimg, photosurl:fileData })				
		if(product && fileData.length>0){
			setProduct({...product, photos:photo, thumbnail:fileData[0].url})			
		} 
	}, [fileData, displayimg])

	useEffect(()=>{
		let fieldsData = JSON.stringify(xfields);
		if(xfields.length>0) setProduct({...product, extra_fields:fieldsData})
	},[xfields])
	
	const addField = ()=>{
		let name  = fieldName.current.value;
		let value  = fieldValue.current.value;
		if(name && value){
			setXfields([...xfields, {name, value}])
			fieldName.current.value= '';
			fieldValue.current.value='';			
		}
	}	

	useEffect(()=>{				
		 if(props.data && props.data.photos){
			let photos = JSON.parse(props.data.photos)
				setFileData(photos.photosurl)
			}
	},[props.data.photos]);
	
	useEffect(()=>{
	 	if(props.data && props.data.extra_fields){
		let extra_fields = JSON.parse(props.data.extra_fields)				
			setXfields(extra_fields)
		}
	},[props.data.extra_fields]);

	function productValidation(){
		if(!product.categories){
			addToast('Please select catagory', errorSetting)
			return false
		}
		else if(!product.type){
			addToast('Please select type', errorSetting)
			return false
		}
		else if(!product.product_name){
			addToast('Please enter product name', errorSetting)
			return false
		}
		else if(!product.selling_price){
			addToast('Please enter selling price', errorSetting)
			return false
		}
		else if(!product.selling_price){
			addToast('Please enter selling price', errorSetting)
			return false
		}
		else if(!product.venders_price){
			addToast('Please enter venders price', errorSetting)
			return false
		}
		else if(!product.stock){
			addToast('Please enter stock', errorSetting)
			return false
		}
		else if(!product.warranty){
			addToast('Please enter warranty', errorSetting)
			return false
		}
		else if(!product.details){
			addToast('Please enter details', errorSetting)
			return false
		}
		else if(!product.terms_conditions){
			addToast('Please enter details', errorSetting)
			return false
		}
		else if(product.photos.length<=2){
			addToast('Please select photos', errorSetting)
			return false
		}
		else{
			return true
		}
	}
	async function cropImg(e){
		if(e!==false && cropper){
			setImgLoging(true)
	    const dataUrl = await cropper.current.getCroppedCanvas().toDataURL("image/jpeg");	    
	   	uploadOnServer(dataUrl)	   	
		}
  }

  function uploadOnServer(url){
		axios.post(`${data.API_URL}/upload`, {image:url}).then((res)=>{			
   		if(res.data.status===false){
   			addToast(res.data.message, errorSetting)
   		}
   		else{
  			setFileData([...fileData, res.data])	
   		}
  		setImgLoging(false)
  	})
  }

  function removeImage(i){
  	let newfileData = fileData;
  	newfileData.splice(i, 1);  	
  	setFileData([...newfileData])
  }
  function setDisplay(i){
  	setProduct({...product, thumbnail:fileData[i].url})
  }  
	const uploadFiles=(e)=>{
		let image = window.URL.createObjectURL(e.target.files[0])
		setSrcDefault(image);     
	}
	const saveProduct=()=>{
		let validate = productValidation();
		if(validate){
			axios.post(`${data.API_URL}/product/add`, product, getToken() ).then((res)=>{
				if(res.data.status===false){
					addToast(res.data.message, errorSetting)
				}
				else{
					getProducts()
					addToast(`Product added successfully`, { appearance: 'success', autoDismiss:true,  autoDismissTimeout :2000 })					
				}
			})			
		}
	}
	const updateProduct=()=>{
		let validate = productValidation();
		if(validate){
			axios.put(`${data.API_URL}/product`, product, getToken() ).then((res)=>{
				console.log(res.data)
				if(res.data.status===false){
					addToast(res.data.message, errorSetting)					
				}
				else{
					getProducts()
					addToast(`Product 'updated' successfully`, { appearance: 'success', autoDismiss:true,  autoDismissTimeout :2000 })					
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
	function cancelCroper(){
		setSrcDefault(false)
		axios.get(`${data.API_URL}/product/admin/products`, getToken() ).then((res)=>{			
			dispatch({type:'FETCH_PRODUCTS', payload:res.data})
		})
	}
	function selectedImages(images){
		setFileData([...fileData, ...images])	
	}
	return(
		<div className="p-3 mb-3 border-bottom">
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
					<div className="col-12 col-lg-4">
						<InputGroup className="mb-3" size="sm">
						  <FormControl placeholder="Label Name" ref={fieldName} />
						  <FormControl placeholder="Value" ref={fieldValue} />
						  <InputGroup.Prepend>
						    <Button size="sm" variant="" className="btn_green" type="button" onClick={e=>addField(e)}>
						    	<i className="fal fa-plus"></i> Add More
						    </Button>
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
					    <input type="file" className="custom-file-input" onChange={e=>uploadFiles(e)} />
					    <label className="custom-file-label" htmlFor="customFile">Choose file</label>
					  </div>
					  {
					  	srcDefault? 
							  <div className="mt-2 mb-2">
									<Cropper
						        ref={cropper}
						        src={srcDefault}
						        style={{maxHeight: 400, maxWidth: 600, width:'100%'}}
						        // Cropper.js options
						        aspectRatio={1 / 1}
						        guides={false}
						        // crop={e=>cropImg(e)} 
						      />
					      </div>
					  	:null
					  }
			      {
			      	srcDefault? 
			      		<div>
						      <button type="button" className="btn btn_orange" onClick={e=>cancelCroper(false)} >Cancel</button>
						      <button type="button" className="btn btn_blue ml-2" onClick={e=>cropImg(e)} disabled={imgLoging? true : false} >
						      	{
						      		imgLoging? 
						      			<span>
							      			<span className="spinner-grow spinner-grow-sm"></span>Uploading..
	    									</span>
						      		: <span>Crop & Upload</span>
						      	}						      	
						      </button>			      									      
			      		</div>
			      	:null
			      }
					</div>
					<div className="col-lg-6">
						{	
							product.thumbnail? 
								<div className="mb-2 d-flex flex-column">
									<Image src={product.thumbnail} 
												 style={{border:`2px solid green`}} 
												 className="img-fluid" width="100" />
									<small>Product Thumbnail</small>
								</div>
							:null
						}
						<Row>
							{fileData && fileData.length>0? fileData.map((item, i)=>{
						    return (
							    	<Col xs={6} md={2} key={item.id}>
								    	<div style={{border:`2px solid #dee2e6`}} >
								    		<div className="p-1 d-flex justify-content-between">
									    		<Radio name="thumb" size={0.8} onClick={e=>setDisplay(i)}/>
									    		<i className="fal fa-times" onClick={e=>removeImage(i)}></i> 
								    		</div>
									      <Image src={`${item.url}`} className="img-fluid" />
								    	</div>
								    </Col>	
							    )							
							}) :null}
					  </Row>
					</div>	
					<div className="col">
						<ImageGallery selected={selectedImages}/>
					</div>				
			  </Form.Row>
			  <div className="d-flex justify-content-end">
			  	{
			  		props.create? 
				  		<button className="btn btn-sm btn_blue" onClick={e=>saveProduct(e)}  type="button">Save Product</button>				  

			  		: <button className="btn btn-sm btn_blue" onClick={e=>updateProduct(e)}  type="button">Update Product</button>
			  	}				  
			  </div>
			</Form>
		</div>
		)
}

export default memo(Productform);