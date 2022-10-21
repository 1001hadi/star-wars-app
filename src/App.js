import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header.js'
import List from './components/List';
import Search from './components/Search';
import Pagination  from './components/Pagination';

function App() {
  const baseUrl = "https://swapi.dev/api/people/?page=1";
  const [characters, setCharacters] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [curPageUrrl, setCurPageUrrl] = useState(baseUrl);
  const [prevPageUrl, setPrevPageUrl] = useState('');
  const [nextPageUrl, setNextPageUrl] = useState('');

  const getHomeworld = async(homeworldUrl) => {
    const data = await fetch(homeworldUrl).then((response) => response.json());
    return data.name;
  }
  
  const getSpecies = async (speciesUrl) => {
      const data = await fetch(speciesUrl).then((response) => response.json());
      return data.name;
  }

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(curPageUrrl);

      setPrevPageUrl(response.data.previous);
      setNextPageUrl(response.data.next);

      const chars = response.data.results;
      
      for(let char of chars) {
        char.homeworldName = await getHomeworld(char.homeworld);
       
        if(char.species.length){
          char.speciesName = await getSpecies(char.species);
        } else {
          char.speciesName = 'Human';
        }
      }
      setCharacters(chars);
    }
    getData();
  },[curPageUrrl]);

  return (
    <div className="App">
      <Header/> 
      <Search
       setCharacters={setCharacters}
       setCurPageUrrl={setCurPageUrrl}
       curPageUrrl={curPageUrrl}
       setPageNumber={setPageNumber}
      />
      <List characters={characters}/>
      <Pagination
        characters={characters}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        setCurPageUrrl={setCurPageUrrl}
        nextPageUrl={nextPageUrl}
        prevPageUrl={prevPageUrl}
      />
    </div>
  );
}

export default App;