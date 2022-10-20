import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Container, Table}  from 'react-bootstrap';
// import Fetch from './Fetch';
import ReactPaginate from 'react-paginate';
import '..//App.css';

function List() {
  const [characters, setCharacters] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

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
      const response = await axios.get("https://swapi.dev/api/people/");
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
  },[]);
// Pagination
  const getPages = async (page) => {
    const response = await fetch(`https://swapi.dev/api/people/&page=${page}`);
    const data = await response.json();
    return data;
  }

  const charsPerPage = 10;
  const visitedPage = pageNumber * charsPerPage;
  const pageCount = Math.ceil(characters.length / charsPerPage);
  const changePage = ({selected}) => setPageNumber(selected);
  const displayChars = characters.slice(visitedPage, visitedPage + charsPerPage)
  .map((character,index) => {
    return (
    <tr key={index}>
      <td>{character.name}</td>
      <td>{character.birth_year}</td>
      <td>{character.height}cm</td>
      <td>{character.mass === 'unknown' || character.mass + 'kg'}</td>
      <td>{character.homeworldName}</td>
      <td>{character.speciesName}</td>
    </tr>
    )}
  );

  const handleBtns = async (data) => {
    let currentPage = data.selected + 1;
    const pageFromApi = await getPages(currentPage);
    
    setCharacters(pageFromApi);
  }

  return (
    <div>
        <Container style={{marginTop: 30}}>
          <Table responsive="md" striped bordered hover size="md" variant="dark">
             <thead>
                <tr>
                  <th>Name</th>
                  <th>Birth Date</th>
                  <th>Height</th>
                  <th>Mass</th>
                  <th>Home World</th>
                  <th>Species</th>
                </tr>
              </thead>
              <tbody>
                {displayChars}
              </tbody>
          </Table>
          <ReactPaginate
                  previousLable={"PrevPage"}
                  nectLable={"NextPage"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationBtn"}
                  previousLinkClassName={"prevBtn"}
                  nextLinkClassName={"nextBtn"}
                  disabledClassName={"disabledBtn"}
                  activeClassName={"activedBtn"}
                  onClick={handleBtns}
                />
        </Container>
    </div>
  )
}

export default List