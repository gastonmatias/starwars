import { Navigate, Route, Routes } from "react-router-dom"

import {LoginPage} from "../auth"
import {CharactersRoutes} from "../characters"
import { HomeRoutes } from "../home"
import { SecretsRoutes } from "../secrets"
import { Welcome } from "../ui"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

const AppRouter = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/home/*" element={<HomeRoutes/>}/>
        <Route path="/characters/*" element={<CharactersRoutes/>}/>
        
        <Route path="login" element={
          <PublicRoute>
            <LoginPage/>
          </PublicRoute>
        }/>

        <Route path="secrets/*" element={
          <PrivateRoute>
            <SecretsRoutes/>
          </PrivateRoute>
        }/>
        
      
      </Routes>
    </>
  )
}
export default AppRouter