import Cards from "./Card";
import { MyContext } from "../App";
import { useContext, useState } from "react";

function CardsList() {
  const { itemData } = useContext(MyContext);
  const [selectCard, setSelectCard] = useState({});

  console.log(selectCard);

  return (
    <ul className={`grid grid-cols-1  xl:grid-cols-4 sm:grid-cols-2 container`}>
      {itemData.map((item) => (
        <li key={item.id} style={{ listStyle: "none", margin: "0 auto" }}>
          <Cards setSelectCard={setSelectCard} item={item} />
        </li>
      ))}
    </ul>
  );
}

export default CardsList;
