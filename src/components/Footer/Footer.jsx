import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//imports librerias extrernas
//imports propios
import "./Footer.css"


const Footer = () => {
  return (
    <div className="container ">
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
            {/* Section: Social mediLink */}
            <section className="mb-4">
                <Link className="btn btn-dark display-5 btn-floating m-1" to="www.Facebook.com" >
                <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                </Link>

                <Link className="btn btn-dark display-5 btn-floating m-1" to="www.Twitter.com" >
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
                </Link>

                <Link className="btn btn-dark display-5 btn-floating m-1" to="www.Google.com" >
                <FontAwesomeIcon icon="fa-brands fa-google" />
                </Link>

                <Link className="btn btn-dark display-5 btn-floating m-1" to="www.Instagram.com" >
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
                </Link>

                <Link className="btn btn-dark display-5 btn-floating m-1" to="https://www.linkedin.com/in/nataliamoroni/" >
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </Link>

                <Link className="btn btn-dark display-5 btn-floating m-1" to="https://github.com/Aranthiel">
                <FontAwesomeIcon icon="fa-brands fa-github" size="lg" />
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