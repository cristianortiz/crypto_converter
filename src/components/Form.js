import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import useCurrency from "../hooks/useCurrency";
import useCryptoCurrency from "../hooks/useCryptoCurrency";
import axios from "axios";

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
  //useState hook to State of crypto list retrieved from external API
  const [cryptoList, handleCryptoList] = useState([]);

  //useState hook to keep track and handle form validations errors
  const [error, handleError] = useState(false);

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

  //custom hook call to cryptoCurrency, to load the select whith api retrieved crypto list
  const [crypto, SelectCryptoCurrency] = useCryptoCurrency(
    "Choose Crypto",
    "",
    cryptoList
  );

  //external API call, using a useEffect hook and axios
  useEffect(() => {
    const requestAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const result = await axios.get(url);
      //save the retrived data in the local useState hook
      handleCryptoList(result.data.Data);
    };

    requestAPI();
  }, []);

  //form submit
  const convertCurrency = (e) => {
    e.preventDefault();

    //validate form fields
    if ((currency === "") | (crypto === "")) {
      handleError(true);
      return;
    }

    //passing the data to App component
    handleError(false);
  };

  return (
    <form onSubmit={convertCurrency}>
      {error ? "there is an Error" : null}
      <SelectCurrency />
      <SelectCryptoCurrency />
      <Button type="submit" value="Convert" />
    </form>
  );
};

export default Form;
