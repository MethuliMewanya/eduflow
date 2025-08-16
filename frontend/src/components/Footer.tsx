import React from 'react';
import '../styles/styles.scss';
import {  NavLink } from 'react-router-dom';

import FB from '../assets/fb black.png';
import Instar from '../assets/Instargram black.png';
import X from '../assets/logo X black.png';
import LinkedIn from '../assets/linkedIn black.png';

const Footer: React.FC = () => {
  return (
    <footer className="text-white sub-footer bg-dark">
      <div className="container py-4 text-center">
        {/* Stay Updated Section */}
        <div className="stay-updated">
          <NavLink to="/contact" className=" connect d-block mb-2">
            <h1>Connect With Us</h1>
          </NavLink>
          
          

          <div className="flex-wrap gap-0 mt-3 social-icons d-flex justify-content-center">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={FB} alt="Facebook" className="mx-5 social-icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={Instar} alt="Instagram" className="mx-5 social-icon" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={X} alt="X" className="mx-5 social-icon" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={LinkedIn} alt="LinkedIn" className="mx-5 social-icon" />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="mt-4 footer-links row">
          <div className="mb-3 text-center col-md-6">
            <h5>© 2025 EduFlow</h5>
                                    <ul className="mb-0 list-inline">
                                        <li className="mx-3 list-inline-item">
                                            <h6 className="text-white">About US</h6>
                                        </li>
                                        <li className="mx-3 list-inline-item">
                                            <h6 className="text-white">Terms</h6>
                                        </li>
                                        <li className="mx-3 list-inline-item">
                                            <h6 className="text-white">Privacy Policies</h6>
                                        </li>
                                        <li className="mx-3 list-inline-item">
                                            <h6 className="text-white">Cookies</h6>
                                        </li>
                                        <li className="mx-3 list-inline-item">
                                            <h6 className="text-white">Status</h6>
                                        </li>
                                    </ul>
          </div>

          <div className="mb-3 text-center col-md-6">
            <h5>© 2025 Mavericks</h5>
                                    <ul className="mb-0 list-inline">
                                        <li className="mx-3 list-inline-item">
                                            <h6 className="text-white">Developers</h6>
                                        </li>
                                        <li className="mx-3 list-inline-item">
                                            <h6 className="text-white">License & Registrations</h6>
                                        </li>
                                        <li className="mx-3 list-inline-item">
                                            <h6 className="text-white">Privacy Terms</h6>
                                        </li>
                                    </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
