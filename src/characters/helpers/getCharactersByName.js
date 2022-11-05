import {characters} from '../data/characters'

export const getCharactersByName = (name='') => {
    
    name = name.toLocaleLowerCase().trim()
    
    if(name.length === 0) return [];

    return characters.filter((e) =>  e.name.toLocaleLowerCase().includes(name))

}