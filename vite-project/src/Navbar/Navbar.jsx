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
import me from '../assets/home-feature-engineering-960.webp';
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



        

      <div className='slide1'>
            <img src={unesco} alt=""/>
        </div>
        <div className='slide1'>
            <img src={usaid} alt=""/>
        </div>

        <div className='slide1'>
            <img src={world} alt=""/>
        </div>

        <div className='slide1'>
            <img src={unesco} alt=""/>
        </div>

       <div className='slide1'>
            <img src={world}alt=""/>
        </div>

       <div className='slide1'>
            <img src={usaid}alt=""/>
        </div>



        
        <div className='slide1'>
            <img src={page}alt=""/>
        </div>


        <div className='slide1'>
            <img src={mtn} alt=""/>
        </div>




</div>
</div>
</section>


<section className="services">

  <div className="services-heading">

    <div className="services-title">
      <span>WHAT WE DO</span>

      <h2>
        Six services. One
        <br />
        <i>accountable partner.</i>
      </h2>
    </div>

    <p>
      One Afghanistan-based vendor for ERP, custom
      software, AI, staff augmentation, and cloud, so nothing
      falls between the seams.
    </p>

  </div>


  <div className="services-box">

    <div className="service-card active-card">

      <div className="service-top">
        <small>01 / ERP</small>

        <button className="service-arrow active-arrow">
          ↗
        </button>
      </div>

      <h3>Odoo ERP services.</h3>

      <p>
        Odoo implementation, customization, integration,
        and migration from SAP, NetSuite, Dynamics, and
        QuickBooks. 50+ deployments, including a
        500,000-employee HR and payroll engagement.
      </p>

    </div>


    <div className="service-card">

      <div className="service-top">
        <small>02 / BUILD</small>

        <button className="service-arrow">
          ↗
        </button>
      </div>

      <h3>Custom software development.</h3>

      <p>
        Enterprise web, mobile, and backend systems when
        shelf products don't fit. Senior-only squads,
        the team that builds also maintains.
      </p>

    </div>


    <div className="service-card">

      <div className="service-top">
        <small>03 / INTELLIGENCE</small>

        <button className="service-arrow">
          ↗
        </button>
      </div>

      <h3>AI & automation.</h3>

      <p>
        Production AI agents grounded in your data,
        governed by your rules, observable end to end.
        Not demos.
      </p>

    </div>


    <div className="service-card">

      <div className="service-top">
        <small>04 / PEOPLE</small>

        <button className="service-arrow">
          ↗
        </button>
      </div>

      <h3>IT staff augmentation.</h3>

      <p>
        Senior engineers, architects, and DevOps embedded
        with your team. US-led delivery, direct-hire model,
        global bench in India and the UAE.
      </p>

    </div>


    <div className="service-card">

      <div className="service-top">
        <small>05 / STRATEGY</small>

        <button className="service-arrow">
          ↗
        </button>
      </div>

      <h3>Digital transformation.</h3>

      <p>
        Executive roadmap, enterprise architecture,
        build-vs-buy, and program delivery. Twenty years
        of pattern recognition you can execute.
      </p>

    </div>


    <div className="service-card">

      <div className="service-top">
        <small>06 / CLOUD</small>

        <button className="service-arrow">
          ↗
        </button>
      </div>

      <h3>Cloud & managed services.</h3>

      <p>
        Managed Odoo hosting, cloud infrastructure,
        24/7 monitoring, and ERP managed services on AWS,
        Azure, GCP, and private cloud.
      </p>

    </div>

  </div>

</section>








<section className="odoo-section">

  <div className="odoo-content">

    <div className="odoo-text">

      <span className="odoo-label">01, ODOO ERP</span>

      <h2>
        One platform. Every
        <br />
        department. <i>Actually</i>
        <br />
        <i>integrated.</i>
      </h2>

      <p className="odoo-description">
        Certified Odoo partner, 50+ implementations, including a
        500,000-employee HR and payroll engagement for a national
        government with 1,000+ users. Finance, ops, sales, HR, and
        manufacturing in one platform.
      </p>

      <ul>
        <li>
          50+ Odoo deployments delivered, including a
          500,000-employee HR, payroll, and custom modules engagement
        </li>

        <li>
          Odoo migration from SAP, NetSuite, Microsoft Dynamics,
          QuickBooks, and legacy Odoo
        </li>

        <li>
          Upgrade-safe custom Odoo modules by senior Python engineers
        </li>

        <li>
          Enterprise Odoo for manufacturing, distribution, field
          service, and public sector
        </li>
      </ul>

      <button className="odoo-button">
        Explore Odoo services ↗
      </button>

    </div>


    <div className="odoo-image">

      <img src={Home} alt="Odoo ERP" />

    </div>

  </div>










<section className="ai-section">

  <div className="ai-container">

    <div className="ai-image">
      <img src={Home} alt="AI automation" />
    </div>

    <div className="ai-content">

      <span className="ai-label">
        02, AI & AUTOMATION
      </span>

      <h2>
        Agents that don't just
        <br />
        chat, <i>they work.</i>
      </h2>

      <p className="ai-description">
        Production AI agents that close tickets, reconcile
        invoices, and answer procurement queries. Grounded,
        governed, observable, not demos.
      </p>

      <ul className="ai-list">

        <li>
          Retrieval-grounded agents with full citation and audit trail
        </li>

        <li>
          AI-powered ERP: intelligent automation inside Odoo workflows
        </li>

        <li>
          Human-in-the-loop controls for regulated and high-stakes
          processes
        </li>

        <li>
          Typical outcomes: 30%+ reduction in manual-task hours
        </li>

      </ul>

      <button className="ai-button">
        See how it works ↗
      </button>

    </div>

  </div>

</section>



















<section className="odoo-section">

  <div className="odoo-content">

    <div className="odoo-text">

      <span className="odoo-label">01, ODOO ERP</span>

      <h2>
        One platform. Every
        <br />
        department. <i>Actually</i>
        <br />
        <i>integrated.</i>
      </h2>

      <p className="odoo-description">
        Certified Odoo partner, 50+ implementations, including a
        500,000-employee HR and payroll engagement for a national
        government with 1,000+ users. Finance, ops, sales, HR, and
        manufacturing in one platform.
      </p>

      <ul>
        <li>
          50+ Odoo deployments delivered, including a
          500,000-employee HR, payroll, and custom modules engagement
        </li>

        <li>
          Odoo migration from SAP, NetSuite, Microsoft Dynamics,
          QuickBooks, and legacy Odoo
        </li>

        <li>
          Upgrade-safe custom Odoo modules by senior Python engineers
        </li>

        <li>
          Enterprise Odoo for manufacturing, distribution, field
          service, and public sector
        </li>
      </ul>

      <button className="odoo-button">
        Explore Odoo services ↗
      </button>

    </div>


    <div className="odooo-image">

      <img src={me} alt="Odoo ERP" />

    </div>

  </div>










</section>

</section>





















<section className="industries-section">

  <div className="industries-heading">

    <div>
      <span className="industries-label">WHERE WE WORK</span>

      <h2>
        Pattern recognition
        <br />
        <i>across verticals.</i>
      </h2>
    </div>

    <p>
      Two decades of implementations means we've seen
      <br />
      your problem before. Industry templates, compliance
      <br />
      defaults, and playbooks included.
    </p>

  </div>


  <div className="industries-list">

    <div className="industry-row">

      <span className="industry-number">01</span>

      <h3>Manufacturing</h3>

      <p>
        Manufacturing ERP on Odoo, MRP, production planning,
        quality control, and shop-floor visibility.
      </p>

      <span className="industry-arrow">↗</span>

    </div>


    <div className="industry-row">

      <span className="industry-number">02</span>

      <h3>
        Retail &amp;
        <br />
        eCommerce
      </h3>

      <p>
        Retail ERP, Odoo POS, omnichannel inventory, loyalty,
        and Shopify/Magento integrations.
      </p>

      <span className="industry-arrow">↗</span>

    </div>


    <div className="industry-row">

      <span className="industry-number">03</span>

      <h3>
        Professional
        <br />
        Services
      </h3>

      <p>
        PSA on Odoo, project accounting, timesheet-to-invoice,
        resource planning, and utilization tracking.
      </p>

      <span className="industry-arrow">↗</span>

    </div>


    <div className="industry-row">

      <span className="industry-number">04</span>

      <h3>Public Sector</h3>

      <p>
        Public sector ERP at national scale, HR, payroll,
        grants, procurement controls, and auditable trails.
      </p>

      <span className="industry-arrow">↗</span>

    </div>


    <div className="industry-row">

      <span className="industry-number">05</span>

      <h3>Nonprofits</h3>

      <p>
        Nonprofit ERP, donor CRM, grant lifecycle, restricted
        fund accounting, and outcome reporting.
      </p>

      <span className="industry-arrow">↗</span>

    </div>

  </div>

</section>














<section className="last-section">
  <div className="last-content">
    <div className="quote">"</div>

    <h2>
      We didn't watch Afghanistan's
      <br />
      tech sector emerge, <span>we helped</span>
      <br />
      <span>build it.</span>
    </h2>

    <p>Farshid Ghyasi · Founder, NETLINKS</p>
  </div>
</section>

<section className="faq-section">
  <div className="faq-content">
    <div className="faq-label">QUESTIONS</div>

    <h2>Answers to what CIOs actually ask.</h2>

    <div className="faq-item">
      <p>What does NETLINKS do?</p>
      <button>+</button>
    </div>

    <div className="faq-item">
      <p>How experienced is NETLINKS with Odoo?</p>
      <button>+</button>
    </div>

    <div className="faq-item">
      <p>What industries does NETLINKS serve?</p>
      <button>+</button>
    </div>

    <div className="faq-item">
      <p>How does an engagement with NETLINKS start?</p>
      <button>+</button>
    </div>
  </div>
</section>




























<section className="cta-section">
  <div className="cta-box">
    <h2>
      Talk to a senior architect
      <br />
      <span>this week.</span>
    </h2>

    <p>
      30-minute call. Walk away with a phased plan and fixed-fee
      <br />
      scoping in 5 business days.
    </p>

    <button>Book a 30-min discovery call ↗</button>
  </div>
</section>

<footer className="footer">
  <div className="footer-main">

    <div className="footer-brand">
      <img src={logo} alt="netlinks" />

      <p>
        A global technology partner for Odoo ERP
        <br />
        implementation, custom software
        <br />
        development, AI automation, and digital
        <br />
        transformation.
      </p>

      <p>info@netlinks.af</p>
      <p>077-302-0101</p>

      <p>
        NETLINKS Plaza, Street 6, Lane 3, Shar-e-naw
        <br />
        Kabul, Afghanistan
      </p>

      <div className="socials">
        <span>𝕏</span>
        <span>◉</span>
        <span>◎</span>
        <span>▶</span>
      </div>
    </div>

    <div className="footer-column">
      <h4>SOLUTIONS</h4>
      <a href="#">CRM</a>
      <a href="#">Sales management</a>
      <a href="#">Point of sale</a>
      <a href="#">Accounting</a>
      <a href="#">Inventory</a>
    </div>

    <div className="footer-column">
      <h4>SERVICES</h4>
      <a href="#">Odoo ERP Services</a>
      <a href="#">Custom software</a>
      <a href="#">AI & automation</a>
      <a href="#">IT staff augmentation</a>
      <a href="#">Digital transformation</a>
      <a href="#">Cloud & managed</a>
    </div>

    <div className="footer-column">
      <h4>INDUSTRIES</h4>
      <a href="#">Manufacturing</a>
      <a href="#">Retail & e-commerce</a>
      <a href="#">Trades & field services</a>
      <a href="#">Professional services</a>
      <a href="#">Nonprofits</a>
    </div>

    <div className="footer-column">
      <h4>COMPANY</h4>
      <a href="#">About</a>
      <a href="#">Customers</a>
      <a href="#">Service areas</a>
      <a href="#">Blog</a>
      <a href="#">Contact</a>
      <a href="#">NETLINKS US</a>
    </div>

  </div>
</footer>
</>

  )
}
