import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import CircleButton from "../UI/CircleButton";
import profileImage from "../assets/profile-img.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "../UI/Card";
import { buttonStyles } from "../UI/Button";

import {
  retirementAgeScreen,
  annualSalaryScreenRequest,
} from "../API/Endpoints.js";

const HomeComponent = (props) => {
  const navigate = useNavigate();

  const [enteredRetirementAge, setEnteredRetirementAge] = useState(0);
  const [enteredAnnualSalary, setEnteredAnnualSalary] = useState(0);

  const retirementAgeChangeHandler = (event) => {
    setEnteredRetirementAge(event.target.value);
  };
  const annualSalaryChangeHandler = (event) => {
    setEnteredAnnualSalary(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!enteredRetirementAge || !enteredAnnualSalary) {
      return;
    }
    retirementAgeScreen(enteredRetirementAge, "");
    annualSalaryScreenRequest(enteredAnnualSalary, "");
    navigate(`/choosewho`, {
      replace: true,
      state: {
        userRetirementAge: enteredRetirementAge,
        userAnnualSalary: enteredAnnualSalary,
      },
    });
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row lead">
          {/* <div className="col-9"> */}
            <h1 className="cover-heading">Hello, Yashi</h1>
            <p>
              To provide projections, we'll need a few details from you to get
              started. Projections are provided by our independent partner
              #####.
            </p>
          {/* </div> */}
          {/* <div className="col-3">
            <CircleButton imageUri={profileImage} />
          </div> */}
        </div>
      </div>

      <Card>
        <div className="mt-4"></div>
        <Form
          className="mx-auto"
          onSubmit={handleFormSubmit}
          style={{ width: "300px" }}
        >
          <Form.Group className="mb-3" controlId="formBasicRetirementAge">
            <Form.Label>When do you think you'll retire?</Form.Label>
            <Form.Control
              type="number"
              onChange={retirementAgeChangeHandler}
              value={enteredRetirementAge > 0 ? enteredRetirementAge : ""}
              placeholder="65"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAnnualSalary">
            <Form.Label>Please provide us your annual salary</Form.Label>
            <Form.Control
              type="number"
              onChange={annualSalaryChangeHandler}
              value={enteredAnnualSalary > 0 ? enteredAnnualSalary : ""}
              placeholder="$100,000"
            />
          </Form.Group>

          <Button variant="primary" type="submit" style={buttonStyles}>
            Continue
          </Button>
        </Form>
      </Card>
    </Fragment>
  );
};

export default HomeComponent;
