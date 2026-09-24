import React from 'react'
import Navbar from './Navbar/Navbar';

export default function App() {
  return (
    <div>
      <Navbar/>
    </div>
  )
}





















































import React from 'react'
import "./Navbar.css";
import logo from '../assets/logo.DUySRYvR_2j5iRN.avif';
import Home from '../assets/home-hero-960.webp';
import afg from '../assets/afghanistan-Payments-System.webp';

import aga from '../assets/aga-khan-foundation.webp';
import page from '../assets/page.webp';
import mtn from '../assets/mtn.webp';
import un from '../assets/un-women.webp';
import unesco from '../assets/unesco.webp';

import usaid from '../assets/usaid.webp';

import world from '../assets/world-bank.webp';
export default function Navbar() {
  return (
    <>
     <header className='header'>
    <div className='logo'>
      <img src={logo} alt="" />
    </div>

<ul  className='menu'>
    <li><a href="Solutions">Solutions</a></li>
     <li><a href="Services">Services</a></li>
      <li><a href="Industries">Industries</a></li>
       <li><a href="partners">partners</a></li>
        <li><a href="Company">Company</a></li>
</ul>

<div className='ele'>
    <a href="Get started">Get started</a>
</div>
    </header>


<section>
<button className='btn'>
20 years delivering from Kabul · Afghanistan's enterprise technology partner</button>
 <div className='fawad'>
<div className='odo'>
    <h1 >Enterprise Odoo,  <br />custom software, <br /> and AI,<span className='in'>engineered in  <br />Afghanistan.</span></h1> 
    <p>Afghanistan-based since 2005. We built the 500,000- <br />employee Odoo HR and payroll system for the national  <br />government, and Jobs.af, the country's largest job-hunting  <br />platform. Senior teams in Kabul delivering for clients across <br /> Afghanistan, the GCC, India, and the US.</p>
</div>


<div className='de'>
    <img src={Home} alt="" />
</div>
</div>


<div className='book'>
    <button className='exploree'>Book a 30-min discovery call
</button>
<button className='explore'>Explore services
</button>
</div>
<div className='name'>
<div className='net'>
    <span className='jj'>500K +</span>
    <p className='em'>Employees ·  <br /> national- <br />government Odoo <br /> HR rollout</p>
</div>

<div className='net'>
    <span className='jj'>20 yrs</span>
    <p className='em'>Delivering <br /> enterprise <br /> software from  <br />Kabul</p>
</div>
<div className='net'>
    <span className='jj'>Jobs.af</span>
    <p className='em'>Afghanistan's <br /> largest job  <br />platform, built by <br /> NETLINKS</p>
</div>
</div>


</section>


<section>

<div className='move'>

    <div className='move1'>

    
 <div className='slide1'>
            <img src={afg} alt=""/>
        </div>
        <div className='slide1'>
            <img src={aga} alt=""/>
        </div>

        <div className='slide1'>
            <img src={page}alt=""/>
        </div>

        <div className='slide1'>
            <img src={mtn}alt=""/>
        </div>

       <div className='slide1'>
            <img src={un} alt=""/>
        </div>

  
</div>
        

      <div className='slide1'>
            <img src={unesco} alt=""/>
        </div>
        <div className='slide1'>
            <img src={usaid} alt=""/>
        </div>

        <div className='slide1'>
            <img src={world} alt=""/>
        </div>

        





</div>
</section>
</>

  )
}
