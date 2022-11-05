import { characters } from "../data/characters"

export const getCharacterById = (id) => {
    
    const character = characters.find(e => e.id === Number(id))

    return character
}