import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { update_member_action } from "../redux/actions";
import {
  Col,
  Container,
  FormControl,
  Form,
  Row,
  Button,
} from "react-bootstrap";

function EditMember() {
  const [state, setState] = useState({
    id: "",
    name: "",
    lastName: "",
    userName: "",
    idNumber: "",
    phone: "",
    email: "",
    address: "",
    age: "",
    memberSince: "",
  });
  const edit = useSelector((state) => state.edit);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (edit) {
      setState(edit);
    }
  }, [edit]);

  return (
    <Container>
      <Row>
        <Col md={{ span: 10, offset: 1 }} className="mt-3">
          <h1 className="text-center text-light h1">Edit Member</h1>

          <Form.Group>
            <FormControl
              onChange={(e) => setState({ ...state, name: e.target.value })}
              type="text"
              className="form-control tab"
              value={state.name || " * enter Name"}
            />
            <br />
            <FormControl
              onChange={(e) => setState({ ...state, lastName: e.target.value })}
              type="text"
              className="form-control tab"
              value={state.lastName || " * enter Last Name"}
            />
            <br />
            <FormControl
              onChange={(e) => setState({ ...state, userName: e.target.value })}
              type="text"
              className="form-control tab"
              value={state.userName || " * enter User Name"}
            />
            <br />
            <FormControl
              onChange={(e) => setState({ ...state, idNumber: e.target.value })}
              type="text"
              className="form-control tab"
              value={state.idNumber || " * enter id Number"}
            />
            <br />
            <FormControl
              onChange={(e) => setState({ ...state, phone: e.target.value })}
              type="text"
              className="form-control tab"
              value={state.phone || " * enter Phone"}
            />
            <br />
            <FormControl
              onChange={(e) => setState({ ...state, email: e.target.value })}
              type="text"
              className="form-control tab"
              value={state.email || " * enter Email"}
            />
            <br />
            <FormControl
              onChange={(e) => setState({ ...state, address: e.target.value })}
              type="text"
              className="form-control tab"
              value={state.address || " * enter Address"}
            />
            <br />
            <FormControl
              onChange={(e) => setState({ ...state, age: e.target.value })}
              type="text"
              className="form-control tab"
              value={state.age || " * enter Age"}
            />
            <br />
            <FormControl
              onChange={(e) =>
                setState({ ...state, memberSince: e.target.value })
              }
              type="text"
              className="form-control tab"
              value={state.memberSince || " * enter Member Since"}
            />
            <br />
            <Button
              to="/"
              onClick={(e) => {
                e.preventDefault();
                dispatch(update_member_action(edit.id, state));
                history.push("/");
              }}
              className="btn btn-secondary form-control tab"
            >
              Update
            </Button>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}

export default EditMember;
