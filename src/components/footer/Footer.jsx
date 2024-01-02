import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title"></h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#qualification" className="footer__link">Qualification</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="#" className="home-social-icon" onClick={(e) => e.preventDefault()}>
                <i className="bx bxl-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/donald-bilbili-92730b20b/" className="home-social-icon" target="_blank">
            <i className="bx bxl-linkedin"></i>
            </a>

            <a href="https://github.com/DonaldBilbili?tab=repositories" className="home-social-icon" target="_blank">
            <i className="uil uil-github-alt"></i>
            </a>
            </div>

            <span className="footer__copy">&#169; Donald Bilbili / All rights reserved</span>

        </div>
    </footer>
  );
};

export default Footer;