import React, { useState } from 'react';

/**
 * React Re-render Concept (Hinglish Guide)
 * 
 * 1. State Change: Jab state badalti hai, React component ko firse chalata hai.
 * 2. Props Change: Agar Parent se naye props aate hain, tab bhi re-render hota hai.
 * 3. Parent Re-render: Agar Parent re-render hua, toh uske saare Children default mein re-render hote hain.
 */

const RerenderConcept = () => {
    console.log("Parent (RerenderConcept) Render Ho Raha Hai!");

    const [count, setCount] = useState(0);
    const [name, setName] = useState("Praveen");

    return (
        <div style={{ padding: '20px', border: '2px solid #ccc', borderRadius: '10px', margin: '20px' }}>
            <h1> Re-render 🚀</h1>
            <p>Bhai, is file mein hum samjhenge ki React kab kab UI ko update re-render karta hai aur kaise</p>

            {/* Example 1: State Change Trigger */}
            <section style={{ marginBottom: '30px', background: '#f9f9f9', padding: '15px' }}>
                <h3> 1: State Change useState</h3>
                <p>Jab hum button click karenge count state change hogi aur ye pura Parent component re-render hoga samghe babu</p>
                <p>Current Count: <strong>{count}</strong></p>
                <button onClick={() => setCount(count + 1)}>Start Count</button>
            </section>

            {/* Example 2: Props Change */}
            <section style={{ marginBottom: '30px', background: '#1aadebff', padding: '15px' }}>
                <h3> 2: Child with Props</h3>
                <p>Niche ek Child component hai Jab hum Input mein likhte hain name state change hoti hai aur Child ko naya prop milta hai</p>
                <input 
                    type="text" 
                    placeholder="Apna naam likho..." 
                    onChange={(e) => setName(e.target.value)} 
                />
                <ChildComponent user={name} />
            </section>

            {/* Example 3: Simple Component (No Props) */}
            <section style={{ background: '#fff0f0', padding: '15px' }}>
                <h3> 3: Parent re-render, Simple Child ka kya?</h3>
                <p>Is child ko koi props nahi mil rahe fir bhi ye re-render hoga kyunki iska Parent RerenderConcep re-render ho raha hai</p>
                <SimpleChild />
            </section>
        </div>
    );
};

// Child Component that receives props
const ChildComponent = ({ user }) => {
    console.log("   --- ChildComponent (with props) Render Hua! ---");
    return (
        <div style={{ marginTop: '10px', color: 'blue' }}>
            <h4>Hello, {user} 👋</h4>
            <small>Console check karo, ye prop change hone par render hota hai</small>
        </div>
    );
};

// Simple Child Component (no props)
const SimpleChild = () => {
    console.log("   --- SimpleChild (No props) Render Hua! ---");
    return (
        <div style={{ marginTop: '10px', color: 'red' }}>
            <p>Main bilkul simple hoon, par main bhi render hota hoon har baar 😅</p>
        </div>
    );
};

export default RerenderConcept;
