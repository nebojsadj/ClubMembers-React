import React from "react";
import Member from "./Member";
import { useSelector } from "react-redux";
import { Col, Container, Row, Table } from "react-bootstrap";

function Actions() {
  const members = useSelector((state) => state.members);

  return (
    <Container>
      <Row>
        <Col
          md={{ span: 8, offset: 2 }}
          xs={{ span: 12 }}
          className="mt-3 actHolder"
        >
          <h1 className="text-center text-light mx-auto h1">Actions</h1>
          <Table striped hover size="sm" className="table mt-4">
            <thead>
              <tr className="text-light">
                <th className="tab">#</th>
                <th className="tab">Name</th>
                <th className="tab">UserName</th>
                <th className="tab">Email</th>
                <th className="tab">Info</th>
                <th className="tab">Edit</th>
                <th className="tab">Delete</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <Member member={member} key={index} buttons={true} />
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Actions;
