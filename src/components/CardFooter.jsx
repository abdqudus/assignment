
const CardFooter = () => {
    return (
        <footer className="flex justify-between items-center">
            <div className="flex gap-2 items-center ">
                <div className="flex gap-1  w-[33px] h-[14px] items-center">
                    <img src="/thumbs-up.svg" alt="like" />
                    <p className=" text-[.625rem]  mt-[.1rem]">24</p>
                </div>
                <div className="flex gap-1 w-[33px] items-center h-[14px] text-[.625rem]">
                    <img src="/thumbs-down.svg" className="mt-1" alt="Thumb down" />
                    <p className="mt-[.1rem]">02</p>
                </div>
                <div className="flex gap-1 w-[33px] items-center  h-[14px] text-[.625rem]" >
                    <img src="/message.svg" className="mt-1" alt="Comments" />
                    <p className="mt-[.1rem]">125</p>
                </div>
            </div>
            <div>
                <p className="w-[52px] flex justify-center items-center text-[#ad307b] text-[.5625rem] h-[14px] rounded-full border border-[#AD307B] bg-[#FCDCEF]">network</p>
            </div>
        </footer>
    )
}

export default CardFooter
