function App() {
  return <div style={{ display: "flex" }}>
    <MenuCard img="https://kirbiecravings.com/wp-content/uploads/2020/02/souffle-omelette-14.jpg" title="1. Galactic Sunrise Breakfast Burrito" para="Start your day with fluffy eggs, savory bacon.
          and melted cheese, all wrapped up in a warm
          tortilla. Served with a side of cosmic potatoes." />

    <MenuCard
      img="https://s3.ap-southeast-1.amazonaws.com/localiiz-prod/uploads/gram-cafe-pancakes-best-japanese-souffle-pancakes-in-hong-kong-feb-2023.jpg?mtime=20230220141835&focal=none"
      title="2. Lunar Lava Pancakes"
      para="Stacked high and drizzled with molten maple syrup. Served with asteroid berries and a sprinkle of stardust sugar."
    />

    <MenuCard
      img="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
      title="3. Martian Melt Sandwich"
      para="Grilled to perfection with layers of intergalactic cheese and smoked nebula ham. Comes with plasma fries."
    />

    <MenuCard
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHg6RirdtIJIaCwRQEiJd6skieYQGCreJI-g&s"
      title="4. Saturn Rings Salad"
      para="A crunchy orbit of lettuce, comet croutons, and planetary veggies, dressed in cosmic vinaigrette."
    />

  </div>
}

function MenuCard(props) {
  return <div style={{
    backgroundColor: "#636363",
    width: "315px",
    height: "440px",
    borderRadius: "30px",
    margin: "20px"
  }}>
    <div style={{ display: "flex", flexDirection: "column", padding: "30px", justifyContent: "center" }}>
      <img style={{ height: "250px", width: "250px", borderRadius: "6px" }} src={props.img} alt="Breakfast-image" />
      <div>
        <h4 style={{ color: "#4daadf", marginBottom: "0" }}>{props.title}</h4>
        <p style={{ marginTop: "2px", color: "#FFFFFF" }}>{props.para}</p>
      </div>
    </div>
  </div>
}

export default App
