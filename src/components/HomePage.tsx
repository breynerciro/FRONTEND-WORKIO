import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faCheckCircle,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import aboutUsImage from "../assets/AcercaDe.png";

fetch("https://backend-workio-80lm.onrender.com/test-cookie", {
  method: "GET",
  credentials: "include", 
});

const HomePage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Bienvenido a Workio</h1>
            <p className="text-gray-700 text-lg">
              En Workio transformamos la forma de trabajar conectando a
              profesionales con espacios de coworking que inspiran
              productividad y colaboración. Aquí encuentras el lugar ideal
              para enfocarte, conectar y crecer, todo de forma rápida,
              flexible y segura. Si tienes un espacio de coworking, te
              ayudamos a destacarte, llenar tus vacantes y simplificar la
              gestión de reservas y pagos.
            </p>
        </div>
        <div className="lg:w-1/2">
          <img 
            src={aboutUsImage}
            alt="Espacio de coworking"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Acerca de Nosotros</h2>
          
        <div className="w-full bg-gray-100 rounded-lg p-4 mb-4">
          <h3 className="text-xl font-bold mb-2 text-center">Visión</h3>
          <p className="text-gray-700 text-center md:px-4">
            Para 2030, WORKIO será la plataforma líder, adaptable y 
            transparente en Bogotá para profesionales y emprendedores 
            que buscan romper con el aislamiento del trabajo remoto. 
            Workio ofrece espacios de coworking diseñados para impulsar 
            la productividad y facilitar conexiones significativas de 
            estudiantes y profesionales para que amplíen su círculo profesional.
          </p>
        </div>
          
        <div className="w-full bg-gray-100 rounded-lg p-4 mb-4">
          <h3 className="text-xl font-bold mb-2 text-center">Misión</h3>
          <p className="text-gray-700 text-center md:px-4">
            Workio conecta a profesionales con espacios de coworking 
            inspiradores para ampliar su círculo profesional, potenciar 
            su productividad y transformar su experiencia de trabajo remoto.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-6">
        <h2 className="text-3xl font-bold font-raleway mb-8">
          ¿Quieres colocar tu espacio en Workio?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 w-full md:px-20">
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md font-raleway bg-red-100">
            <FontAwesomeIcon
              icon={faClipboardList}
              size="2x"
              className="mb-2 text-red-500"
            />
            <h3 className="text-xl font-bold">Pasos</h3>
            <p className="text-left font-raleway mt-2">
              - Regístrate en nuestra plataforma.
              <br />
              - Completa tu perfil de Workio.
              <br />
              - Verifica tu cuenta.
              <br />- ¡Empieza a recibir Reservas!
            </p>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md font-raleway bg-red-100">
            <FontAwesomeIcon
              icon={faCheckCircle}
              size="2x"
              className="mb-2 text-red-500"
            />
            <h3 className="text-xl font-bold">Requisitos</h3>
            <p className="text-left mt-2">
              - Licencia de operación válida.
              <br />
              - Descripcion y Fotos.
              <br />
              - Equipo de recepcion propio.
              <br />- Cumplimiento con normas sanitarias.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md font-raleway bg-red-100">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2x"
              className="mb-2 text-red-500"
            />
            <h3 className="text-xl font-bold">Contacto</h3>
            <p className="text-left mt-2">
              - Email: equipoworkio@gmail.com
              <br />- Teléfono: +57 123 456 789
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;