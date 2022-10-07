import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Jeanmarcos";
  let varname = null;

  if (name == "Jeanmarcos") {
    varname = (<p> this is jeanmarcos </p>);
  }

  var namecheck = (name == "Jeanmarcos") ? (<p>hi my name is {name}</p>) : (<p>my  name is not {name}</p>);

  const buttonclick = () => {
    console.log("I clicked the button");
  }

  const onChangeFunction = (event) => {
    console.log(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>hi my name is {name}</p>

        {varname}

        {namecheck}

        <button onClick={buttonclick}>I am a button</button>

        <input type="text" onChange={onChangeFunction}/>

      </header>
    </div>
  );
}

export default App;
