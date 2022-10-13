import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Container, Form, Button}  from 'react-bootstrap';

function Search() {
  return (
    <div style={{marginTop: 30}}>
        <Container>
            <Form responsive="md">
                <div className="search">
                    <Form.Control type='text' placeholder='Search your favorite character'/>
                    <Button variant="secondary" size='lg' >Search</Button>
                </div>
            </Form>
        </Container>
    </div>
  )
}

export default Search