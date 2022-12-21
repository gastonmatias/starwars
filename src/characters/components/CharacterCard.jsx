import { Link } from "react-router-dom"

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { RingLoader } from "react-spinners";

// import images from '../../assets/characters/*'

export const CharacterCard = ({
    id,
    name,
    title,
    imgHor,
    side,
    homeWorld,
    species,
    affiliation,
    master,
    description,
    rank
}) => {

  // const characterImageUrl = `/assets/characters/${imgHor}.jpg`
  // const characterImageUrl = import(`/src/assets/characters/${imgHor}.jpg`)
  
  // const characterImageUrl = `../../src/assets/characters/${imgHor}.jpg`
  // const characterImageUrl = (`../../src/assets/characters/${imgHor}.jpg`)
  // const characterImageUrl = `./assets/characters/${imgHor}.jpg`

  return (

  <Col >
    <Card className="border border-dark">
      {/* <Card.Img variant="top" src={characterImageUrl}  */}
      <Card.Img variant="top" src={imgHor} 
                className='animate__animated animate__fadeIn animate__fast' />
      <Card.Body>
        <Card.Title className="display-5">{name}</Card.Title>
        <Card.Text>
          { title && 
            <span className="d-block"><strong>Title:</strong> {title}</span>
          }
          
          <span className="d-block"><strong>Rank:</strong> {rank}</span>
          <span className="d-block"><strong>Trained By:</strong> {master}</span>
        </Card.Text>

      <Link className="" to={`/characters/${id}`}>...More</Link>
      </Card.Body>
    </Card>
  </Col>
    

)
}