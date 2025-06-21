import { useState } from 'react'    
const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        department: ''
    });
    const handleChange=(e)=>{
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,        
            [name]: value
        }));
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} required />
            <label htmlFor="email">Email:</label>
            <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} required />
            <label htmlFor="password">Password:</label>             
            <input type='password' id='password' name='password' value={formData.password} onChange={handleChange} required />
            <label htmlFor="department">Department:</label> 
            <select id='department' name='department' value={formData.department} onChange={handleChange} required>
                <option value="">Select Department</option>
                <option value="HR">HR</option>
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
            </select>
            <button type='submit'>Submit</button>
        </form>
      
    </div>
  )
}

export default Form
