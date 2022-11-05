import {characters} from '../data/characters'

export const getCharactersBySide = (side) => {

    const validSides = ['Dark', 'Light'];

    if (!validSides.includes(side)) {
        throw new Error(`${side} is not a valid side!`)
    }

    // retorna personajes ya del lado oscuro o lado luminoso, pasado x params
    return characters.filter((e) => e.side === side)
}
