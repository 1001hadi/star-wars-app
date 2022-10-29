import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import "..//App.css";

const Pagination = ({
  characters,
  pageNumber,
  setPageNumber,
  setCurPageUrl,
  nextPageUrl,
  prevPageUrl,
}) => {
  const prevPageBtn = pageNumber > 1;
  const nextPageBtn = characters.length >= 10;

  const nextPages = () => {
    if (nextPageUrl) {
      setCurPageUrl(nextPageUrl);
      setPageNumber(pageNumber + 1);
    }
  };

  const prevPages = () => {
    if (prevPageUrl) {
      setCurPageUrl(prevPageUrl);
      setPageNumber(pageNumber - 1);
    }
  };

  const prevBtn = prevPageBtn && <Button onClick={prevPages}>Prev Page</Button>;
  const nextBtn = nextPageBtn && <Button onClick={nextPages}>Next page</Button>;

  return (
    <Container>
      <div className="paginationBtn">
        {prevBtn}
        <p className="currentPage">Page No: {pageNumber}</p>
        {nextBtn}
      </div>
    </Container>
  );
};

export default Pagination;
