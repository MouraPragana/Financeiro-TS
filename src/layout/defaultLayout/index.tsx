import { Outlet } from "react-router-dom"

const DefaultLayout: React.FC = () => {
    return (
        <>
            <div>Default Layout</div>
            <Outlet />
        </>
    )
}

export default DefaultLayout