import logo from './logo.svg';
import './App.css';

function App() {
  // var person = {
  //   firstName :'Mahmudur',
  //   lastName :'Rahman'
  // }
  //  var highlight ={
  //   color :'red',
  //   backgroundColor:'green'
  // }
  return (
  
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <h1 className='' style={highlight}>My Name is - {person.firstName+" "+person.lastName}</h1>
        <p style={{color:'red'}}>My First React Paragraph</p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <p>React is Fun</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Person() {
  const personStyle = {
    border:'2px solid yellow',
    margin:'10px'
  }
  return (
    

    <div style={personStyle}>
      <h1>Name: Mahmudur Rahman</h1>
     <h1> Age: 22</h1>
     <h1>Club:Real Madrid</h1>

    </div>

  )
  
}

export default App;
