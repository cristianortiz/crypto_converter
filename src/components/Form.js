import React from "react";
import styled from "@emotion/styled";
import useCurrency from "../hooks/useCurrency";

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = () => {
  const currencyList = [
    { code: "USD", name: "USA Dollar" },
    { code: "EUR", name: "UE Euro" },
    { code: "CLP", name: "Chilean Peso" },
    { code: "ARS", name: "Argentinian Peso" },
  ];
  //using custom hook, remember SelectCurrency is a UI comp inside
  // the hooks write the first letter in capital
  const [currency, SelectCurrency] = useCurrency(
    "Choose Currency",
    "",
    currencyList
  );

  return (
    <form>
      <SelectCurrency />
      <Button type="submit" value="Convert" />
    </form>
  );
};

export default Form;
