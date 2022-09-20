import { Routes, Route, Navigate } from "react-router-dom"
import { NavBar } from "../../design"
import { MarvelPage, DCPage, HeroPage, HomePage } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
        <NavBar />

        <Routes>
            <Route path="/*" element={<Navigate to="/home" />} />
            <Route path="home" element={<HomePage />} />

            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DCPage />} />

            <Route path="hero/:heroID" element={<HeroPage />} />
        </Routes>
    </>
  )
}
