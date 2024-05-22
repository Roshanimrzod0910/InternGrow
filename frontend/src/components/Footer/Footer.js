import React, { useState } from "react";
import "./Footer.css"; 

const Footer = () => {
  const [showSubItems1, setShowSubItems1] = useState(false);
  const [showSubItems2, setShowSubItems2] = useState(false);
  const [showSubItems3, setShowSubItems3] = useState(false);
  const [showSubItems4, setShowSubItems4] = useState(false);
  const [showSubItems5, setShowSubItems5] = useState(false);

  return (
    
    <main>
     
     <hr/>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="/images/logo.png" alt="Logo" />
            </div>
            <div className="col-md-6 text-right">
              <h6 >Discover the Synergy</h6>
              <p >Between Our Mentors and Mentees</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <h4>Column 1</h4>
              <p>This is some text for column 1.</p>
              <ul>
                <li>
                  <i className="fas fa-chevron-right"></i>2024 InternGrow Ltd. 
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i>All Rights Reserved.
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i>Terms of Use
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i>About InternGrow
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>Column 4</h4>
              <p>This is some text for column 4.</p>
              <ul>
                <li>
                  <i className="fas fa-chevron-right"></i> Item 1
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i> Item 2
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i> Item 3
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Footer;
