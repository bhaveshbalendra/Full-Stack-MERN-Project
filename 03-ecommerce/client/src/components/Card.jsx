/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { IoCart } from "react-icons/io5";
import { FaBoltLightning } from "react-icons/fa6";
import styles from "./Card.module.css";
import Buttons from "./Buttons";

function Cards({ item }) {
  return (
    <>
      <section>
        <div className={`${styles.section_card}`}>
          <div className="section-image">
            <img src={item.image} alt="" />
          </div>
          <div className={`${styles.section_content}`}>
            <p>{item.title}</p>
            <div className={`${styles.section_quantity}`}>
              <Buttons>-</Buttons>
              <span style={{ margin: "0 1rem", border: "0.1rem solid black" }}>
                Quantity
              </span>
              <Buttons>+</Buttons>
            </div>
            <div className={`${styles.section_actions}`}>
              <Buttons>ADD TO CART</Buttons>
              <Buttons>BUY NOW</Buttons>
            </div>
          </div>
        </div>
      </section>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`${item.image}`} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <span>Quantity</span> : <Button>+</Button> {item.price}
          <Button>-</Button>
          <Button>
            <span style={{ display: "inline-flex", alignItems: "center" }}>
              <IoCart />
              <span style={{ marginLeft: "0.5rem" }}>ADD TO CART</span>
            </span>
          </Button>
          <Button>
            <span style={{ display: "inline-flex", alignItems: "center" }}>
              <FaBoltLightning />
              <span style={{ marginLeft: "0.5rem" }}>BUY NOW</span>
            </span>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
