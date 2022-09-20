import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "../UI/Card";
import { buttonStyles } from "../UI/Button";
import { useLocation } from "react-router-dom";

import {
  retirementAgeScreen,
  annualSalaryScreenRequest,
} from "../API/Endpoints.js";

const SecondScreen = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const DATA = [
    {
      id: 1,
      name: "retiremeAge",
      displayQuestion: "When do you think you'll retire?",
      placeHolderText: "65",
      backgroundColor: "#6BC5E8",
    },
    {
      id: 2,
      name: "annualSalary",
      displayQuestion: "Please provide us your annual salary",
      placeHolderText: "$100,000",
      backgroundColor: "#6BC5E8",
    },
  ];

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

    retirementAgeScreen(location.state.userRetirementAge, enteredRetirementAge);
    annualSalaryScreenRequest(
      location.state.userAnnualSalary,
      enteredAnnualSalary
    );

    navigate(`/projection`);
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row lead">
          <h1 className="cover-heading">Just Some More Details</h1>
          <p>Choose who to include in your retirement projection.</p>
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
            <Form.Label>Provide spouse retirement age?</Form.Label>
            <Form.Control
              type="number"
              onChange={retirementAgeChangeHandler}
              value={enteredRetirementAge > 0 ? enteredRetirementAge : ""}
              placeholder={DATA[0].placeHolderText}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAnnualSalary">
            <Form.Label>Enter spouse annual salary</Form.Label>
            <Form.Control
              type="number"
              onChange={annualSalaryChangeHandler}
              value={enteredAnnualSalary > 0 ? enteredAnnualSalary : ""}
              placeholder={DATA[1].placeHolderText}
            />
          </Form.Group>

          <Button
            variant="secondary"
            type="button"
            style={buttonStyles}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
          <Button
            variant="primary"
            type="submit"
            className="ms-2"
            style={buttonStyles}
          >
            Continue
          </Button>
        </Form>
      </Card>
    </Fragment>
  );
};

export default SecondScreen;
