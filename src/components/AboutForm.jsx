import React, { useState } from 'react';


export default function AboutForm() {
    const [formData, setFormData] = useState({name:"", age:5})
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }
    return (
    <div style={{background:"pink", height:"100%", fontSize:"1.2rem"}}>
        <div>
            your name is {formData.name} and your age is {formData.age}
        </div>
        <form>
            <input type="text" placeholder="Name" value={formData.name}
             onChange={handleChange} id={name}/>
        </form>
    </div>
  )
}
