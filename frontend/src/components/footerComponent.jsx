import React, { Component } from 'react';
import '../styles/Footer.css';
import { SocialIcon } from 'react-social-icons';
import 'font-awesome/css/font-awesome.min.css';

class Footer extends Component {
    render() { 
        return (
            <footer className="page-footer font-small blue pt-4 fixed-bottom">
              <div className="container-fluid text-center text-md-left">
                <div className="row">
                  <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase">About US</h5>
                    <ul className="list-unstyled">
                      <li className="careers">
                        <a href="">Careers</a>
                      </li>
                      <li className="company">
                        <p>Company</p>                        
                      </li>
                    </ul>
                  </div>
                  <hr className="clearfix w-100 d-md-none pb-3"/>
                  <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Social Links</h5>
                    <ul className="list-unstyled">
                      <li className="social-link-button">
                        <SocialIcon url="https://www.facebook.com" network="facebook" style={{ height: 35, width: 35 }} fgColor="white"/>
                      </li>
                      <li className="social-link-button">
                        <SocialIcon url="http://twitter.com" network="twitter" style={{ height: 35, width: 35 }} fgColor="white"/>
                      </li>
                      <li className="social-link-button">
                        <SocialIcon url="http://linkedin.com" network="linkedin" style={{ height: 35, width: 35 }} fgColor="white"/>
                      </li>
                      <li className="social-link-button">
                        <SocialIcon url="http://youtube.com" network="youtube" style={{ height: 35, width: 35 }} fgColor="white"/>
                      </li>
                    </ul>

                  </div>  
                  <div className="col-md-3 mb-md-0 mb-3">            
                    <h5 className="text-uppercase">Contact Us</h5>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#!">23 Sherard Street</a>
                      </li>
                      <li>
                        <a href="#!">Flat 3</a>
                      </li>
                      <li>
                        <a href="#!">Dublin 1</a>
                      </li>
                    </ul>
                  </div>            
                </div>            
              </div>                      
            </footer>
        );
    }
}
 
export default Footer;