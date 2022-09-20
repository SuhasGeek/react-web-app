import { Fragment, useState, useEffect } from "react";
import Card from "../UI/Card";
import { useNavigate } from "react-router-dom";
import { getProjections, getTiaaAccounts } from "../API/Endpoints";
import { Button } from "react-bootstrap";
import { buttonStyles } from "../UI/Button";

const ProjectionScreen = () => {
  const navigate = useNavigate();

  var [currentIncome, setCurrentIncome] = useState("72193");
  var [projectedIncome, setProjectedIncome] = useState("94960");
  var [currentRiskLevel, setCurrentRiskLevel] = useState("VERY CONSERVATIVE");
  var [proposedRiskLevel, setProposedRiskLevel] = useState("CONSERVATIVE");

  var [tiaaAccountBal, setTiaaAccountBal] = useState("19783533");
  var [contributionAmt, setContributionAmt] = useState("94960");

  function currencyFormat(num) {
    const temp = parseInt(num);
    return "$ " + temp.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  useEffect(() => {
    async function fetchData() {
      const projection = await getProjections();

      setCurrentIncome(
        JSON.stringify(
          projection.projectionScreenResponse.currentAdviceRecommendation
            .incomeProjection.amount
        )
      );
      setProjectedIncome(
        JSON.stringify(
          projection.projectionScreenResponse.proposedAdviceRecommendation
            .incomeProjection.amount
        )
      );
      setCurrentRiskLevel(
        JSON.stringify(
          projection.projectionScreenResponse.currentAdviceRecommendation
            .overallRiskLevel
        )
      );
      setProposedRiskLevel(
        JSON.stringify(
          projection.projectionScreenResponse.proposedAdviceRecommendation
            .overallRiskLevel
        )
      );

      const tiaaAccountDetails = await getTiaaAccounts();

      const totalBalance = JSON.stringify(
        tiaaAccountDetails.tiaaAccountScreenResponse.totalBalance
      );
      const totalContribution = JSON.stringify(
        tiaaAccountDetails.tiaaAccountScreenResponse.totalContribution
      );

      setTiaaAccountBal(totalBalance);
      setContributionAmt(totalContribution);
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div className="row lead">
          <h1 className="cover-heading">Here's your projection</h1>
        </div>
      </div>

      <Card className="mb-3">
        <div className="mb-4"></div>
        <div className="row">
          <div className="col-sm" style={{ alignItems: "center" }}>
            <div style={{ fontWeight: "bold", marginBottom: 10 }}>
              Total Balance
            </div>
            <div style={{ fontWeight: "bold", fontSize: 16 }}>
              {currencyFormat(tiaaAccountBal)}
            </div>
          </div>
          <div className="col-sm" style={{ alignItems: "center" }}>
            <div style={{ fontWeight: "bold", marginBottom: 10 }}>
              Contribution Amount
            </div>
            <div style={{ fontWeight: "bold", fontSize: 16 }}>
              {currencyFormat(contributionAmt)}
            </div>
          </div>
        </div>
      </Card>

      <Card className="mb-3">
        <div className="row">
          <div className="col-sm" style={{ alignItems: "center" }}>
            <div
              style={{
                fontWeight: "bold",
                marginBottom: 10,
                color: "black",
                fontSize: 15,
              }}
            >
              Projected to have
            </div>
            <div style={{ fontWeight: "bold", fontSize: 20, color: "red" }}>
              {currencyFormat(currentIncome)}
            </div>
            <div style={{ alignContent: "center", color: "black" }}>
              {"If you retire<br/>at 67 and<br/>don't make<br/>any changes."
                .split("<br/>")
                .join("\n")}
            </div>
          </div>
          <div className="col-sm" style={{ alignItems: "center" }}>
            <div style={{ fontWeight: "bold", marginBottom: 10, fontSize: 15 }}>
              You could have
            </div>
            <div style={{ fontWeight: "bold", fontSize: 20, color: "green" }}>
              {currencyFormat(projectedIncome)}
            </div>
            <div
              style={{
                alignContent: "center",
                color: "black",
                alignItems: "center",
              }}
            >
              {"Assuming you<br/>follow this<br/>recommendations."
                .split("<br/>")
                .join("\n")}
            </div>
          </div>
        </div>
      </Card>

      <Card style={{ backgroundColor: "#A7E9AF" }}>
        <div className="row">
          <div className="mb-2" style={{ alignItems: "center" }}>
            <div
              style={{
                fontWeight: "bold",
                marginBottom: 10,
                color: "black",
                fontSize: 15,
              }}
            >
              Your Current Strategy
            </div>
            <div style={{ fontWeight: "bold", fontSize: 20, color: "red" }}>
              {currentRiskLevel}
            </div>
          </div>
          <div style={{ alignItems: "center" }}>
            <div style={{ fontWeight: "bold", marginBottom: 10, fontSize: 15 }}>
              Consider moving to
            </div>
            <div style={{ fontWeight: "bold", fontSize: 20, color: "green" }}>
              {proposedRiskLevel}
            </div>
          </div>
        </div>
      </Card>
      <div className="align-center mb-3">
        <Button
          variant="secondary"
          type="button"
          style={buttonStyles}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </div>
    </Fragment>
  );
};

export default ProjectionScreen;
