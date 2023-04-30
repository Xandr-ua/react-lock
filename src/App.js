import Header from "./components/header/Header";
import Basket from "./components/basket/Basket";
import Card from "./components/card/Card";

function App() {
  return (
    <div className="container">
      <Basket />
      <Header />
      <section className="catalog">
        <div className="catalogInnerTitle">
          <h1>Catalog</h1>
          <div className="catalogSearch">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <ul className="catalogList">
          <Card />

          <li className="card">
            <div className="cardInfo">
              <span className="cardInfoText">Out of stock</span>
              <div className="cardInfoInner">
                <span className="cardInfoSale">sale</span>
                <img src="/img/cart-like.svg" alt="cart-like" />
              </div>
            </div>
            <img src="/img/locks/lock-2.jpg" alt="lock" />
            <p>Golden Soft GS-200Z-5 electronic door lock for office</p>
            <div className="cardInner">
              <div className="cardInnerPrice">
                <span>89.90$</span>
                <span>100.00$</span>
              </div>
              <button>Add to cart</button>
            </div>
          </li>

          <li className="card">
            <div className="cardInfo">
              <span className="cardInfoText">Out of stock</span>
              <div className="cardInfoInner">
                <span className="cardInfoSale">sale</span>
                <img src="/img/cart-like.svg" alt="cart-like" />
              </div>
            </div>
            <img src="/img/locks/lock-3.jpg" alt="lock" />
            <p>Golden Soft GS-65T office door lock</p>
            <div className="cardInner">
              <div className="cardInnerPrice">
                <span>89.90$</span>
                <span>100.00$</span>
              </div>
              <button>Add to cart</button>
            </div>
          </li>

          <li className="card">
            <div className="cardInfo">
              <span className="cardInfoText">Out of stock</span>
              <div className="cardInfoInner">
                <span className="cardInfoSale">sale</span>
                <img src="/img/cart-like.svg" alt="cart-like" />
              </div>
            </div>
            <img src="/img/locks/lock-4.jpg" alt="lock" />
            <p>Golden Soft GS-HC-S6 Variable Electronic Lock for Hote</p>
            <div className="cardInner">
              <div className="cardInnerPrice">
                <span>89.90$</span>
                <span>100.00$</span>
              </div>
              <button>Add to cart</button>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
