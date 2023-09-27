import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Card";
import Cards from "../../Components/Cards/Cards";

const Home = () => {
  const data = useLoaderData();
  const [displayCards, setDisplayCards] = useState([...data]);

  const handelSearchText = (e) => {
    let input = e.target.value.toLowerCase();
    const getSearchData = data?.filter((card) =>
      card.category.toLowerCase().startsWith(input)
    );
    setDisplayCards(getSearchData);
  };

  return (
    <div>
      <Banner handelSearchText={handelSearchText}></Banner>
      <Cards displayCards={displayCards}></Cards>
    </div>
  );
};

export default Home;
