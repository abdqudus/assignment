import { Outlet } from 'react-router-dom'

const MainPage = () => {
    return (
        <div className="bg-[#fafcfd] dark:bg-[#18181B] min-h-[100vh] " >

            <Outlet />

        </div>
    )
}

export default MainPage
