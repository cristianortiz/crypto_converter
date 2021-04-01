import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ResultDiv = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
`;

const Info = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;

const Price = styled.p`
  font-size: 30px;
  span {
    font-weight: bold;
  }
`;

const Conversion = ({ result }) => {
  if (Object.keys(result).length === 0) return null;
  console.log(result.PRICE);
  return (
    <ResultDiv>
      <Price>
        The price is: <span>{result.PRICE}</span>
      </Price>
      <Info>
        High Day Price: <span>{result.HIGHDAY}</span>
      </Info>
      <Info>
        Low Day Price: <span>{result.LOWDAY}</span>
      </Info>
      <Info>
        Last 24h Change: <span>{result.CHANGEPCT24HOUR}</span>
        <Info>
          Last Update: <span>{result.LASTUPDATE}</span>
        </Info>
      </Info>
    </ResultDiv>
  );
};
//proptyopes for types check un component props
Conversion.propTypes = {
  result: PropTypes.object.isRequired,
};

export default Conversion;
