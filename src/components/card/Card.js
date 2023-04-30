

function Card() {
  return (
    <li className="card">
      <div className="cardInfo">
        <span className="cardInfoText">Out of stock</span>
        <div className="cardInfoInner">
          <span className="cardInfoSale">sale</span>
          <img src="/img/cart-like.svg" alt="cart-like" />
        </div>
      </div>
      <img src="/img/locks/lock-1.jpg" alt="lock" />
      <p>Golden Soft GS-JYL-S2019D Variable Electronic Lock for Hotel</p>
      <div className="cardInner">
        <div className="cardInnerPrice">
          <span>89.90$</span>
          <span>100.00$</span>
        </div>
        <button>Add to cart</button>
      </div>
    </li>
  );
}

export default Card;