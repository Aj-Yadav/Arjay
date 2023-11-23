import React, { useContext, useEffect, useState } from "react";
import "./Item.css";
import { FaSearch } from "react-icons/fa";
import { DataContext } from "../../Context/DataProvider";

const URL = "https://fakestoreapi.com/products";

const Item = () => {
  const { islogin } = useContext(DataContext);
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async (apiURL) => {
    try {
      const response = await fetch(apiURL);
      const userData = await response.json();
      if (!response.ok) {
        throw new Error("data not found");
      }

      setData(userData);
      setSearchData(userData);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(islogin);

  const handleSearch = () => {
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(lowerCaseSearchQuery)
    );
    setSearchData(filteredData);
  };

  useEffect(() => {
    const correctURL = URL;
    fetchData(correctURL);
  }, []);

  return (
    <div className="main-container">
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>

      {!islogin ? <h2>You are successfully logged in</h2> : <h2>Guest user</h2>}

      {searchData.length > 0 ? (
        <div className="display-item">
          {searchData.map((item) => {
            const { id, title, image, price } = item;

            return (
              <div className="container" key={id}>
                <div className="container-items">
                  <img className="display" src={image} alt="" />
                  <div className="text">
                    <div className="item">{title}</div>
                    <div className="item">${price}</div>
                  </div>
                  <button>Add item</button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>loading data...</p>
      )}
    </div>
  );
};

export default Item;
