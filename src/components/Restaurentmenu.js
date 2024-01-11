import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestorentMenu from "../utils/useRestorentMenu";

const Restaurentmenu = () => {
  const { resId } = useParams();
  const resMenu = useRestorentMenu(resId);
  console.log("ResMenu", resMenu);
  if (resMenu == null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resMenu?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")}- {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurentmenu;
