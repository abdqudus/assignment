
const CardHeader = () => {
    return (
        <header className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <img src="/dp2.png" alt="" className="w-[20px] h-[20px] rounded-full" />
                <p className="flex flex-col">
                    <span className="block text-[.5rem]">James T</span>
                    <span className="block text-[.5rem]" >5 months ago</span>
                </p>
            </div>
            <div>
                <p className="text-[.75rem] font-medium">Ikate, Lekki</p>
                <div className="flex ">
                    <img src="/star-c.png" alt="" />
                    <img src="/star-c.png" alt="" />
                    <img src="/star-c.png" alt="" />
                    <img src="/star.png" alt="" />
                    <img src="/star.png" alt="" />
                </div>
            </div>
        </header>
    )
}

export default CardHeader
