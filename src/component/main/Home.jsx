import React from 'react'
import Second from "./Second"
import Services from './Services'
import Aboutsus from './Aboutsus'
import Delivery from '../Delivery/Delivery';
import Head from '../Head/Head';
import Ratelist from '../Ratelist/Ratelist';
const Home = () => {
  return (
    <div>
      <Head/>
      <Ratelist/>
      <Delivery/>

<Second/>
<Services/>
<Aboutsus/>
    </div>
  )
}

export default Home