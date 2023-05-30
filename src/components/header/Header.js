

function Header(props) {
  return (
    <header>
      <div className="headerLeft">
        <img src="/img/logo.svg" alt="logo" />
      </div>

      <ul className="headerRight">
        <li className="" >
          <img src="/img/like.svg" alt="like" />
        </li>
        <li className="" onClick={props.onClickCart}>
          <img src="/img/cart.svg" alt="cart" />
          <span>89.90$</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;