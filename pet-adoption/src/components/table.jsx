import { useNavigate } from "react-router-dom"
import "../styles/table.css"

function TableContent({ pets }) {
    console.log("I am in TableContent now!!");

    console.log("pets inside table.jsx TableContent() : ", pets);

    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Pet Name</th>
                        <th>Pet Type</th>
                        <th>Breed</th>
                        <th>Adopter Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((pet, index) => (
                        <tr key={index}>
                            <td>{pet.petName}</td>
                            <td>{pet.petType}</td>
                            <td>{pet.breed}</td>
                            <td>{pet.yourName}</td>
                            <td>{pet.email}</td>
                            <td>{pet.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default function Table({ pets }) {
    // console.log("pets in table.jsx Table : ", pets);

    let navigate = useNavigate();

    function goBack() {
        navigate('/')
    }

    console.log("is pets reaching here? : ", pets);


    return <>
        <TableContent pets={pets} />
        <h2 style={{ color: "blue" }}>Table</h2>
        <button onClick={goBack}>Go Back</button>
    </>
}