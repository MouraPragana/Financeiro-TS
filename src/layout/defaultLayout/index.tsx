import React from "react"
import { Outlet } from "react-router-dom"
import NavBar from "../../components/navbar"
import "twin.macro"

const DefaultLayout: React.FC = () => {
    return (
        <div tw="flex flex-row">
            <NavBar />
            <Outlet />
        </div>
    )
}

export default DefaultLayout