import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import foto1 from "../images/Carousel/IMG_1144.jpg"
import foto2 from "../images/Carousel/IMG_1241.jpg"
import foto3 from "../images/Carousel/IMG_1659.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={foto1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Eu e Leticia</h3>
          <p>Eu e a minha esposa.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={foto2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Bruce</h3>
          <p>Bruce é o nosso cachorro, dei ele para a Leticia logo no inicio do nosso casamento. Ele tem nos acompanhado em nossa jornada</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={foto3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Família</h3>
          <p>
            A presença e participação da família é uma parte importante de nossas vidas.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;