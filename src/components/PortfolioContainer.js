import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, removeStocks}) {
  const portArr = stocks.map((item) => {
    return <Stock key={item.id} stock={item} onStock = {removeStocks}/>
  })
 
  return (
    <div>
      <h2>My Portfolio</h2>   
      {portArr}
    </div>
  );
}

export default PortfolioContainer;
