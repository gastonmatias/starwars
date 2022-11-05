import { Navigate, Route, Routes } from 'react-router-dom'

import {Header} from '../../ui'
import { SithPage, JediPage, SearchPage, CharacterPage } from '../pages'

export const CharactersRoutes = () => {
  return (
    <>
        <Header/>

        <div className='container'>
            <Routes>
                <Route path="jedi" element={<JediPage />} />
                <Route path="sith" element={<SithPage />} />    
                <Route path="/:characterId" element={<CharacterPage/>} />    
                <Route path="search" element={<SearchPage />} />    
                <Route path="*" element={<Navigate to='/characters/jedi' />} />    
            </Routes>
        </div>
    </>
  )
}