import React from "react";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>

      <div className={s.wrapper} id="container">
        <nav>
          <ul>
            <li>Company</li>
            <hr />
            <li>About</li>
            <li>Team</li>
            <li>Supporters</li>
            <li>Diversity</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li>Product</li>
            <hr />
            <li>Our Approach</li>
            <li>Corrections Leaders</li>
            <li>Corrections Staff</li>
            <li>Policy Impact</li>
            <li>Public Data</li>
            <li>Security</li>
            <li>Testimonials</li>
          </ul>
          <ul>
            <li>States</li>
            <hr />
            <li>Overview</li>
            <li>Idaho</li>
            <li>Maine</li>
            <li>Michigan</li>
            <li>North Dakota</li>
            <li>Missouri</li>
            <li>Pennsylvania</li>
          </ul>
          <ul>
            <li>Network</li>
            <hr />
            <li>Twitter</li>
            <li>Medium</li>
            <li>GitHub</li>
            <li>LinkedIn</li>
          </ul>
        </nav>
      </div>

    </footer>
  );
};

export default Footer;
