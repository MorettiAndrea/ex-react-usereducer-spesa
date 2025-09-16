export default function GroceryCard(Target) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <p className="card-text">{Target.name}</p>
          <p className="card-text">{Target.price}</p>
        </div>
      </div>
    </>
  );
}
