import { useState } from "react"
import Card from "./Card"
import { places } from "../data"
import { Link } from "react-router-dom"
import Form from "./Form"
import Input from "./Input"
import Header from "./Header"

const Home = () => {

    if (!localStorage.getItem('places')) {
        localStorage.setItem('places', JSON.stringify(places))
    }
    const [address, setAddress] = useState('')
    const [suggestion, setSuggestion] = useState([])
    const fetchData = (e) => {
        const places = JSON.parse(localStorage.getItem('places'))
        const place = places.filter(p => p.name.toLowerCase().includes(e.target.value.toLowerCase()))
        return place;
    };

    const handleChange = (e) => {
        setAddress(e.target.value);
        const result = fetchData(e);
        if (result) {
            setSuggestion(result);
        }
    };

    return (
        <div className="bg-[#fafcfd] dark:bg-[#18181B] p-4 vlg:px-12 py-6 h-[100vh] overflow-hidden" >
            <Header />
            <div className="h-screen flex justify-center items-center vlg:flex ">

                <div className="-mt-8 h-full  flex-grow ">
                    <div className="flex flex-col justify-center h-full ">
                        <div className="intro text-[#1E1E1E] dark:text-[#E6E6E6] md:max-w-[557px] ">
                            <h1 className="font-bold leading-12 text-[2.5rem]">Find a place you
                                will love to live!</h1>
                            <p className="text-[1rem] !leading-[25.6px]">See through the lenses of people who have
                                lived or visited the neighbourhood you might
                                have in mind.</p>
                        </div>
                        <Form address={address} handleChange={handleChange}>
                            <Input address={address} handleChange={handleChange} />
                            <div className={`w-full ${address && suggestion.length > 0 ? '' : 'hidden'} absolute left-0 top-[50px] rounded-[6px] bg-[#d4dcf1] flex flex-col gap-4   p-4`}>
                                {suggestion.map(s => (
                                    <Link to={`location/${s.name}`} key={s.name} >
                                        <p className="cursor-pointer" >{s.name}</p>
                                    </Link>
                                ))}

                            </div>
                        </Form>
                    </div>

                </div>
                <div className=" py-4 hidden vlg:basis-[506px] vlg:flex gap-4 mask overflow-hidden dark:bg-black bg-[#f0f2f3]">
                    <div className="flex gap-4 flex-wrap">

                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home
