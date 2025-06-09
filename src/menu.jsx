export function MenuCard(props) {
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