import React from "react";
import { Card } from "./Card";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";

const url = "https://akabab.github.io/superhero-api/api/all.json";

export const Display = () => {
  const [heroData, setHeroData] = useState([]);
  const fetchHeros = async () => {
    try {
      const resp = await axios.get(url);
      setHeroData(resp);
    } catch (error) {
      console.log("error occured", error);
    }
  };

  useEffect(() => {
    fetchHeros();
  }, []);
  console.log(heroData);

    const fullList = heroData.data.map(({name, id, images, biography}) => {
      return (
        <>
          <Card
            key={id}
            image={images.lg}
            character={name}
            publisher={biography.publisher}
          />
        </>
      );
    });
  return (
    <div className="scroll-container">
      {/* name, id, images.lg, biography.publisher, biography.alignment */}
      {fullList}
    </div>
  );
};
// * API KEY: 6547873555272160
