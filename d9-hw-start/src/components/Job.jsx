import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const jobsFavorities = useSelector((state) => state.favorities.content);

  const isJobInFavorites = jobsFavorities.some((job) => job._id === data._id);

  const addToFavorites = (jobData) => {
    dispatch({
      type: "ADD_TO_FAVORITIES",
      payload: jobData,
    });
  };

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col>
        {!isJobInFavorites && (
          <Button className="d-flex align-items-center" onClick={() => addToFavorites(data)}>
            <span className="me-2">ADD TO FAV</span>
          </Button>
        )}
      </Col>
    </Row>
  );
};

export default Job;
