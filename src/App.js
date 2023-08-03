import "./App.css";
import tachyons from "tachyons";
import InfiniteScroll from "react-infinite-scroll-component";
import { SearchBar } from "./components/SearchBar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Card } from "./components/Card";

function App() {
  // state
  const [search, setSearch] = useState("");
  const [heroData, setHeroData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  // onChange
  const onSearchChange = (e) => {
    setSearch(e.target.value);
   setFilteredData(heroData.data.filter((item) => {
      return Object.values(item.name).join(' ').toLowerCase().includes(search.toLowerCase())
    }))
  };
  console.log(search);

  // fetching API data
  const url = "https://akabab.github.io/superhero-api/api/all.json";
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
  console.log(heroData.data);

  // setting filtered data
  // const filterCards = () => {
  //   return Object.values()
  // }

  

  return (
    <div className="App">
      {/* SEARCHBAR */}
      <SearchBar onChange={onSearchChange} />

      {/* DISPLAY */}
      <InfiniteScroll
        dataLength={10}
        height="40rem"
        style={{ width: "90vw", border: "solid 1px lime" }}
      >
        <>
          <div className="scroll-container">
            {/* name, id, images.lg, biography.publisher, biography.alignment */}
            {heroData.data && search.length > 0 ? (
           
            <h1>Looking to fix undefined and object errors</h1>
            ) : heroData.data ? (
              heroData.data.map(({ name, id, images, biography }) => {
                return (
                  <>
                    <Card
                      key={id}
                      image={images.lg}
                      character={name}
                      publisher={biography.publisher}
                      alignment={biography.alignment}
                    />
                  </>
                );
              })
            ) : (
              <h1>Loading</h1>
            )}
          </div>
        </>
      </InfiniteScroll>
    </div>
  );
}

export default App;

/*
const [search, setSearch] = useState('');

const onSearchChange = (e) => {
    setSearch(e.target.value);
}
console.log(search); 
*/
