import './App.css';
// import {Contact, Contact2} from "./ContactCard";
import Contact from "./ContactCard";

async function App() {
  const title = "This is a First React Application";
  const user = await fetch('https://jsonplaceholder.typicode.com/users/10');
  const getUsers = user.json().then((result) => result);
  console.log(getUsers.then((result) => result));
  // const user = [
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
  //     }
  // ];
    return (
    <>
      <div align="center">
        <h1>{title}</h1>
      </div>
      {getUsers.map((element, index) => {
        return (
        <Contact 
          key={index} 
          name={element.name} 
          email={element.email} 
          image={element.image}
          age={element.age}
          />
        );
      })}
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