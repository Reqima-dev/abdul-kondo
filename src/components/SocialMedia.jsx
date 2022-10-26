import React from "react";
import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/KondoAdlou" target="_blank">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/adlou-kondo" target="_blank">
          <FaLinkedinIn />
        </a>
      </div>
      <div>
        <a href="https://github.com/Reqima-dev" target="_blank">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
