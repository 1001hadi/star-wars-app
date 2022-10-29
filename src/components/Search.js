import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

function Search({ setCurPageUrl, setCharacters, curPageUrl, setPageNumber }) {
  const [search, setSearch] = useState("");

  const validSearch = search.length > 0;

  const handleSearch = (e) => setSearch(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurPageUrl(`https://swapi.dev/api/people/?search=${search}`);
    axios
      .get(curPageUrl)
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
    setPageNumber(1);
    setSearch("");
  };

  const clearSearch = (e) => {
    e.preventDefault();
    setSearch("");
    setCurPageUrl(curPageUrl);
  };

  return (
    <div style={{ marginTop: 30 }}>
      <Container>
        <Form responsive="md" onSubmit={handleSubmit}>
          <div className="search">
            <Form.Control
              type="text"
              value={search}
              placeholder="Search your favorite characters..."
              onChange={handleSearch}
            />
            {validSearch && (
              <Button variant="warning" size="lg" onClick={clearSearch}>
                Clear
              </Button>
            )}
            <Button type="submit" variant="secondary" size="lg">
              Search
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default Search;
