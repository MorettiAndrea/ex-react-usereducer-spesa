import GroceryCard from "../cards/groceryCard";

export default function GroceryList() {
  const products = [
    { name: "Mela", price: 0.5 },
    { name: "Pane", price: 1.2 },
    { name: "Latte", price: 1.0 },
    { name: "Pasta", price: 0.7 },
  ];
  return (
    <>
      <div className="container">
        <div className="my-3">Lista della spesa</div>
        <div className="row">
          {products.map((product) => (
            <div className="col-4" key={product.index}>
              <GroceryCard Target={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
