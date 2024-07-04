/* eslint-disable react/prop-types */
import { IoCart } from "react-icons/io5";
import { FaBoltLightning } from "react-icons/fa6";
import styles from "./Card.module.css";
import Buttons from "./Buttons";

function Cards({ item }) {
  return (
    <section>
      <div className={`${styles.section_card}`}>
        <div className="section-image">
          <img src={item.image} alt="" />
        </div>
        <div className={`${styles.section_content}`}>
          <p>{item.title}</p>
          <span>Price : ${item.price}</span>
          <div className={`${styles.section_quantity}`}>
            <Buttons>-</Buttons>
            <span style={{ margin: "0 1rem", border: "0.1rem solid black" }}>
              Quantity
            </span>
            <Buttons>+</Buttons>
          </div>
          <div className={`${styles.section_actions}`}>
            <Buttons>
              <div className={styles.button_action}>
                <IoCart />
                <span> ADD TO CART</span>
              </div>
            </Buttons>
            <Buttons>
              <div className={styles.button_action}>
                <FaBoltLightning />
                <span> BUY NOW</span>
              </div>
            </Buttons>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
