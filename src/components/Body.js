import RestaurantCard from "./RestaurantCard";
import resList from "./utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <h2>Restaurants</h2>
      <div className="resto-container">
        {resList.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.outletCode} />
        ))}
      </div>
    </div>
  );
};

export default Body;
