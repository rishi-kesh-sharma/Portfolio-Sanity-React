import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/rishi-sharma-579685193/">
        {" "}
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/profile.php?id=100010842122488">
        {" "}
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/ri_c_sharma/">
        {" "}
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
