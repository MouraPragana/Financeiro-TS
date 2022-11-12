import React from "react"
import { Outlet } from "react-router-dom"
import NavBar from "../../components/navbar"
import "twin.macro"

const DefaultLayout: React.FC = () => {
    return (
        <div tw="flex">
            <NavBar />
            <Outlet />
        </div>
    )
}

export default DefaultLayout