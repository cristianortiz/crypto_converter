# Cryto Currency to FIAT Converter in React

Small project to demonstrate how to connects to an external API using axios, and retrieve cryto currrency list whit their price and other data, the user can convert any cryto from the API retrieved list into several FIAT currency

## Highlights

- Using custom hooks, to keep the state and fill selects input form component whit the list of cryptocurrency retrieved from the API, and the list of fiat currency hardcoded in the component
- Connect to external API using Axios to very concise and clean code
- UseEffect hook to handle the API request and keep the UI data updated
- Proptypes to type check of the props received in components

### Testing

- use jest an react testing library to test the component
- create mock files to simulate data retrieved from the API without actually request it
