import React from "react";
import "./Card.scss";

function Card(props) {

  const [isAdded, setIsAdded] = React.useState(false);

  const onAdded = () => {
    setIsAdded(!isAdded);
  };

  

  return (
    <li className="card">
      <div className="cardInfo">
        <span className="cardInfoText">Out of stock</span>
        <div className="cardInfoInner">
          <span className="cardInfoSale">sale</span>
          <img src="/img/cart-like.svg" alt="cart-like" />
        </div>
      </div>
      <img src={props.imagesUrl} alt="lock" />
      <p>{props.title}</p>
      <div className="cardInner">
        <div className="cardInnerPrice">
          <span>{props.price}$</span>
          <span>100.00$</span>
        </div>
        <button
          style={
            isAdded
              ? { backgroundColor: "#37bf2d" }
              : { backgroundColor: "#4295E4" }
          }
          onClick={onAdded}
        >
          Add to cart
        </button>
      </div>
    </li>
  );
}

export default Card;