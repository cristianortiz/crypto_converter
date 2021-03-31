import React from "react";
import styled from "@emotion/styled";

const ErrorMsg = styled.p`
  background-color: #b7322c;
  padding: 1rem;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-family: "Bebas Neue", cursive;
  color: #fff;
`;

const Error = ({ msg }) => {
  return <ErrorMsg>{msg}</ErrorMsg>;
};

export default Error;
