import CardBody from "./CardBody"
import CardFooter from "./CardFooter"
import CardHeader from "./CardHeader"

const Card = () => {
    return (
        <div className="w-[239px] p-4 h-[233px] rounded-[15px] dark:bg-black dark:text-[#E6E6E6] bg-white">
            <CardHeader />
            <CardBody />
            <CardFooter />
        </div>
    )
}

export default Card
