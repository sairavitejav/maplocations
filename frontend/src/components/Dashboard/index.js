import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  DashboardContainer,
  DashboardHeader,
  DashboardDescription,
  CardsContainer,
} from "./styledComponents";
import Header from "../Header";
import LocationCardItems from "../LocationCardItems";

const Dashboard = () => {
  const [cardsList, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchCardsList = async () => {
      const jwtToken = Cookies.get("jwtToken");
      const apiUrl = "http://localhost:5000/api/dashboard/";
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };
      const response = await fetch(apiUrl, options);
      if (response.ok === true) {
        const data = await response.json();
        setCards(data.cards);
      } else {
        alert("User not logged in");
      }
      setIsLoading(false);
    };
    fetchCardsList();
  }, []);
  return (
    <>
      <Header />
      <DashboardContainer>
        <DashboardHeader>Famous Locations in India</DashboardHeader>
        <DashboardDescription>
          Click on the Loaction Card to Open Detailed Map View
        </DashboardDescription>
        {isLoading ? (
          <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
        ) : (
          <CardsContainer>
            {cardsList.map((card) => (
              <LocationCardItems key={card.id} locationsCard={card} />
            ))}
          </CardsContainer>
        )}
      </DashboardContainer>
    </>
  );
};
export default Dashboard;
