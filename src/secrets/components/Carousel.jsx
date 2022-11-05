import Carousel from 'react-bootstrap/Carousel';

import img1 from '../../../assets/secrets/order_movies.jpg'
import img2 from '../../../assets/secrets/kylo_guard.webp'
import img3 from '../../../assets/secrets/boba_lives.webp'
import img4 from '../../../assets/secrets/back_snow.jpg'

export function CarouselSecrets() {

    const secrets = [img1,img2,img3,img4]

  return (
    // <div className='container '>
    <Carousel fade>
        {secrets.map((e) => (
        <Carousel.Item>
            <img
              className="d-block"
            //   className="img-fluid w-100 h-100"
              // style={{width:'90vh'}}
              src={e}
              key={e}
              alt="First slide"
              
              />
        </Carousel.Item>
        ))}

    </Carousel>
    // </div>
  );
}

