import { render, screen } from "@testing-library/react";
import Form from "../components/Form";
import { currencyList, cryptoListAPI } from "../__mocks__/currency_mock";

test("should start custom hook <useCryptoCurrency />", async () => {
  //mount Form component
  render(<Form />);
  //test the list of currency listed in the currency select
  const currencyDropdown = screen.getByTestId("select-currency");
  //it counts how many options are being displayed in the select input an compares with 5
  expect(currencyDropdown.children.length).toEqual(5);
  //now using the mock list of currency to test the select input without request an API
  //or DB, +1 the first empty select input, must be considered, check in web inspector
  expect(currencyDropdown.children.length).toEqual(currencyList.length + 1);

  //test the crypto options list from mock, but is an async call use
  //findAllTestID to get and test all the options
  const crypto_options = screen.findAllByTestId("option-crypto");
  expect(await crypto_options).toHaveLength(10);
});
