import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs
} from "@fortawesome/free-brands-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

const experience = [
  {
    name: "💸 Cash-price",
    description: {
      es: "Desarrollo de una aplicación de VTEX IO que muestre el precio al contado en la página de detalle de producto y en la página de lista de productos para productos de diferentes colecciones.",
      en: "Development of a VTEX IO application that shows the spot price on the product detail page and on the product list page for products from different collections.",
    },
    url: "https://www.tiendafc.com",
    source: "https://github.com/lucasdellasala/cash-price",
    imgURL:
      "https://user-images.githubusercontent.com/84806140/214992257-654f78ef-8c78-455c-b8ec-cf9e39e19a68.gif",
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
        icon: <FontAwesomeIcon icon={faNodeJs}/>,
        name: 'NodeJs'
      }
    ],
  },
];

export default experience;
