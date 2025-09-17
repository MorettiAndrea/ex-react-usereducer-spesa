export default function Target({ Target }) {
  return (
    <>
      {!Target.length ? (
        <div className="h3 text-center mt-4">Nessun elemento nel carrello</div>
      ) : (
        <div className="mt-4">
          <h3 className="text-center">Carrello</h3>
          <ul>
            {Target.map((item, index) => (
              <li key={index}>
                {item.name} - €{item.price} x {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
