import { Link } from 'react-router-dom';
import './App.css';
import CssTypes from './cssTypes';

function App() {
  const name = "Candy"; // Passing it as prop
  const name1 = <h1>Candyyy</h1>
  const age = 27;
  const email = <h2>candy@xyz.com</h2>
  const user = (
    <div>
      {name1}
      {age}
      {email}
    </div>
  );
  return (
    <div className='App'>
      Hello, {name}
      {name1}
      {user}
      {User()} {/* 1 way of Calling a component */}
      <User/> {/* Another way of Calling a component */}
      <Details name="Vamshi" age="20" email = "Vamz@xyz.com"/>
      <Details name="Naruto" age="18" email = "uzumaki@xyz.com"/>
      <Details name="Tanjiro" age="20" email = "mjismuzan@xyz.com"/>
      <Job role = "SDE1" company ="Amazon" salary = {100000}/>
      <Job role = "MLE" company ="PhiData" salary = {150000}/>
      <Job role = "PDE1" company ="Phenom" salary = {90000}/>      
      {/* CSS in React */}
      <div className='box'>
        Hello
      </div>
      {/** Ternary Operator */}
      <Tern age={15}/>
    </div>

  );
}

const User = () => { //JSX Element aka component
  return <h1>Merry Christmas!</h1>
}

const Details = (props) => { //Passing props in a component
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  )
}

const Job = (props) => {
  return (
    <div>
      <h3>{props.company}</h3>
      <h3>{props.role}</h3>
      <h3>{props.salary}</h3>
    </div>
  )
}

const Tern = (props) => {
  return(
    <div>{props.age >= 18 ? <h1>Over Age</h1>:<h1>Under Age</h1>}</div>
  );
}

export default App;