import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import ChatBot from "../../components/ChatBot/ChatBot.jsx";

const Home = () => {
  const [category, setCategory] = useState("All");
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://my-backend-ono8.onrender.com/api/food")
      .then((res) => {
        setFoodData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch food data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <ExploreMenu setCategory={setCategory} category={category} />
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading food data...</p>
      ) : (
        <FoodDisplay category={category} foodData={foodData} />
      )}
      <AppDownload />
      <ChatBot />
    </>
  );
};

export default Home;
