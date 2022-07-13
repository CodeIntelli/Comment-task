import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { clearErrors, loadComment } from "../Action/commentActions";
import { Col, Container, Row } from "react-bootstrap";
import "./LoadingSpinned.css";
const LoadComment = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState("");

  const { comments, error, loading } = useSelector((state) => state.comment);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(loadComment());
  }, [dispatch, error]);
  const handleClick = (id) => {
    const result =
      comments &&
      comments.filter((newData) => {
        return newData.id === id;
      });
    setState(result);
  };
  return (
    <>
      <Container>
        <Row>
          <h1 className="d-flex justify-content-center align-items-center m-5">
            JSONPlaceHolder API Call Using Redux
          </h1>
          {loading ? (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100vw",
                  height: "80vh",
                }}
              >
                <div className="lds-ellipsis">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </>
          ) : (
            <>
              {comments &&
                comments.map((data, index) => {
                  return (
                    <Col xl={4} lg={4} md={8} sm={12} key={index}>
                      <Card className="mt-5">
                        <Card.Header as="h5">
                          <p
                            style={{ cursor: "pointer" }}
                            onClick={() => handleClick(data.id)}
                          >
                            {data.name}
                          </p>
                        </Card.Header>
                        <Card.Body>
                          <Card.Title>
                            <p
                              style={{ cursor: "pointer" }}
                              onClick={() => handleClick(data.id)}
                            >
                              {data.email}
                            </p>
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
            </>
          )}
        </Row>
      </Container>

      <div>
        {state &&
          state.map((data, i) => {
            return (
              <div
                style={{
                  position: "absolute",
                  right: "20px",
                  bottom: "20px",
                  transition: "all 1s ease-in",
                }}
                key={i}
              >
                <Card
                  bg="dark"
                  key="dark"
                  text="white"
                  style={{ width: "18rem" }}
                  className="mb-2"
                >
                  <Card.Header>{data.name}</Card.Header>
                  <Card.Body>
                    <Card.Title>{data.email} </Card.Title>
                    <Card.Text>{data.body}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default LoadComment;
