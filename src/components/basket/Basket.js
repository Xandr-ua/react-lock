import "./Basket.scss";

function Basket({ onClose, onRemove, items = [] }) {
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

          {items.length > 0 ? (
            <div className="basketListInner">
              <ul className="basketList">
                {items.map((obj) => (
                  <li className="basketItem">
                    <img src={obj.imagesUrl} alt="lock" />
                    <div>
                      <p>{obj.title}</p>
                      <span>{obj.price}$</span>
                    </div>
                    <img
                      onClick={() => onRemove(obj.id)}
                      className="remove"
                      src="/img/remove.svg"
                      alt="remove"
                    />
                  </li>
                ))}
              </ul>
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
          ) : (
            <p className="basketText">Your cart is empty add a product</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Basket;
