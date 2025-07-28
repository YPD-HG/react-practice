import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../styles/form.css"

export default function Form({ handleFormSubmit }) {
    const navigate = useNavigate();
    const tableButtonRef = useRef();
    const [petName, setPetName] = useState('')
    const [petType, setPetType] = useState('')
    const [breed, setBreed] = useState('')
    const [yourName, setYourName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const [errors, setErrors] = useState({})

    const handlePetNameChange = (event) => {
        setPetName(event.target.value)
    }

    const handlePetTypeChange = (event) => {
        setPetType(event.target.value)
    }

    const handleBreedChange = (event) => {
        setBreed(event.target.value)
    }

    const handleYourNameChange = (event) => {
        setYourName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value)
    }

    function containsOnlyNumbersRegex(inputString) {
        return /^\d+$/.test(inputString);
    }

    const validateForm = () => {
        const newErrors = {};

        if (petName.trim().length < 3) {
            newErrors.petName = "Pet name must be at least 3 characters long!"
        }

        if (petType.trim() === '') {
            newErrors.petType = "Please select a pet type"
        }

        if (breed.trim().length < 3) {
            newErrors.breed = "Breed must be atleast 3 characters long!"
        }

        if (yourName.trim().length < 3) {
            newErrors.yourName = "Your name must be atleast 3 characters long!"
        }

        if (!email.includes('@')) {
            newErrors.email = "Invalid email format"
        }

        if (phone.length < 10 && !containsOnlyNumbersRegex(phone)) {
            newErrors.phone = "Please enter a valid 10 digit phone number"
        }

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorInForm = validateForm();
        setErrors(errorInForm);

        if (Object.keys(errorInForm).length === 0) {
            const formData = {
                petName,
                petType,
                breed,
                yourName,
                email,
                phone
            };
            handleFormSubmit(formData);
            navigate('/table'); // ✅ This should come after submission
        }
    }

    return <div className="parentDiv">
        <div className="formDiv">
            <div className="innerDiv">
                <form onSubmit={handleSubmit} action="">
                    <label htmlFor="">Pet Name</label><br />
                    <input
                        type="text"
                        placeholder="Pet Name"
                        value={petName}
                        onChange={handlePetNameChange}
                        minLength="3" required /><br />
                    <div className="content">
                        <label htmlFor="">Pet Type</label><br />
                        {errors.petName && <p className="error">{errors.petName}</p>}
                    </div>

                    <select onChange={handlePetTypeChange} name="pets" id="pets">
                        <option placeholder="">Select one ...</option>
                        <option placeholder="dog">Dog</option>
                        <option placeholder="cat">Cat</option>
                        <option placeholder="bird">Bird</option>
                        <option placeholder="fish">Fish</option>
                    </select><br />
                    <div className="content">
                        <label htmlFor="">Breed</label><br />
                        {errors.petType && <p className="error">{errors.petType}</p>}
                    </div>
                    <input
                        type="text"
                        placeholder="Breed"
                        value={breed}
                        onChange={handleBreedChange}
                        minLength="3" required /><br />

                    <div className="content">
                        <label htmlFor="">Your Name</label><br />
                        {errors.breed && <p className="error">{errors.breed}</p>}
                    </div>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={yourName}
                        onChange={handleYourNameChange}
                        minLength="3" required /><br />
                    <div className="content">
                        <label htmlFor="">Email</label><br />
                        {errors.yourName && <p className="error">{errors.yourName}</p>}
                    </div>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    /><br />
                    <div className="content">
                        <label htmlFor="">Phone</label><br />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <input
                        type="number"
                        placeholder="Phone"
                        value={phone}
                        onChange={handlePhoneChange}
                        minLength="10" required
                    /><br />
                    <div style={{ height: '15px' }} className="content">
                        <span></span>
                        {errors.phone && <p className="error">{errors.phone}</p>}
                    </div>
                    <button type="submit">Submit</button>

                    <div style={{ display: 'flex', justifyContent: 'center' }} className="content">
                        <Link ref={tableButtonRef} to="/table">See Table</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>

}