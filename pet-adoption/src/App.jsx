import Header from "./components/header"
import Form from "./components/form"
import Table from "./components/table"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./styles/App.css"
import { useState } from "react"

export default function App() {
  const [pets, setPets] = useState([]);

  const handleFormSubmit = (formData) => {
    setPets(prev => [...prev, formData]);
  }

  console.log("Pet Info : ", pets);

  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutForm handleFormSubmit={handleFormSubmit} />} />
        <Route path="/table" element={<LayoutTable pets={pets} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </>
}

function LayoutForm({ handleFormSubmit }) {
  return <div>
    <Header />
    <div style={{ height: "80vh" }}>
      <Form handleFormSubmit={handleFormSubmit} />
    </div>
  </div>
}

function LayoutTable({ pets }) {
  console.log("pets inside App.jsx LayoutTable : ", pets);
  return <div>
    <Header />
    <div style={{ height: "80vh" }}>
      <Table pets={pets} />
    </div>
  </div>
}

function ErrorPage() {
  return <div>
    <h4 style={{ color: 'red' }}>Sorry, Page not found!</h4>
  </div>
}
