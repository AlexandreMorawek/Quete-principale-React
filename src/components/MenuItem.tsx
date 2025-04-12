
import foodItemsType from "../Types/definition";



function MenuItem({itemName, description, foodImage, price, isFavorite} : foodItemsType) {

  return (
    <section className="itemContainer">
      <figure className="imgContainer">
        <img src={foodImage} alt={itemName} />
        <figcaption>
          <h2>{description}</h2>
          <p>{itemName}</p>
        </figcaption>
      </figure>
      <aside>{price} EUR</aside>
      <button type="button">{isFavorite ? "❤️" : "🤍"}</button>
    </section>
  );
}

export default MenuItem;