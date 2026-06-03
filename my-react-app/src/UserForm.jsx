import React, { useState } from 'react';

const UserForm = () => {
    // Form state ko manage karne ke liye ek object
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        interest: 'React',
        message: ''
    });

    // Jab koi input change hoga
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Form submit hone par
    const handleSubmit = (e) => {
        e.preventDefault(); // Page refresh hone se rokta hai
        alert(`Form Submit Hua!\nNaam: ${formData.username}\nEmail: ${formData.email}`);
        console.log("Submit Data:", formData);
    };

    const formContainerStyle = {
        background: '#a631efff',
        padding: '20px',
        borderRadius: '12px',
        color: '#f4f3ec',
        boxShadow: '0 4px 6px -1px rgba(221, 218, 218, 0.1)'
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        borderRadius: '6px',
        border: '1px solid #cbd5e1',
        boxSizing: 'border-box'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '5px',
        fontWeight: '600',
        fontSize: '0.9rem'
    };

    const buttonStyle = {
        width: '100%',
        padding: '12px',
        backgroundColor: '#6366f1',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background 0.2s'
    };

    return (
        <div style={formContainerStyle}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Form </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label style={labelStyle}>name:</label>
                    <input 
                        style={inputStyle}
                        type="text" 
                        name="username" 
                        value={formData.username} 
                        onChange={handleChange} 
                        placeholder="enter your name ...."
                        required
                    />
                </div>

                <div>
                    <label style={labelStyle}>Email:</label>
                    <input 
                        style={inputStyle}
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="praveenjayswal625@gmail.com"
                        required
                    />
                </div>

                <div>
                    <label style={labelStyle}>Topic of Interest:</label>
                    <select 
                        style={inputStyle}
                        name="interest" 
                        value={formData.interest} 
                        onChange={handleChange}
                    >
                        <option value="React">React JS</option>
                        <option value="Node">Node JS</option>
                        <option value="CSS">Tailwind CSS</option>
                    </select>
                </div>

                <div>
                    <label style={labelStyle}>Message kya h sir:</label>
                    <textarea 
                        style={{ ...inputStyle, height: '80px', resize: 'none' }}
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange}
                        placeholder="Kuch kehna chahte ho?..."
                    />
                </div>

                <button 
                    type="submit" 
                    style={buttonStyle}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#4f46e5'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#6366f1'}
                >
                    Submit Karo
                </button>
            </form>
        </div>
    );
};

export default UserForm;
