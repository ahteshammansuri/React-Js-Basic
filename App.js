import './App.css';
// import {Contact, Contact2} from "./ContactCard";
import Contact from "./ContactCard";
import { useState, useEffect } from 'react';

function App() {
  const title = "This is a First React Application";
  // const user = await fetch([
  //     {
  //         image: "https://via.placeholder.com/100",
  //         name: 'John Doe',
  //         email: 'john@example.com',
  //         age: 30,
  //     },
  //     {
  //         image: "https://via.placeholder.com/100",
  //         name: 'Mike Smith',
  //         email: 'mike@example.com',
  //         age: 40,
  //     },
  //     {
  //       image: "https://via.placeholder.com/100",
  //       name: 'den joke',
  //       email: 'den@example.com',
  //       age: 50,
  //     },
  // ]);

  const[users,setUsers] = useState([]);
  const [newData,setNewData] = useState(0);

  useEffect(() => {
    const user = fetch('https://randomuser.me/api/?results=5');
    user.then(response => response.json()).then(result => {
      setUsers(result.results);
    });
  },[newData]);
    // console.log(getUsers.then((result) => result.results));

    return (
      <>
      <div align="center">
        <h1>{title}</h1>
      </div>
    
    {
      users.length === 0  ? (<h1>loading....</h1>) : (
        <>
       { users.map((element, index) => {
          return (
          <Contact 
            key={index} 
            name={element.name.first} 
            email={element.email} 
            image={element.picture.large} 
            age={element.dob.age}
            deleteUserCell = {element.cell}
            />
            );
          })
        }
          <button onClick={ () => setNewData(newData + 1)} >new Data</button>
          </>
      )
    }

    
    </>
    );
    
  }

export default App;

// const title = "This is a First React Application";
//   const user = {
//     name: 'John Doe',
//     image: "path",
//     age: 30,
//   };
//   const[data,setData] = useState("");
//   return (
//     <>
//     {console.log(data)}
//     <div>
//       <h1 align="center" style = {{fontSize : "30px",color : "red"}}>{title}</h1>
//       {
//         data.length  !== 0 ? (<button onClick={() => setData("")}>hidden Name</button>) : (<button onClick = {() => setData(user.name)}>show Name</button>) 
//       }
//       {
//  data.length > 0 ? (
//   <div className="contact-card">
//   <h4>Name : {data}</h4>
//     </div>
//  ) : ("")
//       }

 
//     </div>
//       </>
//   );