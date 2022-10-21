import React, { useEffect, useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Container, Form, Button}  from 'react-bootstrap';
import axios from 'axios';

function Search({ setCurPageUrrl ,setCharacters, curPageUrrl, setPageNumber}) {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setCurPageUrrl(`https://swapi.dev/api/people/?search=${searchInput}`)

    axios.get(curPageUrrl)
    .then(response => {
      setCharacters(response.data.results)
    })
    .catch(error => {
        console.log(error)
    })
  }, [searchInput]);

  const validSearch = search.length > 0;

  const handleSearch = (e) => setSearch(e.target.value);

  const handleSubmit = () => {
    setSearchInput(search);
    setPageNumber(1)
    setSearch("");
  };

  const clearSearch = () => {
    setSearch("");
    setCurPageUrrl(curPageUrrl);
  }

  return (
    <div style={{marginTop: 30}}>
        <Container>
            <Form responsive="md">
                <div className="search">
                    <Form.Control type='text' value={search} placeholder='Search your favorite characters here...' onChange={handleSearch}/>
                    {validSearch && <Button variant="warning" size='lg' onClick={clearSearch}>Clear</Button>}
                    <Button variant="secondary" size='lg' onClick={handleSubmit}>Search</Button>
                </div>
            </Form>
        </Container>
    </div>
  )
}

export default Search