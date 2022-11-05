import { getCharactersBySide } from "../helpers"

import Row from 'react-bootstrap/Row';
import { useMemo } from "react";
import { CharacterCard } from "./CharacterCard";

export const CharacterList = ({side}) => {
  
    const character = useMemo(() => getCharactersBySide(side),[side])
  
    return (
    
        <Row xs={1} md={2} className="g-4 mb-3">
            {character.map((e) => (
                <CharacterCard key={e.id}{...e}/>
            ))}
        </Row>
    )
}