import { Col, Row, Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Job from "./Job";
import { Link } from "react-router-dom";

const Favorities = () => {
  const jobsFavorities = useSelector((state) => {
    return state.favorities.content;
  });

  return (
    <Container>
      <Row className="justify-content-center align-items-center p-5">
        <Col xs={10} className="text-center">
          <h1>YOUR FAVORITE</h1>
        </Col>
        <Col xs={2}>
          <Link to={`/`}>
            <Button className="btn-success fw-bold">HOME</Button>
          </Link>
        </Col>
        <Col sm={12}>
          <ul style={{ listStyle: "none" }}>
            {jobsFavorities.map((job, i) => (
              <li key={i} className="my-4">
                <Job data={job} />
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Favorities;
