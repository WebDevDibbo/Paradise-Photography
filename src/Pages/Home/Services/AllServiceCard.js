import { useEffect, useState } from "react";
import Card from "./Card";


const AllServiceCard = () => {
    const [allCard,setAllCard] = useState([]);
    useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setAllCard(data))
    },[])
    return (
        <div className="mb-6">
            <h2 className="text-3xl text-center text-primary font-bold pt-10 pb-16">All Services</h2>
            <div className="grid grid-cols-3 gap-12">
            {
                allCard.map(singleCard => <Card key={singleCard._id} 
                singleCard = {singleCard}
                ></Card> )
            }
            </div>
        </div>
    );
};

export default AllServiceCard;