import React, { Component } from 'react';
import '../styles/Footer.css';
import { SocialIcon } from 'react-social-icons';
import 'font-awesome/css/font-awesome.min.css';

class Footer extends Component {
    render() { 
        return (
            <footer className="page-footer font-small blue pt-4">
              <div className="container-fluid text-center text-md-left">
                <div className="row">
                  <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-center text-uppercase">About US</h5>
                    <ul className="text-center list-unstyled">
                      <li className="careers">
                        <a href="/careers">Careers</a>
                      </li>
                      <li className="company">
                        <a href="/company">Company</a>
                      </li>
                      <li className="faqs">
                        <a href="/faqs">FAQS</a>
                      </li>
                      <li className="contact-us">
                        <a href="/contactUs">Contact Us</a>
                      </li>
                      <li className="blog">
                        <a href="/blog">Blog</a>
                      </li>
                    </ul>
                  </div>
                  <hr className="clearfix w-100 d-md-none pb-3"/>
                  <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-center text-uppercase">Social Links</h5>
                    <ul className="text-center list-unstyled">
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
                    <h5 className="text-center text-uppercase">Contact Us</h5>
                    <ul class="text-center list-unstyled mb-0">
                      <li>
                        <i class="fa fa-map-marker"></i>
                        <br/> 
                        <p>20 Belvedere Road<br/>Flat 4<br/>Dublin 2</p>
                      </li>
                      <li><i class="fa fa-phone"></i>
                        <p>+ 01 234 337 89</p>
                      </li>
                      <li><i class="fa fa-envelope mt-4 fa-2x"></i>
                        <p>contact@mdbootstrap.com</p>
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