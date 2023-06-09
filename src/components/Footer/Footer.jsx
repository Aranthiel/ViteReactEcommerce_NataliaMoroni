import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//imports librerias extrernas
//imports propios
import "./Footer.css"


const Footer = () => {
  return (
    <div className="container my-5">
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
            {/* Section: Social mediLink */}
            <section className="mb-4">
                <Link className="btn btn-outline-light btn-floating m-1" to="www.Facebook.com" >
                  i
                </Link>

                <Link className="btn btn-outline-light btn-floating m-1" to="www.Twitter.com" >
                  i
                </Link>

                <Link className="btn btn-outline-light btn-floating m-1" to="www.Google.com" >
                  i
                </Link>

                <Link className="btn btn-outline-light btn-floating m-1" to="www.Instagram.com" >
                  i
                </Link>

                <Link className="btn btn-outline-light btn-floating m-1" to="www.Linkedin.com" >
                  i
                </Link>

                <Link className="btn btn-outline-light btn-floating m-1" to="www.Github.com">
                  i
                </Link>
                
            </section>
        </div>
        <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
            footer
        </div>
        
      </footer>
    </div>
  )
}

export default Footer