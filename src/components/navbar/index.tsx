import { ChartBar, Gear } from "phosphor-react"
import React from "react"
import { NavLink } from "react-router-dom"
import "twin.macro"

const NavBar: React.FC = () => {
    return (
        <aside tw="w-64">
            <div tw="overflow-y-auto h-screen py-4 px-3 rounded-r bg-gray-800">
                <ul tw="space-y-2">
                    <li>
                        <NavLink to="/" tw="[&.active]:bg-gray-600 cursor-pointer flex items-center p-2 text-base font-normal  rounded-lg text-white hover:bg-gray-700">
                            <ChartBar size={32} />
                            <span tw="ml-3">Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin" tw="[&.active]:bg-gray-600 cursor-pointer flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700">
                            <Gear size={32} />
                            <span tw="ml-3">Configuração</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default NavBar