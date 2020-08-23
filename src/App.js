import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';


function App() {

  const nayoks = ["Anwar", "Jafar", "Alamgir", "Salman", "Shuvo", "Kanchon"];

  const products = [
    {name: "Photoshop", price: "$90.99"},
    {name: "Illustrator", price: "$60.99"},
    {name: "PDF Reader", price: "$6.99"},
    {name: "Premiere", price: "$269.99"}
  ];

  // const productNames = products.map(product => product.name);

  // const nayokNames = nayoks.map(nayok => nayok);

  // var person1 = {
  //   name: "Dr. Mahfuz",
  //   job: "Singer"
  // }

  // var person2 = {
  //   name: "Eva Rahman",
  //   job: "Kokil Konthi"
  // }

  // var style = {
  //   color: "rgb(28, 205, 221)",
  //   backgroundColor: "white",
  //   borderRadius: "5px",
  //   padding: "10px"
  // }

  return (

    //   // instead of class we shoudl use className

    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 className="" style={style}>My first heading: {(2 + 3) * 5 + 25}</h1>
        <p>My First React Paragraph</p>
        <p style={{backgroundColor: "black", borderRadius: "5px"}}>{`${person1.name} ${person1.job}`}</p>
        <p>{`${person2.name} ${person2.job}`}</p> */}

        <Counter></Counter>

        <Users></Users>

        <h3>Nayoks</h3>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>

        <h3>Products</h3>
        
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>

        {
          products.map(product => <Product product={product}></Product>)
        }

        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}

        <Person name={nayoks[0]} food="Fuchka" nayika="Moushumi"></Person>
        <Person name="Jashim" food="Fuchka" nayika="Shabana"></Person>
        <Person name="Elias" food="Fuchka" nayika="Apple"></Person>
        <Person name="BappaRaz" food="Fuchka" nayika="Cheka"></Person>


      </header>
    </div>
  );



}

//components, such as Person, start with a capital letter

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      setUsers(data)
    }, []);
  })
  return (
    <div>
      <h3>Dynamic User: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name} : {user.phone}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Product(props){

  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor : "lightgray",
    height: "200px",
    width: "200px",
    float: "left"
  }

  const {name, price} = props.product;

  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  )
}


function Person(props) {

  const personStyle = {
    border: "2px solid cyan",
    margin: "10px",
    width: "400px"
  }

  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>Hero of {props.nayika}</h3>
    </div>
  )
}

export default App;
