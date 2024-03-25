import { Col, Row, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Job from "./Job";

const Favorities = () => {
  const jobsFavorities = useSelector((state) => {
    return state.favorities.content;
  });

  const dispatch = useDispatch();

  const deleteFromFavorites = (jobData) => {
    dispatch({
      type: "DELETE_FROM_FAVORITIES",
      payload: jobData,
    });
  };

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: "none" }}>
          {jobsFavorities.map((job, i) => (
            <li key={i} className="my-4">
              <Job data={job} />
              <Button variant="danger" onClick={() => deleteFromFavorites(job)}>
                DELETE
              </Button>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export default Favorities;
