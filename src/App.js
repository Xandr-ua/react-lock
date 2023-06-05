import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/header/Header";
import Basket from "./components/basket/Basket";
import Home from "./pages/Home";



function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [tabs, setTabs] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpen, setCartOpen] = React.useState(false);

  React.useEffect(() => {

      axios
      .get("https://6474fe937de100807b1c0b84.mockapi.io/items")
      .then(res => {
        setItems(res.data);
      });

      axios
        .get("https://6474fe937de100807b1c0b84.mockapi.io/cart")
        .then((res) => {
          setCartItems(res.data);
        });


  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://6474fe937de100807b1c0b84.mockapi.io/cart", obj);
    setCartItems(prev => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://6474fe937de100807b1c0b84.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onAddToTab = (obj) => {
    axios.post("https://6474fe937de100807b1c0b84.mockapi.io/tabs", obj);
    setTabs((prev) => [...prev, obj]);
  };


  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }


  return (
    <div className="container">
      {cartOpen && (
        <Basket
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpen(true)} />

      <Route path="/">
        <Home />
      </Route>


      {/* <section className="catalog">
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
                onClickHeart={(obj) => onAddToTab(obj)}
                onAddCart={(obj) => onAddToCart(obj)}
              />
            ))}
        </ul>
      </section> */}
    </div>
  );
}

export default App;
