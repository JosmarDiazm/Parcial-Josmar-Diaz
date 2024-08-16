import { useState } from 'react';
import './App.css'
import Card from "./Components/Card"
function App() {
  const [sport, setSport] = useState({name: "", sportFav: ""});
  const [showCard, setShowCard] = useState(false);
  const [showError, setShowError] = useState(false)

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(event)
    
    if (sport.name.length < 3) {
      setShowError(true);
      
    }else if(sport.name.charAt(0) == " "){
      setShowError(true);

    }else if(sport.sportFav.length < 6){
      setShowError(true);

    }
    else{
     
      setShowCard(true);
      setShowError(false);
    }

  }
  const onChangeName =(event) => {
    setSport({...sport, name: event.target.value});
    setShowCard(false);
  };
  const onChangeSport =(event) => {
    setSport({...sport, sportFav: event.target.value})
    setShowCard(false);
  };

  return (
    <div className='App'>
      <h1>Deporte favorito</h1>
      <form className='form' onSubmit={onSubmitHandler}>
        <label htmlFor="">Nombre</label>
        <input type="text" onChange={onChangeName}/>
        <label htmlFor="">Deporte</label>
        <input type="text" onChange={onChangeSport}/>
        <button className='send-btn' type='submit'>Enviar</button>
      </form>
      {showCard == true ? <Card name={sport.name} sportFav={sport.sportFav}/> : ""}
      {showError == true ? <h4>Por favor chequea que la informacion sea correcta</h4>: ""}
    </div>
  );
}

export default App;
