import React from 'react'

import ('./Delivery.css')
const Delivery = () => {
  return (
    <>
    
    <div className='DeliveryCont'>
      <h4>BEST LAUNDRY SERVICE IN ARA ,NOW WITH FREE HOME DELIVERY</h4>

         <p style={{margin:"20px 20px"}}>Atithi Laundry provide and delivey at a time of your convenince we also provide express and same day delivery service</p>

            <div className='laundryvan'>

            
            <div className='laundryvantext'>

              <div className='laundrytext1'>
             
              <i style={{fontSize:"40px",marginBottom:"20px"}} class="fa-solid fa-truck"></i>
              <h5>REGULAR DELIVERY</h5>

              <p>- standard charges as per price list</p>
              <p>- 4 Hour  delivery</p>
              </div>
            

              <div className='laundrytext2'>
              <i style={{fontSize:"40px",marginBottom:"20px"}} class="fa-solid  fa-truck"></i>
              <h5>EXPRESS DELIVERY</h5>
               <p>- Double charges</p>
               <p>same day delivery</p>

              </div>

            </div>



            <div className='laundryvanimg'>

                
            <img style={{width:"350px",height:"350px",margin:"20px"}} src={require("../../img/DeliveryVan.png")} alt="" srcset="" />


            </div>


            </div>
         <a style={{width:"200px",height:"30px",backgroundColor:"#027b9a",borderRadius:"30px",padding:"3px 20px",margin:"20px"}} href="http://">Schedule Free Pickup</a>

    </div>
    
    </>
  )
}

export default Delivery