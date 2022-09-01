import React from 'react';
import './App.css';

import FunComp from './Components/Comps/FunComp'
import Nav from "./Components/Nav"
import Slider from "./Components/Slider"
import ClassComp from './Components/Comps/ClassComp';

import ParentClass from './Components/Props/ParentClass';
import GreetState from './Components/States/GreetState';
import FuncState from './Components/States/FuncState';
import SetState from "./Components/States/SetState"
import FunClick from './Components/EventHandling/FunClick';
import ClassClick from './Components/EventHandling/ClassClick';
import EventBind from './Components/Event-Binding/EventBind';
import ControlRendering from './Components/Conditional-Rendering/ControlRendering';
import ListsRendering from './Components/ListRendering/ListsRendering';
import ModuleCss from './Components/Stylesheets/ModuleCss';

function App() {
  const adress = {
    add: "kota rajasthan"
  }
  return (
    <>
      {/* Compostion of component */}

      <Nav />

<ModuleCss/>
      {/* <ListsRendering /> */}
      {/* <ControlRendering/> */}
      {/* <EventBind /> */}
      {/* <ClassClick /> */}
      {/* <FunClick /> */}
      {/* <SetState/> */}
      {/* <FuncState/> */}
      {/* <GreetState/> */}
      {/* <ParentClass/> */}
      {/* <Slider/> */}
      {/* <ClassComp/> */}

      {/* <ParentFunc myAdress = {}  /> */}
    </>
  );
}

export default App;
