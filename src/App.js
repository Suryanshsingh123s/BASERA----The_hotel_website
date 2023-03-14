import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
// import Header from "./components/Header";

import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";
import Book from "./pages/Book";


function App() {
  return (
    <>
    {/* <Header /> */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/book" component={Book}/>
        <Route component={Error} />
      </Switch>
    
    </>
  );
}

export default App;
