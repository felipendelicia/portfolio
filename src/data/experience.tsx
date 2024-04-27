import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

const experience = [
  {
    name: "🅰️ afip-facturation-api",
    description: {
      es: "Desarrolle una api que lleva a cabo una integracion mas amigable con el desarrollador de la api de afip para llevar a cabo la facturacion de una empresa.",
      en: "Develop an API that performs a more developer-friendly integration with the afip API to perform billing for a company.",
    },
    imgURL:
      "https://deabogados.ar/wp-content/uploads/2023/07/Como-cambiar-de-obra-social-en-AFIP.jpg",
    date: {
      en: "December 2023 - January 2024",
      es: "Diciembre 2023 - Enero 2024",
    },
    stack: [
      {
        icon: <FontAwesomeIcon icon={faFlag} />,
        name: "Typescript",
      },
      {
        icon: <FontAwesomeIcon icon={faNodeJs} />,
        name: "NodeJs",
      },
    ],
  },
  {
    name: "🗜️ Taller-admin",
    description: {
      es: "Desarrolle una aplicacion web que se encarga de llevar adelante la organizacion de las ordenes de servicio, la caja, clientes y hasta de los equipos en deposito de los distintos talleres de la empresa Nerd IT.",
      en: "I developed a web application that is responsible for carrying out the organization of service orders, cash, clients and even the equipment in storage of the different workshops of the Nerd IT company.",
    },
    imgURL:
      "https://github.com/felipendelicia/portfolio/assets/84806140/55dff2f5-f0e8-4770-8618-790bed11ee59",
    date: {
      en: "January 2024 - March 2024",
      es: "Enero 2024 - Marzo 2024",
    },
    stack: [
      {
        icon: <FontAwesomeIcon icon={faReact} />,
        name: "React.js",
      },
      {
        icon: <FontAwesomeIcon icon={faFlag} />,
        name: "Typescript",
      },
      {
        icon: <FontAwesomeIcon icon={faNodeJs} />,
        name: "NodeJs",
      },
    ],
  },
  {
    name: "💸 Cash-price",
    description: {
      es: "Desarrollo de una aplicación de VTEX IO que muestre el precio al contado en la página de detalle de producto y en la página de lista de productos para productos de diferentes colecciones.",
      en: "Development of a VTEX IO application that shows the spot price on the product detail page and on the product list page for products from different collections.",
    },
    url: "https://www.tiendafc.com",
    source: "https://github.com/lucasdellasala/cash-price",
    imgURL:
      "https://user-images.githubusercontent.com/84806140/224500403-f79dda0a-1746-4c69-b2ae-dbe253eb4408.gif",
    date: {
      es: "Octubre 2022 - Noviembre 2022",
      en: "October 2022 - November 2022",
    },
    stack: [
      {
        icon: <FontAwesomeIcon icon={faReact} />,
        name: "React.js",
      },
      {
        icon: <FontAwesomeIcon icon={faFlag} />,
        name: "Typescript",
      },
      {
        icon: <FontAwesomeIcon icon={faNodeJs} />,
        name: "NodeJs",
      },
    ],
  },
  {
    name: "📜 Perk-vtex-app",
    description: {
      es: "Realice una refactorización y repare los errores en el código de esta API perteneciente a una app de VTEX. Esta API está encargada de enviar las garantías extendidas disponibles para sus respectivos productos.",
      en: "Refactor and fix errors in the code of this API belonging to a VTEX app. This API is in charge of sending the extended warranties available for their respective products.",
    },
    url: "https://www.killstore.cl/",
    source: "https://github.com/lucasdellasala/perk-vtex-app",
    imgURL:
      "https://user-images.githubusercontent.com/84806140/224555625-fd86eefa-2fdc-493a-9afd-ef56753da6de.gif",
    date: {
      es: "Enero 2023 - Febrero 2023",
      en: "January 2023 - February 2023",
    },
    stack: [
      {
        icon: <FontAwesomeIcon icon={faReact} />,
        name: "React.js",
      },
      {
        icon: <FontAwesomeIcon icon={faFlag} />,
        name: "Typescript",
      },
      {
        icon: <FontAwesomeIcon icon={faNodeJs} />,
        name: "NodeJs",
      },
    ],
  },
  {
    name: "📲 No te distraigas",
    description: {
      es: "He creado esta aplicación web para una organización sin fines de lucro conocida como 'Minu'. Su objetivo era digitalizar el popular 'juego de las distracciones' que presentan en diversas escuelas. Esta aplicación es el resultado de esa digitalización. La premisa central de la aplicación consiste en un juego digital que demuestra la vulnerabilidad que experimentamos al utilizar el teléfono celular mientras conducimos.",
      en: "I developed this web application for a non-governmental organization called 'Minu'. They wanted to digitize the 'game of distractions' that they showcase in different schools, and this application is the outcome of that digitization. The main premise of the application includes a digital game that demonstrates how vulnerable we are when using our cell phones while driving.",
    },
    url: "https://notedistraigas.netlify.app/",
    source: "https://github.com/proyectomandarina/minu-game-client",
    imgURL:
      "https://user-images.githubusercontent.com/84806140/253344082-99ec2f4f-7360-4f5b-a594-46ebba49fa8c.gif",
    date: {
      es: "Marzo 2023 - Junio 2023",
      en: "March 2023 - June 2023",
    },
    stack: [
      {
        icon: <FontAwesomeIcon icon={faReact} />,
        name: "React.js",
      },
      {
        icon: <FontAwesomeIcon icon={faFlag} />,
        name: "Typescript",
      },
    ],
  },
];

export default experience;
