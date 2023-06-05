import Card from "../components/card/Card";

function Home() {
  return (
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
                onClickHeart={(obj) => onAddToTab(obj)}
                onAddCart={(obj) => onAddToCart(obj)}
              />
            ))}
        </ul>
    </section>
  );
}

export default Home;
