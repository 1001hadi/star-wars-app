import 'bootstrap/dist/css/bootstrap.min.css';
import  {Container, Button}  from 'react-bootstrap';
import '..//App.css';

const Pagination = ({characters, pageNumber, setPageNumber, setCurPageUrrl,nextPageUrl, prevPageUrl}) => {
    const prevPageBtn = pageNumber > 1;
    const nextPageBtn = characters.length >= 10;
    
      const nextPages =  () => {
        if(nextPageUrl) {
          setCurPageUrrl(nextPageUrl);
          setPageNumber(pageNumber + 1);
        }
      };
    
      const prevPages = () => {
        if(prevPageUrl) {
          setCurPageUrrl(prevPageUrl);
          setPageNumber(pageNumber - 1);
        }
      }
  return (
    <Container>
      <div className='paginationBtn'>
        {prevPageBtn && <Button  onClick={prevPages}>Prev Page</Button>}
        <p className='currentPage'>Page No: {pageNumber}</p>
        {nextPageBtn && <Button onClick={nextPages}>Next page</Button>}
      </div>
    </Container>
  )
}

export default Pagination