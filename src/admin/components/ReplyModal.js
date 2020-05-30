import React,{useState, useEffect, useContext, memo} from 'react';
import {Modal} from 'react-bootstrap';
import {Textarea} from '../../form/Inputfield';

import {Axios} from '../../config/apis';

import {getToken} from '../../methods/methods';

// import {AdminContext} from '../Admin';
import {AppContext} from '../../App';
function ReplyModal(props) {
  const {data} = useContext(AppContext);
  const [enquiry, setEnquiry] = useState({
    id:'',
    user_id:'',
    product_id:'',
    seller_id:'',
    fullname:'',
    phone:'',
    email:'',
    address:'',
    message:'',
    reply_message:'',
    quantity:''
  });
  const [reply, setReply] = useState({})
  
  useEffect(()=>{
    if(props.userdata) setReply({...reply, ...props.userdata})
  },[props.userdata])

  useEffect(()=>{
    if(data.enquiries && props.userdata) setEnquiry(...data.enquiries.filter(e=> e.id===reply.id))      
  },[reply])

  

  const sendReply=()=>{
    Axios.post(`/enquiry/reply`, reply, getToken() ).then((res)=>{
      console.log(res.data)
    });
    props.handleClose()
  }

  const inputChange = (e)=>{
    // let name = e.target.name;
    let value = e.target.value;   
    setReply({...reply, message:value})
  }
  
  return (
    <React.Fragment>
      <Modal {...props} size="lg" scrollable>
        <Modal.Header>
          <h5 className="m-0">{enquiry.fullname} / {`ENQ${enquiry.id}`}</h5>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
          <div className="col-md-6">
            <h6>Product ID</h6>
            <p>{enquiry.product_id}</p>
          </div>
          <div className="col-md-6">
            <h6>Email</h6>
            <p>{enquiry.email}</p>
          </div>
          <div className="col-md-6">
            <h6>Phone</h6>
            <p>{enquiry.phone}</p>
          </div>
          <div className="col-md-6">
            <h6>Address</h6>
            <p>{enquiry.address}</p>
          </div>
          <div className="col-md-6">
            <h6>Quantity</h6>
            <p>{enquiry.quantity}</p>
          </div>
          <div className="col-md-12">
            <h6>Message</h6>
            <p>{enquiry.message}</p>
          </div>
        </div>
        <hr/>
        {
          enquiry.reply_message? 
            <div className="row">
              <div className="col-md-12">
                <h6>Reply Message</h6>
                <p>{enquiry.reply_message}</p>
              </div>
            </div>
          :
            <div className="row">
              <Textarea 
                        name="reply" 
                        label="Reply"
                        onChange={e=>inputChange(e)}
                        />
            </div>          
        }
        
        </Modal.Body>
        <Modal.Footer>          
          <div className="d-flex justify-content-end">
            <button className="btn btn-sm btn_blue" onClick={e=>sendReply()}>
              Send
            </button>
            <button className="btn btn-sm btn_blue ml-1" onClick={props.actionbtn}>
              Close
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default memo(ReplyModal)