import React from 'react';
import { MdMessage, MdAddCall } from 'react-icons/md';
import { BsInstagram,BsFacebook,BsGithub,BsLinkedin } from 'react-icons/bs';
import Images from '../Images/Images';

function Footer(props) {
    return (
        <>
            <div className="container-fluid mt-5 ">
  <div className="row text-white bg-dark justify-content-between flex-column flex-md-row align-items-center p-5 rounded-xl">

    {/* Logo */}
    <div className="col-md-4">
      <div className="text-center text-md-start">
        <p className=" font-bold capitalize p-3">A personal portfolio</p>
        <img style={{height:'150px',width:'150px'}} src={Images.shopify} alt="not load" />
      </div>
    </div>

    {/* Get in touch */}
    <div className="col-md-4 mt-3 mt-md-0">
      <h1 className=" font-bold capitalize p-3">Get in touch</h1>

      <div className="d-flex gap-2 align-items-center  text-xl">
        <MdMessage />
        <p>9664sukhdevsingh@gmail.com</p>
      </div>

      <div className="d-flex gap-2 align-items-center text-xl">
        <MdMessage />
        <p>sukhdev.2100398@sanskriti.ac.in</p>
      </div>
      
      <div className="d-flex gap-2 align-items-center text-xl">
        <MdMessage />
        <p>shoppy@gmail.com</p>
      </div>
      <div className="d-flex gap-2 align-items-center text-xl">
        <MdAddCall />
        <p>+91 9664627236</p>
      </div>
    </div>

    {/* Connect with us */}
    <div className="col-md-4 mt-3 mt-md-2">
      <h1 className=" font-bold capitalize">Connect with us</h1>

      <div className="d-flex gap-2 items-center " onClick={()=>window.location.href='https://www.linkedin.com/in/sukhdev-singh-70b01427b/'}>
        <p>Linkedin</p>
        <BsLinkedin />
        
      </div>

      <div className="d-flex gap-2 items-center ">
        <p>Facebook</p>
        <BsFacebook />
      </div>

      <div className="d-flex gap-2 items-center ">
        <p>Instagram</p>
        <BsInstagram />
      </div>

      <div className="d-flex gap-2 items-center   " onClick={()=>window.location.href='https://github.com/Sukhdevsingh123'}>
        <p>Github</p>
        <BsGithub />
      </div>
    </div>
  </div>
</div>

        </>
    );
}

export default Footer;