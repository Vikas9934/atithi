import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ('./Head.css')


const Head = () => {
  return (
    <>
    
    <div className='HeadCont'>

      <img style={{width:"300x",height:"300px"}} src={require('../../img/mainbg.png')} alt="" srcset="" />
      <div className='HeadInpt'>

      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="Name" />
       
      </Form.Group>

      <Form.Group style={{margin:"30px 0px"}} className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="text" placeholder="Phone" />
      </Form.Group>


      <Form.Group style={{margin:"30px 0px"}} className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="text" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      
      </Form.Group>
      <Button style={{margin:"30px 0px",width:"200px",float:"left"}} variant="primary" type="submit">
        Book Now
      </Button>
    </Form>

      </div>
    </div>
    
    </>
  )
}

export default Head