import { IMAGE_CDN_URL } from "./utils/constants";

const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    rating,
    delivery,
    logoImageKey: image,
  } = props?.resData;

  console.log({ name, cuisines, rating, delivery, image });

  return (
    <div className="resto-card">
      <img
        src={`${IMAGE_CDN_URL}${image}?width=720&crop=720:328&format=avif`}
        alt="resto-image"
        className="resto-image"
      />

      <h3 className="resto-name">{name}</h3>
      <p className="cuisine">{cuisines.join(", ")}</p>
      <p className="rating">
        Rating: {rating.score} ({rating.displayCount})
      </p>
      <p className="delivery-time">Delivery Time: {delivery.time} mins</p>
    </div>
  );
};

export default RestaurantCard;
