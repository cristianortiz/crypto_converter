import React from "react";
const Conversion = ({ result }) => {
  if (Object.keys(result).length === 0) return null;
  console.log(result.PRICE);
  return (
    <div>
      <p>
        The price is: <span>{result.PRICE}</span>
      </p>
      <p>
        High Day Price: <span>{result.HIGHDAY}</span>
      </p>
      <p>
        Low Day Price: <span>{result.LOWDAY}</span>
      </p>
      <p>
        Lst 24h Change: <span>{result.CHANGEPCT24HOUR}</span>
        <p>
          Last Update: <span>{result.LASTUPDATE}</span>
        </p>
      </p>
    </div>
  );
};

export default Conversion;
