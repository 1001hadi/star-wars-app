import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Container, Table}  from 'react-bootstrap';
import Fetch from './Fetch';

function List() {
  const {data, loading, error} = Fetch("https://swapi.dev/api/people/");
  if(loading){
    return <h1>loading...</h1>
  }
  if(error) console.log(error);
  console.log(data);

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
                {data.results.map((charactor,index) => {
                    return (
                    <tr key={index}>
                      <td>{charactor.name}</td>
                      <td>{charactor.birth_year}</td>
                      <td>{charactor.height}cm</td>
                      <td>{charactor.mass === 'unknown' || charactor.mass + 'kg'}</td>
                      <td>{charactor.homeworld}</td>
                      <td>{charactor.species}</td>
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