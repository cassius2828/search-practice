import React from "react";
import { Card } from "./Card";
import '../App.css'
import { useEffect, useState } from "react";
import axios from 'axios';



export const Display = () => {
      const [heroData, setHeroData] = useState([]);

      // * API KEY: 6547873555272160
      const fetchHeros = async () => {
        try {
          const resp = await axios.get(
            "https://akabab.github.io/superhero-api/api/all.json"
          );
          setHeroData(resp);
        } catch (error) {
          console.log( 'error occured', error);
        }
      };

      useEffect(() => {
        fetchHeros();
      }, []);
    //   console.log(heroData.data[34])

      const fullList = heroData.data.map((name, id, images, biography) => {
        return (
          <>
            <Card key={id} image={images.lg} character={name} publisher={biography.publisher} />
          </>
        );
      })
  return (
    <div className="scroll-container">
        {/* name, id, images.lg, biography.publisher, biography.alignment */}
        {/* {heroData.data[34] ? fullList : <h1>APi wont retreive rn </h1>} */}
        {fullList}
      
    </div>
  );
};
