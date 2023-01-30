// import "./App.css";

import { useState } from "react";

function Contact(props) {
    // console.log(props);
    const [ageData, setAge] = useState(false);
    return (
        <div className="contact-card">
            <img src={props.image} alt="profile"></img>
            <div className="user-contact-card">
                <p>Name : {props.name}</p>
                <p>Email : {props.email}</p>
                <button onClick={() => setAge(!ageData)}>Show Age</button>
                { ageData ? <p>age : {props.age}</p> : null }
            </div>
        </div>
    );
};

export default Contact;

// function Contact2() {
//     return (
//         <h1>Hello From Contact2 Components</h1>
//     );
// };

// export {Contact, Contact2};