import { readFileSync } from "fs";
import path from "path";

//read the api.json file an asign it to a JS exportable const
export const cryptoListAPI = JSON.parse(
  readFileSync(path.join(__dirname, "api.json")).toString()
);

export const currencyList = [
  { code: "USD", name: "USA Dollar" },
  { code: "EUR", name: "UE Euro" },
  { code: "CLP", name: "Chilean Peso" },
  { code: "ARS", name: "Argentinian Peso" },
];
