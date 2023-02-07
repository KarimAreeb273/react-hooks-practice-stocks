import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, addStocks}) {
  const stockArr = stocks.map((stock) => {
    return <Stock key={stock.id} stock={stock} onStock = {addStocks}/>
});

  return (
    <div>
      <h2>Stocks</h2>
      {stockArr}
    </div>
  );
}

export default StockContainer;
