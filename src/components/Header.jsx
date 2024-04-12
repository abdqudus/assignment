import { useState } from "react"
import { Link } from "react-router-dom"

const Header = ({ children }) => {
    const [isMenuHidden, setIsMenuHidden] = useState(true)
    return (
        <nav className="flex z-50 bg-inherit p-4 md:px-12 md:py-6 fixed w-full top-0 left-0 right-0 justify-between items-center">
            <div className="dark:hidden" >
                <Link to='/'>
                    <img src="/ic_logo.svg" />
                </Link>
            </div>
            <div className="hidden dark:block" >
                <Link to='/'>
                    <img src="/logo-dark.svg" />
                </Link>
            </div>
            {children}
            <div className=" flex justify-center items-center gap-2">
                <p className="text-[#101012] hidden vlg:block text-[1rem] font-medium">Welcome</p>
                <div className="w-[36px] h-[36px] rounded-full relative">

                    <img onClick={() => setIsMenuHidden(!isMenuHidden)} src="/dp.png" width='36' height='36' className="rounded-full cursor-pointer lg:hidden" alt="profile picture" />
                    <Link to='/reviews'>
                        <img src="/dp.png" width='36' height='36' className="rounded-full hidden lg:block cursor-pointer" alt="profile picture" />
                    </Link>
                    {!isMenuHidden && <div className="absolute w-[103px] right-[20px] bg-[#FAFCFD] border border-[#808080] rounded-[10px]">
                        <button className="p-2 w-full text-left rounded-tl-[10px] rounded-tr-[10px]  text-[1rem] leading-[19.36px] hover:bg-[#F3F7FE] cursor-pointer border-b">Profile</button>
                        <Link to='/reviews'>
                            <button className="p-2 w-full text-left border-b leading-[19.36px] hover:bg-[#F3F7FE] cursor-pointer">Reviews</button>
                        </Link>
                        <button className="p-2  w-full text-left rounded-bl-[10px] rounded-br-[10px] leading-[19.36px] hover:bg-[#F3F7FE] cursor-pointer">Logout</button>
                    </div>}
                </div>
            </div>
        </nav>
    )
}

export default Header
