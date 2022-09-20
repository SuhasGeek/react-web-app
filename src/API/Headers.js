const axios = require("axios").default;
export const headers = {
  "Content-Type": "application/json",
  application: "JOVO",
  Authorization: globaltoken,
};

export var tiaaAccountsHeaders = {
  ...headers,
  "tiaa-consumer": "digital-investment-advice-rs",
};
export var getProjectionHeaders = {
  ...tiaaAccountsHeaders,
  "tiaa-guid": "97656E0E-4C2C-6EB7-B0C5-993807888",
  "tiaa-user-ref": "7253994",
};

var globaltoken = "Bearer";

axios
  .get("https://tokenbucketforras.s3.ap-south-1.amazonaws.com/token.json")
  .then(function (response) {
    globaltoken = globaltoken + " " + response.data.token;
    //console.log("API Token:", response.data.token);
    console.log(globaltoken);
    headers.Authorization = globaltoken;
    //return response.data.token;

    tiaaAccountsHeaders = { ...headers, tiaaAccountsHeaders };
    getProjectionHeaders = { ...tiaaAccountsHeaders, getProjectionHeaders };

    console.log("\nHeaders:: " + JSON.stringify(headers));
    console.log(
      "\ngetProjections Headers:: " + JSON.stringify(getProjectionHeaders)
    );
    console.log(
      "\ngetTiaaHeaders Headers:: " + JSON.stringify(tiaaAccountsHeaders)
    );
  })
  .catch((error) => {
    console.log("Error: " + error);
  });
