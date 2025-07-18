//import initialShoppingData from "../utils/mockData";
import { Search } from "lucide-react";
import react, { useEffect, useState } from "react";

const NameRating = ({ item }) => {
  return (
    <div className="rating-container">
      <h3>{item.rating.rate} </h3>
      <h2>⭐</h2>
    </div>
  );
};

const ProdDetails = ({ item }) => {
  return (
    <div className="prod-rate-detail">
      <span className="prod-detail">{item.category}</span>
      <div className="rate-detail">${item.price}</div>
    </div>
  );
};

const ProdContainer = ({ items }) => {
  return (
    <div className="card-container">
      <div className="image-wrapper">
        <img src={items.image}></img>
      </div>
      <div className="prod-details">
        <div className="prod-detail">
          <div className="name-rating">
            <h3>{items.title}</h3>
            <NameRating item={items} />
          </div>
          <ProdDetails item={items} />
        </div>
      </div>
    </div>
  );
};
export const Body = () => {
  const [shoppingData, setShoppingData] = useState([]);
  const [filteredRes, setFilteredres] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products");

        const json = await data.json();

        setShoppingData(json);
        setFilteredres(json);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="body">
      <div className="search-container ">
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-icon-button "
          onClick={() => {
            //filter rest
            const filteredProd = shoppingData.filter((prod) =>
              prod.title.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredres(filteredProd);
          }}
        >
          <Search size={20} color="#555" />
        </button>
      </div>
      `
      <div className="filter_btn">
        <button
          onClick={() => {
            {
              console.log("Filtering...");
              setShoppingData((items) =>
                items.filter((shoppingData) => shoppingData.rating.rate > 4.0)
              );
            }
          }}
        >
          Top Rated Products
        </button>
      </div>
      `
      <div className="prod-container">
        {filteredRes.map((items) => {
          return <ProdContainer key={items.id} items={items} />;
        })}
      </div>
    </div>
  );
};
