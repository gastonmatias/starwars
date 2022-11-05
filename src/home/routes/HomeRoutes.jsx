import { Navigate, Route, Routes } from "react-router-dom"
import { Header } from "../../ui"
import { Home } from "../pages"

export const HomeRoutes = () => {
  return (
    <>
        <Header/>

        <div className="container">
            <Routes>
                <Route path="home" element={<Home/>}/>
                <Route path="*" element={<Navigate to='/home' />} />    
            </Routes>
        </div>
    </>
  )
}