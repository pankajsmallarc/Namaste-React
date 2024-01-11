import React, { useState, useEffect } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineSataus";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [serachText, setsearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  const isOnlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await res.json();

    setResData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

  };

  const handleClick = () => {
    const listOfRestorent = resData.filter((res) => res.info.avgRating > 4.2);
    setResData(listOfRestorent);
  };
if(isOnlineStatus === false){
  return(
    <h1>You are offline. please check your internet</h1>
  )
}
  return resData.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search "
            value={serachText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            onClick={() => {
              console.log(serachText);
              const filteredRes = resData.filter((res) =>
                res.info.name.toLowerCase().includes(serachText.toLowerCase())
              );
              setResData(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={handleClick}>
          Top rated Restorants
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((restorent) => (
          <Link  key={restorent.info.id}  to={'/restaurent/'+ restorent.info.id}>
            <RestaurentCard key={restorent.info.id} resData={restorent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
