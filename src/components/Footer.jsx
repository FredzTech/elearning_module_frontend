import React from "react";
import { Link } from "react-router-dom";
import Linkedin from "../assets/socials/linkedin.png";
import {
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
  FaGooglePlay,
  FaDiscord,
  FaFacebook,
} from "react-icons/fa";
// import Twitter from '../assets/socials/twitter.png'
import Facebook from "../assets/socials/facebook.png";
import Whatsapp from "../assets/socials/whatsapp.png";
// import GooglePlaystore from '../assets/googlePlaystore.png'

export default function Footer() {
  return (
    <div className="flex gap-56 h-auto bg-light-grey w-full text-center  p-8 md:gap-10 mb-0 sm:flex-col sm:gap-4 sm:p4">
      <div className="text-4xl text-center align-center">E-MODULE</div>

      {/* <div className="br-blue">
            <h3 className='text-3xl pb-2'>App</h3>
            <p>Get our app in google play store</p>
            <img src={GooglePlaystore} alt="" className='h-20 '  />
        </div> */}

      <div className="flex flex-wrap gap-20 sm:gap-2 md:gap-2">
        <div className="flex flex-col gap-3 sm:px-10 ">
          <Link to="courses">Courses</Link>
          <Link to="units">Units</Link>
          <Link to="pricing">Subscription</Link>
          <Link to="/">Home</Link>
        </div>
        <div className="flex flex-col gap-3  ">
          <Link to="courses">Courses</Link>
          <Link to="units">Units</Link>
          <Link to="pricing">Subscription</Link>
          <Link to="/">Home</Link>
        </div>
      </div>

      <div className="justify-center items-center">
        <h3 className="text-3xl mb-4">Socials</h3>
        <div className="flex gap-8 justify-center items-center">
          <a href="" className="text-primary">
            <FaTwitter className="w-10 h-10" />
          </a>
          <a href="">
            <FaWhatsapp className="w-10 h-10 text-jade" />
          </a>
          <a href="">
            <FaFacebook className="w-10 h-10 text-navy-blue" />
          </a>
          <a href="">
            <FaLinkedinIn className="w-10 h-10 text-zaffre" />
          </a>
          <a href="">
            <FaDiscord className="w-10 h-10 text-white bg-blue rounded-full" />
          </a>
        </div>
      </div>
    </div>
  );
}
