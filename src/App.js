import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import img from "./cryptomonedas.png";
import Form from "./components/Form";
import Conversion from "./components/Conversion";
import axios from "axios";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  //useState hook to keep track and handle he fiat currency choose from user in form comp
  const [currency, handleCurrency] = useState("");

  //useState hook to keep track and handle te cryto choose for the conversion from user in form comp
  const [crypto, handleCrypto] = useState("");

  //useState hook to keep the state of the result of request the API and render in UI
  const [result, handleResult] = useState({});

  //hook to make the convertion and keep updated the values in UI
  useEffect(() => {
    const convertToCrypto = async () => {
      if (currency === "") return;
      //consulting API to make de currency convertion
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;
      const result = await axios.get(url);

      //put the API response in a useState hook
      handleResult(result.data.DISPLAY[crypto][currency]);
    };

    convertToCrypto();
  }, [currency, crypto]);

  return (
    <Container>
      <div>
        <Image src={img} alt="crypto image"></Image>
      </div>
      <div>
        <Heading>Convert Crypto Currency</Heading>
        <Form handleCrypto={handleCrypto} handleCurrency={handleCurrency} />
        <Conversion result={result} />
      </div>
    </Container>
  );
}

export default App;
