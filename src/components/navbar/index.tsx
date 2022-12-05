import { ChartBar, Info, ArrowsLeftRight } from "phosphor-react";
import React from "react";
import { NavLink } from "react-router-dom";
import "twin.macro";

const NavBar: React.FC = () => {
  return (
    <>
      <aside tw="md:flex hidden flex-col justify-between min-w-[14rem] min-h-[100vh] bg-gray-800 rounded-r-xl">
        <div tw="overflow-y-auto py-4 px-3 rounded-r bg-gray-800">
          <ul tw="space-y-2">
            <li>
              <NavLink
                to="/"
                tw="[&.active]:bg-gray-600 cursor-pointer flex items-center p-2 text-base font-normal  rounded-lg text-white hover:bg-gray-700"
              >
                <ChartBar size={32} />
                <span tw="ml-3">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/financial"
                tw="[&.active]:bg-gray-600 cursor-pointer flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
              >
                <ArrowsLeftRight size={32} />
                <span tw="ml-3">Lançamentos</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                tw="[&.active]:bg-gray-600 cursor-pointer flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
              >
                <Info size={32} />
                <span tw="ml-3">Sobre Nós</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
      <div tw="md:hidden fixed flex items-center bottom-0 h-[5.8rem] bg-gray-800 w-[100%] overflow-auto py-4 px-3">
        <ul tw="space-x-2 flex flex-row mx-auto">
          <li>
            <NavLink
              to="/"
              tw="[&.active]:bg-gray-600 cursor-pointer flex items-center p-4 text-base font-normal rounded-lg text-white hover:bg-gray-700 min-w-[170px]"
            >
              <ChartBar size={28} />
              <span tw="ml-3">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/financial"
              tw="[&.active]:bg-gray-600 cursor-pointer flex items-center p-4 text-base font-normal rounded-lg text-white hover:bg-gray-700 min-w-[170px]"
            >
              <ArrowsLeftRight size={28} />
              <span tw="ml-3">Lançamentos</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              tw="[&.active]:bg-gray-600 cursor-pointer flex items-center p-4 text-base font-normal rounded-lg text-white hover:bg-gray-700 min-w-[170px]"
            >
              <Info size={28} />
              <span tw="ml-3">Sobre Nós</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
