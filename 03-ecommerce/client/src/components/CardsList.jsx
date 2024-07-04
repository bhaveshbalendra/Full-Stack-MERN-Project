import Cards from "./Card";
import { MyContext } from "../App";
import { useContext } from "react";

function CardsList() {
  const value = useContext(MyContext);
  console.log(value);
  return (
    <ul className={`grid grid-cols-1  xl:grid-cols-4 sm:grid-cols-2 container`}>
      {value.map((item) => (
        <li key={item.id} style={{ listStyle: "none", margin: "0 auto" }}>
          <Cards item={item} />
        </li>
      ))}
    </ul>
  );
}

export default CardsList;
