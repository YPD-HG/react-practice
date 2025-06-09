import { useState } from "react"
import { MenuCard } from "./menu"

function App() {
  let [menu, setMenu] = useState([]);

  const menuCardComponents = menu.map(dish => <MenuCard
    img={dish.img}
    title={dish.title}
    para={dish.para}
  />)

  function addMenu() {
    setMenu([...menu,])
  }

  return <div>
    <button style={{ cursor: "pointer" }} onClick={addMenu}>Add Menu</button>
    <div style={{ display: "flex" }}>
      {menuCardComponents}
    </div>
  </div>
}

export default App