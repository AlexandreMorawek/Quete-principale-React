import data from "../data/foodItems.json"
import MenuItem from './MenuItem';



function MenuList() {


  return (
    <main>
      {data.map((m) => (
        <MenuItem 
          id={m.id}
          itemName={m.itemName}
          description={m.description}
          foodImage={m.foodImage}
          price={m.price}
          isFavorite={m.isFavorite}           />
      ))}
    </main>
  );
}

export default MenuList;