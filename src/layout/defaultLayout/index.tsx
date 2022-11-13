import React from "react"
import { Outlet } from "react-router-dom"
import NavBar from "../../components/navbar"

const DefaultLayout: React.FC = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    )
}

export default DefaultLayout