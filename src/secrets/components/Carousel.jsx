import Carousel from 'react-bootstrap/Carousel';

import img1 from '../../assets/secrets/order_movies.jpg'
import img2 from '../../assets/secrets/kylo_guard.webp'
import img3 from '../../assets/secrets/trap2.jpg'
import img4 from '../../assets/secrets/obiwan_trick2.jpg'

export function CarouselSecrets() {

    const secrets = [img1,img2,img3,img4]

  return (
    // <div className='container '>
    <Carousel fade>
        {secrets.map((e) => (
        <Carousel.Item key={e}>
            <img
              className="d-block w-100"
              // className="img img-fluid"
              // style={{maxHeight:'65vh', width:'80vh'}}
              style={{maxHeight:'70vh'}}
              src={e}
              alt="First slide"
              />
        </Carousel.Item>
        ))}

    </Carousel>
    // </div>
  );
}

