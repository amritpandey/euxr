import React, { useState, useEffect } from "react";
import spinner from "./Spinner.gif";

export const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState();


  // fetching product
  useEffect(() => {
    setLoading(true);

    fetch(
      `https://pfp-public-productdb-api.azurewebsites.net/api/product/search`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchText: searchInput }),
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setProducts(data.results);
        setLoading(false);
      });
  }, [searchInput]);

  const product = products.map((prod) => (
    <div className="individualProduct">
       <img
    src={`https://pfp-public-productdb-api.azurewebsites.net/api/picture/${prod.id}`}
    alt="product-img"
  />  
  <h4>{prod.name}</h4>
      </div>
  ))

  
  return (
    <div>
      <h1>Product Overview</h1>
      <div>
      <input
                type="text"
                value={searchInput}
                placeholder="Search your product"
                onChange={(e) => setSearchInput(e.target.value)}
            />
      </div>
      <div className="product-display">
          {loading?(
            <img src={spinner} alt="spinner" />
          ):(product)}
      </div>
    </div>
  );
};
