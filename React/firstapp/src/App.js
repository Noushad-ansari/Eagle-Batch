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
import Form from './Components/Form/Form';
import LifeCycleA from './Components/LifeCycle/LifeCycleA';
import ParentComp from './Components/PureComponent/ParentComp';
import Refs from './Components/Refs/Refs';
import FRParentInput from './Components/ForwardRefs/FRParentInput';
import PortalDemo from './Components/Portal/PortalDemo';
import ParentPortal from './Components/Portal/ParentPortal';
import ClickCounter from './Components/HOC/ClickCounter';
import HoverCLick from './Components/HOC/HoverClick';
import CompA from './Components/ContextAPI/CompA';
import ApiCall from './Components/http/ApiCall';
import ApiPost from './Components/http/ApiPost';

function App() {
  const adress = {
    add: "kota rajasthan"
  }
  return (
    <>
      {/* Compostion of component */}

      <Nav />
      {/* <ApiCall/> */}
      <ApiPost/>
      {/* <CompA/> */}
      {/* <ClickCounter name = "john" age= {25}/>
      <HoverCLick name = "juned"/> */}
      {/* <ParentPortal/> */}
      {/* <PortalDemo name="prop ka nam" >
        hello Poratal Bhaiya
      </PortalDemo> */}
      {/* </Refs> */}
      {/* <FRParentInput/> */}
      {/* <ParentComp/> */}
      {/* <LifeCycleA /> */}
      {/* <Form/> */}
      {/* <ModuleCss/> */}
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
