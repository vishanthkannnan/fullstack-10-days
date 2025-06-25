import {useState} from 'react';
const Form =() => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        department: ''
    });
    const handleChange=(e)=>{
        const {name, value} = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }
        ))
        // console.log(formData);
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <br/>
                <label htmlFor="">Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                <br/>
                <label htmlFor="">Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                <br/>
                <label htmlFor="">Department:</label>
                <select name="department" value={formData.department} onChange={handleChange}>
                    <option value="">Select Department</option>
                    <option value="HR">HR</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Marketing">Marketing</option>
                    </select>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Form;
