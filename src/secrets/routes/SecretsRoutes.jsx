import { Navigate, Route, Routes } from "react-router-dom"
import { Header } from "../../ui"
import { SecretsPage } from "../pages/SecretsPage"

export const SecretsRoutes = () => {
  return (
    <>
        <Header/>
        <div className="container">
            <Routes>
                <Route path="/" element={<SecretsPage/>}/>
            </Routes>
        </div>
    </>
  )
}