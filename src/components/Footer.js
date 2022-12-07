import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    
    
    
    return ( 
     
    <React.Fragment>


<footer className="relative max-w-full h-auto p-2
 bg-primary">

<div className="w-full grid lg:grid-cols-[_2fr_1fr_1fr_1fr] md:grid-cols-2 sm-grid-cols-1 gap-5  ">

 <div className=" text-white m-2">
  <h2 className="relative mb-4 text-2xl">About Us</h2>
  <p className=""> Hoopnomics is basketball based brand that focus on data analytics and statistics from a pro player's prospective. 
    Follow our content as we look "Inside the Numbers".</p>
  
  <ul className="mt-5 flex">
      <li><a href="/" > <i className="fa-brands fa-facebook-square fa-3x m-2" ></i></a></li>
      <li><a href="/"><i className="fa-brands fa-linkedin fa-3x m-2"></i></a></li>
      <li><a href="http://www.instagram.com/hoopnomics" ><i className="fa-brands fa-instagram-square fa-3x m-2 "></i></a></li>
      <li><a href="/"> <i className="fa-brands fa-twitter-square fa-3x m-2"></i></a></li>
  </ul>
</div>

<div className="text-white m-2 ">
  <h2 className="relative mb-4 text-2xl">Quick Links</h2>
  <ul>
      <li ><a href="/">About</a></li>
      <li ><a href="/">FAQ</a></li>
      <li ><a href="/">Privacy Policy</a></li>
      <li ><a href="/">Help </a></li>
      <li ><a href="/">Terms & Conditions </a></li>
      <li ><a href="/">Contact </a></li>
  </ul>
</div>

<div className="text-white m-2">
  <h2 className="relative mb-4 text-2xl">Shop</h2>
  <ul>
      <li><Link to ="/store">Shirts</Link></li>
      <li><Link to="/store">Hoodie</Link></li>
      <li>< Link to="/store">Hats & Accessories </Link></li>
  </ul>
</div>
<div className="text-white m-2">
  <h2 className="relative mb-4 text-2xl">Contact Us</h2>
  <ul>
<li>
  <span><i className="fa-solid fa-location-dot"></i></span>
  <span className="p-1">219 Palm Avenue<br   />
        Miami, FL 33025<br   />USA</span>
</li>
<li>
  <span><i className="fa-solid fa-phone"></i></span>
  <span className="p-1"><a href="tel:1+3058314962">+1 305 831 4962</a></span>
  
</li>
<li>
  <span><i className="fa-solid fa-envelope"></i></span>
  <span className="p-1"><a href="mailto:info@hoopnomics.com">info@hoopnomics.com</a></span> 
</li>
</ul>
</div>

</div>          

</footer>

<div className="text-white bg-primary mx-auto">
  <p className="text-center pb-2">Copyright &copy; 2022 Hoopnomics all Rights Reserved</p>
</div>





 </React.Fragment>
     );
}
 
export default Footer;