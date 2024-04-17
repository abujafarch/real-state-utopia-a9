import { useEffect, useState } from "react";
import Estate from "./Estate";

const Estates = () => {
    const [estates, setEstates] = useState([])

    useEffect(() => {
        fetch('properties.json')
            .then(res => res.json())
            .then(data => {
                setEstates(data)
            })
    }, [])

    return (
        <div className="lg:mt-24 md:mt-16 mt-10">
            <div className="flex justify-center md:mb-8 sm:mb-6 mb-4 lg:mb-10">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-center tracking-widest font-bebas text-[#F4A261]">Our <span className="text-[#2A9D8F]">Utopia</span> Estates</h1>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-9">
                {
                    estates.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
                }
            </div>
        </div>
    );
};

export default Estates;