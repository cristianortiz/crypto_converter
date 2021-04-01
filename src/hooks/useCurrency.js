import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

//custom hook, to show a select tag configured from Form component
const useCurrency = (label, initialState, options) => {
  //custom hook State, the updateState func is called in option tag to keep update this custom hook State
  const [state, updateState] = useState("");

  //htlm tag to show whit data and options as props configured in other components
  const SelectCurrency = () => {
    return (
      <Fragment>
        <Label>{label} </Label>
        <Select onChange={(e) => updateState(e.target.value)}>
          <option value="">- Select</option>
          {options.map((option) => (
            <option key={option.code} value={option.code}>
              {option.name}
            </option>
          ))}
        </Select>
      </Fragment>
    );
  };

  //return the hook State the UI and the function to acces and modify hook State data
  return [state, SelectCurrency, updateState];
};

//proptyopes for types check un component props
useCurrency.propTypes = {
  options: PropTypes.object.isRequired,
  initialState: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};
export default useCurrency;
