import axios from 'axios'
import {useEffect, useState} from 'react'

function Fetch(url) {
  const [characters, setCharacters] = useState([]);

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
      const response = await axios.get(url);
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
  },[url]);
  return characters;
}

export default Fetch