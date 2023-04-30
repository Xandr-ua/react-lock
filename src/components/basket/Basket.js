

function Basket() {
  return (
    <div className="basketInner">
      <div className="basket">
        <div className="basketTop">
          <h2>
            Basket
            <img className="remove" src="/img/remove.svg" alt="close" />
          </h2>
          <ul className="basketList">
            <li className="basketItem">
              <img src="/img/locks/lock-1.jpg" alt="lock" />
              <div>
                <p>
                  Golden Soft GS-JYL-S2019D Variable Electronic Lock for Hotel
                </p>
                <span>89.90$</span>
              </div>
              <img className="remove" src="/img/remove.svg" alt="remove" />
            </li>

            <li className="basketItem">
              <img src="/img/locks/lock-2.jpg" alt="lock" />
              <div>
                <p>Golden Soft GS-200Z-5 electronic door lock for office</p>
                <span>89.90$</span>
              </div>
              <img className="remove" src="/img/remove.svg" alt="remove" />
            </li>
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