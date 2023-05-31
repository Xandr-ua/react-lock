import "./Basket.scss";

function Basket({ onClose, items = [] }) {
  return (
    <div className="basketInner">
      <div className="basket">
        <div className="basketTop">
          <h2>
            Basket
            <img
              onClick={onClose}
              className="remove"
              src="/img/remove.svg"
              alt="close"
            />
          </h2>
          <ul className="basketList">
            {items.map((obj) => (
              <li className="basketItem">
                <img src={obj.imagesUrl} alt="lock" />
                <div>
                  <p>{obj.title}</p>
                  <span>{obj.price}$</span>
                </div>
                <img className="remove" src="/img/remove.svg" alt="remove" />
              </li>
            ))}
          </ul>
        </div>

        <div className="basketBottom">
          <ul>
            <li>
              <span>Together</span>
              <div></div>
              <b>179.80$</b>
            </li>

            <li>
              <span>Tax</span>
              <div></div>
              <b>8.99$</b>
            </li>
          </ul>

          <button>Place an order</button>
        </div>
      </div>
    </div>
  );
}

export default Basket;
