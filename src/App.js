import React from 'react';
import './App.css';
import './delivery man.mp3';
import './food delivery man.mp3';
import './food delivery man2.mp3';
import './who is it.mp3';
import './'
import Jason from './Jason';
import Jack from './Jack';
import Tom from './Tom';

import {
  BrowserRouter,
  Route,
  Link
} from "react-router-dom";

// 多import一个文件
// function title = {
  // return (
 // <div className="title1">Strangers knocking the door</div>
  // icon:'https://cdn3.vectorstock.com/i/1000x1000/71/77/voice-command-control-with-sound-waves-icon-vector-12087177.jpg',
  // );
// }

function App() { 
  return (
  <BrowserRouter>

    <div className="App">
  <Route exact path ="/">
    <HomePage />
    </Route>
    <Route exact path ="/Jack">
      <Jack />
    </Route>
    <Route exact path ="/Jason">
      <Jason />
    </Route>
    <Route exact path ="/Tom">
      <Tom />
    </Route>
      </div>
    </BrowserRouter>
  );
}

function HomePage() {
  return (
  <div className = "Home">
  <h1>
    ALONE AT HOME </h1>
    <div className="Content">
    <p>Don't open the door. Instead, let us help you with voices. </p>
      </div>
<form>
  <label>
    <input className="input" type="" name="name"/>
    </label>
</form>
<Link to="/Jason">
    <button class="button">Delivery man knocking on the door</button></Link>
<Link to="/Jack">
<button class="button button2">Have to open the door?</button> </ Link>
<Link to="/Tom">
<button class="button button3">other helpful noises</button></Link>
<Link to="/Help">
<button class="button button5">Click and we'll call the police for you</button></Link>
</div>
  );
}

export default App;
