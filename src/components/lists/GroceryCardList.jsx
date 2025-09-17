import GroceryCard from "../cards/groceryCard";
import products from "../../data/products";
export default function GroceryList() {
  return (
    <>
      {products.map((product, index) => (
        <div className="col-3" key={index}>
          <GroceryCard Target={product} />
        </div>
      ))}
    </>
  );
}
