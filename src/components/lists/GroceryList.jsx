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
      {products.map((product, index) => (
        <div className="col-3" key={index}>
          <GroceryCard Target={product} />
        </div>
      ))}
    </>
  );
}
