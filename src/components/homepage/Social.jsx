import React from 'react'

const Social = () => {
    return (
        <div className="home__social">
         
            <a href="#" className="home-social-icon" onClick={(e) => e.preventDefault()}>
                <i className="uil uil-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/donald-bilbili-92730b20b/" className="home-social-icon" target="_blank">
            <i className="uil uil-linkedin"></i>
            </a>

            <a href="https://github.com/DonaldBilbili?tab=repositories" className="home-social-icon" target="_blank">
            <i className="uil-github"></i>
            </a>
        </div>
    )
}

export default Social