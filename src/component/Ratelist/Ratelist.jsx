import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ('./Ratelist.css')


const Ratelist = () => {
  return (
    <>
    <h1 style={{margin:"20px 0px"}}>FULL RANGE OF LAUNDRY SERVICES IN ARA</h1>
    <div className='Ratelistmain'>


    <div>
            <img style={{width:"400px",height:"300px"}} src="https://img.freepik.com/premium-photo/woman-with-laundry_8595-8080.jpg" alt="" srcset="" />
        </div>

        <div>

        <Row style={{backgroundColor:"#2a2b2f",color:"#fff",width:"100vw",padding:"15px",borderRadius:"10px"}}>
        <Col>Wash & Fold</Col>
        <Col>Wash & Iron</Col>
        <Col>Woolen Laundry</Col>
        <Col>Express Laundry</Col>
        
      </Row>

      <Row style={{backgroundColor:"#fff",color:"#000",width:"100vw",padding:"10px"}}>
        <Col>Upto 25% off</Col>
        <Col>Upto 25% off</Col>
        <Col>No Discount</Col>
        <Col>Double Charges</Col>
        
      </Row>

      <Row style={{backgroundColor:"grey",color:"#fff",width:"100vw",padding:"10px"}}>
        <Col>Wash</Col>
        <Col>Wash</Col>
        <Col>Wash</Col>
        <Col>Wash</Col>
        
      </Row>

      <Row style={{backgroundColor:"#fff",color:"#000",width:"100%",padding:"10px"}}>
        <Col>Dry</Col>
        <Col>Dry</Col>
        <Col>Dry</Col>
        <Col>Dry</Col>
        
      </Row>

      <Row style={{backgroundColor:"grey",color:"#fff",width:"100vw",padding:"10px"}}>
        <Col>Fold</Col>
        <Col>Steam Iron</Col>
        <Col>Fold</Col>
        <Col>Steam Iron</Col>
        
      </Row>


      <Row style={{backgroundColor:"#fff",color:"#000",width:"100%",padding:"10px"}}>
        <Col>48 Hrs Delivery</Col>
        <Col>48 Hrs Delivery</Col>
        <Col>48 Hrs Delivery</Col>
        <Col>Same Day Delivery</Col>
        
      </Row>

        </div>



    </div>
    
    </>
  )
}

export default Ratelist