import { headers, tiaaAccountsHeaders, getProjectionHeaders } from "./Headers";

const axios = require("axios").default;

// ------------------------------------------------------------------
// Retirement Age Screen REQUEST
// ------------------------------------------------------------------

export async function retirementAgeScreen(
  desiredRetirementAge,
  partnerDesiredRetirementAge
) {
  var body = "";
  if (partnerDesiredRetirementAge != "") {
    body = {
      retirementAgeScreenRequest: {
        desiredRetirementAge: desiredRetirementAge,
        partnerDesiredRetirementAge: partnerDesiredRetirementAge,
      },
    };
  } else {
    body = {
      retirementAgeScreenRequest: {
        desiredRetirementAge: desiredRetirementAge,
      },
    };
  }

  await axios
    .post(
      "https://origin-service-devint.test.tiaa-cref.org/private/api/ext-digital-forms-experience-rs/retirementAge/v1/pin/100010157845",
      body,
      {
        headers: headers,
      }
    )
    .then((response) => {
      console.log(
        "retirementAgeScreenRequest response: " + JSON.stringify(response.data)
      );
      return response.data;
    })
    .catch((error) => {
      console.log("Error: " + error);
    });
}

// ------------------------------------------------------------------
// Annual Salary Screen REQUEST
// ------------------------------------------------------------------
export async function annualSalaryScreenRequest(salary, partnerSalary) {
  var body = "";
  if (partnerSalary != "") {
    body = {
      annualSalaryScreenRequest: {
        salary: salary,
        partnerSalary: partnerSalary,
      },
    };
  } else {
    body = {
      annualSalaryScreenRequest: {
        salary: salary,
      },
    };
  }

  await axios
    .post(
      "https://origin-service-devint.test.tiaa-cref.org/private/api/ext-digital-forms-experience-rs/annualSalary/v1/pin/100010157845",
      body,
      {
        headers: headers,
      }
    )
    .then((response) => {
      console.log(
        "annualSalaryScreen response: " + JSON.stringify(response.data)
      );
      return response.data;
    })
    .catch((error) => {
      console.log("Error: " + error);
    });
}

// ------------------------------------------------------------------
// GET Projections Details
// ------------------------------------------------------------------

export async function getProjections() {
  try {
    const resp = await axios.get(
      "https://origin-service-devint.test.tiaa-cref.org/private/api/ext-digital-forms-experience-rs/projection/v1/pin/100010157845",
      {
        headers: getProjectionHeaders,
      }
    );

    console.log("getProjections Function resp: " + JSON.stringify(resp.data));
    return resp.data;
  } catch (err) {
    console.error("ERROR: " + err);
  }
}

// ------------------------------------------------------------------
// GET TIAA Accounts Details
// ------------------------------------------------------------------

export async function getTiaaAccounts() {
  try {
    const resp = await axios.get(
      "https://origin-service-devint.test.tiaa-cref.org/private/api/ext-digital-forms-experience-rs/tiaaAccounts/v1/pin/100010157845",
      {
        headers: tiaaAccountsHeaders,
      }
    );

    console.log("TiaaAccounts Details API resp: " + JSON.stringify(resp.data));
    return resp.data;
  } catch (err) {
    console.error("ERROR: " + err);
  }
}

// ------------------------------------------------------------------
// inclusionDetails Screen REQUEST
// ------------------------------------------------------------------

export async function inclusionDetails(inclusionStatus) {
  console.log("headers" + headers.Authorization);

  var body = "";
  if (inclusionStatus == "true") {
    body = {
      inclusionScreenRequest: {
        inclusionStatus: "true",
        inclusionRelationship: "spouse",
      },
    };
  } else {
    body = {
      inclusionScreenRequest: {
        inclusionStatus: "false",
      },
    };
  }

  await axios
    .post(
      "https://origin-service-devint.test.tiaa-cref.org/private/api/ext-digital-forms-experience-rs/inclusion/v1/pin/100010157845",
      body,
      {
        headers: headers,
      }
    )
    .then((response) => {
      console.log("inclusion response: " + JSON.stringify(response.data));
      return response.data;
    })
    .catch((error) => {
      console.log("Error: " + error);
    });
}
