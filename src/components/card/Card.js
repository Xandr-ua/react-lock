import React from "react";
import "./Card.scss";

function Card({ imagesUrl, title, price, onClickHeart, onAddCart }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isTabs, setIsTabs] = React.useState(true);

  const onAdded = () => {
    onAddCart({ imagesUrl, title, price });
    setIsAdded(!isAdded);
  };

  const onClickTabs = () => {
    onClickHeart({ imagesUrl, title, price });
    setIsTabs(!isTabs);
  }

  return (
    <li className="card">
      <div className="cardInfo">
        <span className="cardInfoText">Out of stock</span>
        <div className="cardInfoInner">
          <span className="cardInfoSale">sale</span>
          <img
            src={isTabs ? "/img/cart-like.svg" : "/img/like-active.svg"}
            alt="cart-like"
            onClick={onClickTabs}
          />
        </div>
      </div>
      <img src={imagesUrl} alt="lock" />
      <p>{title}</p>
      <div className="cardInner">
        <div className="cardInnerPrice">
          <span>{price}$</span>
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