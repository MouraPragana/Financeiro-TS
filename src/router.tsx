import React from "react"
import DefaultLayout from "./layout/defaultLayout"
import { Routes, Route } from "react-router-dom"

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<>Home</>} />
                <Route path="/admin" element={<>Configuração</>} />
                <Route path="/about" element={<>Sobre nós</>} />
            </Route>
        </Routes>
    )
}

export default Router