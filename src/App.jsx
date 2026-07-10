
function App() {
  const lures = [
    {
      id: 1,
      name: "Rat-L-Trap",
      type: "Crankbait",
      color: "Chrome/Blue",
      size: "1/2 oz",
      brand: "Bill Lewis",
      condition: "Good",
      favorite: true,
      notes: "Great for cold front conditions",
    },
    {
      id: 2,
      name: "Ol' Monster",
      type: "Spinnerbait",
      color: "Chartreuse/White",
      size: "3/8 oz",
      brand: "Booyah",
      condition: "Worn",
      favorite: false,
      notes: "Blade needs replacing",
    },
    {
      id: 3,
      name: "Senko",
      type: "Soft Plastic",
      color: "Green Pumpkin",
      size: "5 in",
      brand: "Gary Yamamoto",
      condition: "Good",
      favorite: true,
      notes: "Wacky rig, slow fall",
    },
  ]


  return (
    <div style={{ padding: "2rem" }}>
      <h1>Tackle Box</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {lures.map((lure) => (
          <div key={lure.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              width: "200px",
            }}
          >
            <h3>{lure.name} {lure.favorite ? "⭐" : ""}</h3>
            <p><strong>Type:</strong> {lure.type}</p>
            <p><strong>Color:</strong> {lure.color}</p>
            <p><strong>Size:</strong> {lure.size}</p>
            <p><strong>Brand:</strong> {lure.brand}</p>
            <p><strong>Condition:</strong> {lure.condition}</p>
            <p><strong>Favorite:</strong> {lure.favorite ? "Yes" : "No"}</p>
            <p><strong>Notes:</strong> {lure.notes}</p>
          </div>
        ))}
      </div>
    </div> 
  )
}

export default App
