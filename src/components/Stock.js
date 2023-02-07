import React from "react";

function Stock({stock, onStock}) {

function changePortStock() {
  onStock(stock);
}

  return (
    <div onClick = {changePortStock}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
          <p className="card-text">{stock.type}</p>
          <p className="card-text">{stock.ticker}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;