import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Container, Table}  from 'react-bootstrap';
// import axios from 'axios';
import Fetch from './Fetch';


function List() {
  const characters = Fetch("https://swapi.dev/api/people/");

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
                {characters.map((character,index) => {
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
                )}
              </tbody>
          </Table>
        </Container>
    </div>
  )
}

export default List