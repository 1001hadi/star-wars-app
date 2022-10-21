import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Container}  from 'react-bootstrap';

function Header() {
  return (
    <div className='header' style={{margin: 20}}>
        <Container responsive="md">
            <h2>Collect Info of Your Favorite Star Wars Characters.</h2>
        </Container>
    </div>
  )
}

export default Header