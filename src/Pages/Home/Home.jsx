import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Cards from "../../Components/Cards/Cards";


const Home = () => {
    const [cards, setCards] = useState([])


        // const Cards = useLoaderData();
        // setCards(Cards);
        useEffect(()=>{
            fetch('/donation.json')
            .then(res=>res.json())
            .then(data=>setCards(data))
        },[])
        


    const handelSearchText = event => {
        event.preventDefault();

        const inputText = event.target.name.value

        const getsearchData = cards?.filter(card => card.category  === inputText)

        if (inputText !== '') {
            setCards(getsearchData)
        }

        event.target.name.value = '';
       
    }




    return (
        <div>
            <Banner handelSearchText={handelSearchText}></Banner>
            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;