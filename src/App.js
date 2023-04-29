


function App() {
  return (
    <div className="container">
      <header>
        <div className="headerLeft">
          <img src="/img/logo.svg" alt="logo" />
        </div>

        <ul className="headerRight">
          <li className="">
            <img src="/img/like.svg" alt="like" />
          </li>
          <li className="">
            <img src="/img/cart.svg" alt="cart" />
            <span>89.90$</span>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h1>Catalog</h1>
        <ul className="catalogList">
          <li className="card">
            <div className="cardInfo">
              <span className="cardInfoText">Out of stock</span>
              <span className="cardInfoSale">sale</span>
            </div>
            <img src="/img/locks/lock-1.jpg" alt="lock" />
            <p>Variable Golden Soft lock for the hotel</p>
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
              <span className="cardInfoSale">sale</span>
            </div>
            <img src="/img/locks/lock-2.jpg" alt="lock" />
            <p>Variable Golden Soft lock for the hotel</p>
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
              <span className="cardInfoSale">sale</span>
            </div>
            <img src="/img/locks/lock-3.jpg" alt="lock" />
            <p>Variable Golden Soft lock for the hotel</p>
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
              <span className="cardInfoSale">sale</span>
            </div>
            <img src="/img/locks/lock-4.jpg" alt="lock" />
            <p>Variable Golden Soft lock for the hotel</p>
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
