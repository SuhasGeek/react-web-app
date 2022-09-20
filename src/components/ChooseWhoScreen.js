import styles from "./ChooseWhoScreen.module.css";
import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "../UI/Card";
import classNames from "classnames";
import { buttonStyles } from "../UI/Button";
import { inclusionDetails } from "../API/Endpoints";
import { useLocation } from "react-router-dom";

const ChooseWhoScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [chosenOption, setChosenOption] = useState("");

  const optionSelectHandler = (event) => {
    setChosenOption(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!chosenOption || chosenOption.trim().length === 0) {
      return;
    }
    if (chosenOption === "self") {
      inclusionDetails("false");
      navigate("/projection");
    } else {
      inclusionDetails("true");
      navigate("/secondScreen", { replace: true, state: location.state });
    }
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
          className={classNames("mx-auto", styles.detailsForm)}
          onSubmit={handleFormSubmit}
          style={{ width: "300px" }}
        >
          <Form.Label>
            Who do you want to include in your projection?
          </Form.Label>
          <Form.Check
            type="radio"
            name="includePerson"
            value="self"
            label="Just you"
            onChange={optionSelectHandler}
          />
          <Form.Check
            type="radio"
            name="includePerson"
            value="self_with_spouse"
            label="You with spouse"
            onChange={optionSelectHandler}
          />
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

export default ChooseWhoScreen;
