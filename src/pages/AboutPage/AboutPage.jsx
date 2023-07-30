import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Mockup from "../../assets/mackupFaux.png";
import Foto from "../../assets/foto.png";
// estilos
import "./AboutPage.css"

const AboutPage = () =>{
    return (
        <div className='aboutPage'>
            <div className="sobreMi">
                <div className="sobreMiImgContainer">
                <img src={Foto} alt="Logo Tienda Faux" className="sobreMiImg" />
                </div>
                <div className="sobreMiDescripcion">
                    <h1 className="sobreMiTitulo" >Sobre mí</h1>
                    <p>
                        ¡Hola! Soy Natalia Moroni, una apasionada desarrolladora web con enfoque educativo y experiencia en tecnologías frontend y backend. Actualmente, me encuentro en constante aprendizaje y me dedico a proyectos desafiantes que me permiten crear soluciones innovadoras y funcionales.
                    </p>
                    <p>
                        Con una sólida formación en el desarrollo de aplicaciones web utilizando React.js, Node.js y Firebase, he participado en diversos proyectos educativos que han ampliado mis habilidades y conocimientos.
                    </p>
                    <p>
                        Mi objetivo es seguir creciendo en el campo del desarrollo web y contribuir con mi pasión por el diseño de interfaces de usuario intuitivas y accesibles, así como la implementación de funcionalidades escalables y robustas.
                    </p>
                    <p>
                        Además de mi experiencia educativa, disfruto colaborar en equipos multidisciplinarios y aprender de otros profesionales. La colaboración y el trabajo en equipo son fundamentales para lograr proyectos exitosos.
                    </p>
                    <p>
                        Estoy emocionada de seguir aprendiendo y ser parte de proyectos innovadores que tengan un impacto positivo en las personas.
                    </p>
                    <p>
                        Si deseas contactarme o ver más de mis proyectos, puedes encontrarme en mis perfiles de LinkedIn y GitHub:
                    </p>
                    <ul className="sobreMiUl">
                        <li><Link to="https://www.linkedin.com/in/nataliamoroni/" className="sobreMiLInk" target="_blank"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></Link></li>
                        <li><Link to="https://github.com/Aranthiel" className="sobreMiLInk" target="_blank"><FontAwesomeIcon icon="fa-brands fa-github" size="lg" /></Link></li>
                    </ul>
                </div>
            </div>

            <div className="sobreProyecto">
                <div>
                    <h2 className="sobreProyectoTitulo">Sobre el proyecto</h2>
                    <p>
                        Este proyecto es el resultado del desarrollo del proyecto final del curso de React JS dictado por CoderHouse. El objetivo del proyecto es crear una aplicación de comercio electrónico (e-commerce) donde se puedan vender productos de un rubro a elección.
                    </p>
                    <p>
                        El proyecto consiste en desarrollar una aplicación de e-commerce con las siguientes características:
                    </p>
                    <ul className="sobreProyectoUl">
                        <li>Los usuarios pueden ingresar, navegar por los productos y ver los detalles de cada producto.</li>
                        <li>Desde la página de detalle de un producto, se puede ver su descripción, foto y precio, y agregarlo al carrito.</li>
                        <li>Cuando el carrito contiene al menos un producto, se muestra un listado compacto de la orden con el precio total.</li>
                        <li>Al ingresar el nombre, apellido, teléfono y correo electrónico (verificado ingresándolo dos veces), se activa el botón "Realizar compra".</li>
                        <li>Al hacer clic en "Realizar compra", se guarda la orden en la base de datos, incluyendo todos los productos, la fecha y se muestra el número de orden.</li>
                    </ul>

                    <h3>
                        Librerías adicionales utilizadas:
                    </h3>
                    <ul className="sobreProyectoUlLibrerias">
                        <li><Link to="https://reactrouter.com/" target="_blank">React Router</Link>: Librería para la gestión de la navegación en aplicaciones de React.</li>
                        <li><Link to="https://firebase.google.com/" target="_blank">Firebase</Link>: Plataforma de desarrollo de aplicaciones web que proporciona una base de datos en tiempo real y autenticación de usuarios.</li>
                    </ul>
                    <p>
                        Para obtener más información sobre el proyecto y las decisiones de implementación, consulta el archivo <Link to="README.md" target="_blank">README.md</Link> en la raíz del proyecto.
                    </p>

                </div>
                <div className="sobreProyectoImgContainer">
                <img src={Mockup} alt="Logo Tienda Faux" className="sobreProyectoImg" />
                </div>
            </div>
        </div>

    );
}

export default AboutPage;