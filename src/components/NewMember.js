import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { new_member_action } from "../redux/actions";
import { Col, Container, FormControl, Row } from "react-bootstrap";

function NewMember() {
  const [member, setMember] = useState({});
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }} xs={{ span: 12 }} className="mt-3">
          <h1 className="text-center text-light h1">New Member</h1>
          <FormControl
            onChange={(e) => setMember({ ...member, id: e.target.value })}
            type="text"
            placeholder="Id"
            className="form-control tab"
          />
          <br />
          <FormControl
            onChange={(e) => setMember({ ...member, name: e.target.value })}
            type="text"
            placeholder="Name"
            className="form-control tab"
          />
          <br />
          <FormControl
            onChange={(e) => setMember({ ...member, lastName: e.target.value })}
            type="text"
            placeholder="Last name"
            className="form-control tab"
          />
          <br />
          <FormControl
            onChange={(e) => setMember({ ...member, userName: e.target.value })}
            type="text"
            placeholder="User name"
            className="form-control tab"
          />
          <br />
          <FormControl
            onChange={(e) => setMember({ ...member, idNumber: e.target.value })}
            type="text"
            placeholder="ID number"
            className="form-control tab"
          />
          <br />
          <FormControl
            onChange={(e) => setMember({ ...member, phone: e.target.value })}
            type="text"
            placeholder="Phone"
            className="form-control tab"
          />
          <br />
          <FormControl
            onChange={(e) => setMember({ ...member, email: e.target.value })}
            type="text"
            placeholder="Email"
            className="form-control tab"
          />
          <br />
          <FormControl
            onChange={(e) => setMember({ ...member, address: e.target.value })}
            type="text"
            placeholder="Address"
            className="form-control tab"
          />
          <br />
          <FormControl
            onChange={(e) => setMember({ ...member, age: e.target.value })}
            type="text"
            placeholder="Age"
            className="form-control tab"
          />
          <br />
          <FormControl
            onChange={(e) =>
              setMember({ ...member, memberSince: e.target.value })
            }
            type="text"
            placeholder="Member since"
            className="form-control tab"
          />
          <br />
          <Link
            to="/"
            onClick={() => dispatch(new_member_action(member))}
            className="btn btn-secondary form-control tab"
          >
            Save
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default NewMember;
