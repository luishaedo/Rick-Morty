import './App.css';
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Detail from './components/Detail/Detail'
import Nav from './components/Nav/Nav.jsx';
import Error from './components/Error/Error';
import  Form from './components/Form/Form.jsx'
import { Routes , Route, useLocation, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react' 
import { Favorites } from './components/Favorites/Favorites';



function App() {

  const [characters, setCharacters] = useState([]);

  function onClose(id) {
    setCharacters(characters.filter((element) => element.id !== id));
  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          characters.find((e) => e.id === data.id) === undefined
            ? setCharacters((characters) => [...characters, data])
            : alert("Ese personaje ya lo cargaste!");
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });

  }

  function random() {
    let randomId = Math.floor(Math.random() * 826);
    onSearch(randomId);
  }

  const location  = useLocation();

  const navigate = useNavigate();

  const [access, setAccess] = useState(false);
  const username = 'ejemplo@gmail.com';
  const password = '1password';

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
}
  useEffect(() => {
    !access && navigate('/');
    }, [access]);

  function logOut(){
    setAccess(false);

  }  

  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname !=="/"} && <Nav onSearch={onSearch} random={random} logOut={logOut}/>
      
      <Routes>
        <Route exact path = "/" element ={<Form login={login}/>} />
        <Route exact path ='/home' element = {<Cards characters={characters} onClose={onClose}/>} />
        <Route exact path = '/about' element = {<About />} />  
        <Route exact path = '/favorites' element = {<Favorites />} />  
        <Route exact path = '/detail/:detailId' element = {<Detail />} />
        <Route path ='*' element = {<Error />} /> 

      </Routes>
    </div>
  )
}

export default App
