import React from "react";
import Header from "./components/header/Header";
import Basket from "./components/basket/Basket";
import Card from "./components/card/Card";


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);

  React.useEffect(() => {
    fetch("https://6474fe937de100807b1c0b84.mockapi.io/items").then((res) => {
        return res.json();
      }).then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  };

  return (
    <div className="container">
      {cartOpen && (
        <Basket items={cartItems} onClose={() => setCartOpen(false)} />
      )}
      <Header onClickCart={() => setCartOpen(true)} />
      <section className="catalog">
        <div className="catalogInnerTitle">
          <h1>Catalog</h1>
          <div className="catalogSearch">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <ul className="catalogList">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imagesUrl={item.imagesUrl}
              onClickHeart={() => console.log("Heart")}
              onAddCart={(obj) => onAddToCart(obj)}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
