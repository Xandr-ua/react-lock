import React from "react";
import Header from "./components/header/Header";
import Basket from "./components/basket/Basket";
import Card from "./components/card/Card";


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
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


  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }


  return (
    <div className="container">
      {cartOpen && (
        <Basket items={cartItems} onClose={() => setCartOpen(false)} />
      )}
      <Header onClickCart={() => setCartOpen(true)} />
      <section className="catalog">
        <div className="catalogInnerTitle">
          <h1>
            {searchValue ? `Пошук по запиту: "${searchValue}"` : `Catalog`}
          </h1>
          <div className="catalogSearch">
            <img src="/img/search.svg" alt="search" />
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              type="text"
              placeholder="Search..."
            />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="catalogClose"
                src="/img/close.svg"
                alt="close"
              />
            )}
          </div>
        </div>
        <ul className="catalogList">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <Card
                key={item.imagesUrl}
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
