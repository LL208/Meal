import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css"

const Footer = function () {
  return (
    <div className="container-fluid">
      <footer id="footer" className="footer">
        <div className="container">
          <div className="row gy-3">
            <div className="col-lg-6 col-md-6 d-flex justify-content-center">
              <i className="bi bi-geo-alt icon"></i>
              <div>
                <h4>Address</h4>
                <p>A108 Adam Street New York, NY 535022 - US</p>
              </div>
            </div>

            <div className="col-6 col-md-6 footer-links d-flex justify-content-center">
              <i className="bi bi-telephone icon"></i>
              <div>
                <h4>Reservations</h4>
                <p>
                  <strong>Phone:</strong> +1 5589 55488 55
                  <strong>Email:</strong> info@example.com
                </p>
              </div>
            </div>

          
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Luciano</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits"></div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
