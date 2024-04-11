import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import ('./Navbar.css');


function App() {
  return (
   <>
<div>
    <img style={{width:"200px",height:"100px"}} src={require('../../img/laundry.jpg')} alt="" srcset="" />
</div>

<ul class="menu cf">
<li><a href="/">Home</a></li>
<li>
        <a href="/">Services</a>
        <ul class="submenu">

<li><a href="/pricing">Pricing</a></li>
</ul>
</li>
<li><a href="/pricing">Pricing</a></li>

</ul>



{/* <a href="" class="btn-whatsapp-pulse">
<Link class="social" to="https://wa.me/7070110600/?text=hii atithi laundry"><i class="fa fa-whatsapp"></i></Link>

</a> */}


<a href="tel:7070110600" class="btn-whatsapp-pulse btn-whatsapp-pulse-border">
<i class="fa-solid fa-phone"></i>
</a>

<a href="https://wa.me/7070110600/?text=hii atithi laundry" class="btn-whatsapp-pulse">
	<i class="fab fa-whatsapp"></i>
</a>



   </>
   
  );
}

export default App;
{/* <div class="wrapper">
<Link class="social" to="https://wa.me/7070110600"><i class="fa fa-whatsapp"></i></Link>


</div> */}