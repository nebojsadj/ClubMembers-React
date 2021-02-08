import React from "react";
import Member from "./Member";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";

function ClubMembers() {
  const members = useSelector((state) => state.members);

  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }} xs={{ span: 12 }} className="mt-3">
          <h1 className="text-center text-light h1">Club Members</h1>
          <table className="table mt-4">
            <thead>
              <tr className="text-light">
                <th className="tab">#</th>
                <th className="tab">Name</th>
                <th className="tab">UserName</th>
                <th className="tab">Email</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <Member member={member} key={index} />
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
}

export default ClubMembers;
