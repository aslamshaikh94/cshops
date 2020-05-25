import React, {useState, useEffect, useContext} from 'react';
import {Modal, Button, Image} from 'react-bootstrap';
import axios from 'axios';

import {AppContext} from '../App';

function ImageGallery(props) {
  const {data} = useContext(AppContext);  
  const [show, setShow] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(()=>{
    axios.get(`${data.API_URL}/upload`).then((res)=>{
      setGallery(res.data)
    })
  },[])

  function selectImage(id){
    gallery.find((item)=>{
        new Promise((resolve, reject)=>{
          if(item.public_id===id){          
            let  photo ={
              url:item.secure_url,
              id:item.public_id
            }
            resolve(photo)                      
          }
        }).then((imgItem)=>{setImages([...images, imgItem])})
    })    
  }
  
  function selectClose(){
    props.selected(images)
    setShow(false)
  }
  
  return (
    <React.Fragment>
      <Button className="bg_green mt-2" onClick={() => setShow(true)}>
        Select to Gallery
      </Button>

      <Modal
        backdrop='static'
        scrollable
        show={show}
        onHide={() => setShow(false)}
        size="xl"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
           Image Gallery
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row no-gutters">
            {
            gallery?  gallery.map((item)=>{
                let active = images.some(e=> e.id===item.public_id)                
                return (
                  <div className="col-lg-1 col-4"  key={item.public_id} onClick={e=>selectImage(item.public_id)}>
                    <Image src={item.secure_url} 
                           style={{height:'120px', width:'120px'}} 
                           className={active? "border border-success" :null}
                           thumbnail />
                  </div>
                  )
              })
            :null
            }
          </div>
        </Modal.Body>
        <Modal.Footer>          
          <Button variant="primary" onClick={selectClose}>
            Select & Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default ImageGallery