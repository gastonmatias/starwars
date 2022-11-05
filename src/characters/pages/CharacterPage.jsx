import { useParams,Navigate, useNavigate } from "react-router-dom"
import { getCharacterById } from "../helpers"

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from "react-bootstrap";
import { useEffect, useMemo } from "react";

export const CharacterPage = () => {
  
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'instant'});
  }, []);

  const {characterId} = useParams()
  const navigate = useNavigate()
  const character = useMemo(()=> getCharacterById(characterId),[characterId])
  
  const onNavigateBack = () => {
    navigate(-1)
  }

  // si no existe character proporcionado directamente x url
  if (!character) {
    return <Navigate to='/'/>
  }

  const characterImage = `/assets/characters/${character.imgHor}.jpg`

  return (
  <>
  <div className="row my-5 justify-content-center" >
    
    <div className="col-12 col-sm-12 col-lg-6 align-items-center mb-1">
      <Card.Img variant="top" src={characterImage} 
                className="img-fluid rounded animate__animated animate__slideInLeft animate__fast" />
    </div>
    
    <Card className="col-12 col-sm-12 col-lg-6 border border-secondary rounded" >
      <Card.Body className="text-center">
        <Card.Title className="display-5">
          {character.name} 
        </Card.Title>
        <Card.Subtitle className="fw-bold">{character.rank}</Card.Subtitle>
      </Card.Body>

      <ListGroup className="list-group-flush">

        {character.title &&
          <ListGroup.Item>
            <strong>Title: </strong>{character.title}
          </ListGroup.Item>
        }

        <ListGroup.Item>
          <strong>Species: </strong>{character.species}
        </ListGroup.Item>
        
        <ListGroup.Item>
          <strong>Home World: </strong>{character.homeWorld}
        </ListGroup.Item>
        
        <ListGroup.Item>
          <strong>Affiliations: </strong>
          {character.affiliation.join(', ')}
        </ListGroup.Item>

      </ListGroup>

      <Card.Body>
        <Card.Text>
          "{character.description}"
        </Card.Text>
      </Card.Body>


          
      <Card.Body>
        <Button onClick={onNavigateBack}>Back</Button>
      </Card.Body>
          
    </Card>
  </div>
  </>
)
}