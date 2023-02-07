import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

const [stocks, setStocks] = useState([]);
const [portfolio, setPortfolio] = useState([]);
const [sort, setSortBy] = useState("Alphabetically");
const [filter, setFilter] = useState("Tech");

function handleAddStock(stockToAdd) {
  const stockInPortfolio = portfolio.find(
    (stock) => stock.id === stockToAdd.id
  );
  if (!stockInPortfolio) {
    setPortfolio([...portfolio, stockToAdd]);
  }
}

function handleRemoveStock(stockToRemove) {
  setPortfolio(portfolio.filter((stock) => stock.id!== stockToRemove.id));
}

const handleSort = [...stocks].sort((a, b) => {
  if (sort === "Alphabetically") {
    return a.name.localeCompare(b.name);
  } else {
      return a.price - b.price;
  }
});

const handleFilter = handleSort.filter((stock) => stock.type === filter)

useEffect(() => {
  fetch("http://localhost:3001/stocks")
  .then(response => response.json())
  .then(setStocks);
}, []);

  return (
    <div>
      <SearchBar sort = {sort} sortBy = {setSortBy} filter = {filter} setFilter = {setFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks = {handleFilter} addStocks = {handleAddStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks = {portfolio} removeStocks = {handleRemoveStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
