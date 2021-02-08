import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function MoreInfo() {
  const info = useSelector((state) => state.info);
  const history = useHistory();

  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }} xs={{ span: 12 }} className="mt-3">
          <h1 className="text-center text-light h1">More Information</h1>
          {info && (
            <ul className="list-group">
              <li className="list-group-item libg tab">{`Id : ${info.id}`}</li>
              <li className="list-group-item libg tab">{`Name : ${info.name}`}</li>
              <li className="list-group-item libg tab">{`Last name : ${info.lastName}`}</li>
              <li className="list-group-item libg tab">{`User name : ${info.userName}`}</li>
              <li className="list-group-item libg tab">{`ID number : ${info.idNumber}`}</li>
              <li className="list-group-item libg tab">{`Phone : ${info.phone}`}</li>
              <li className="list-group-item libg tab">{`Email : ${info.email}`}</li>
              <li className="list-group-item libg tab">{`Address : ${info.address}`}</li>
              <li className="list-group-item libg tab">{`Age : ${info.age}`}</li>
              <li className="list-group-item libg tab">{`Member since : ${info.memberSince}`}</li>
            </ul>
          )}
          <Button
            onClick={() => history.push("/actions")}
            variant="secondary"
            className="mt-3 form-control tab"
          >
            Back
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default MoreInfo;
