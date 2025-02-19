import React from "react";
import "./App.css";
import "./index.css";
import {Header,Footer} from './components';
import {Allroutes} from './routes/Allroutes';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Allroutes></Allroutes>
      <Footer></Footer>
    </div>
  );
}

export default App;
