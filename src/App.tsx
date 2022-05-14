import { useState, useEffect } from "react";
import logo from "./assets/logo.svg";
import { Card } from "./components/Card";
// import stays from "./store/stays.json";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  var stays = 0;

  fetch("./src/store/stays.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      stays = data;
    });

  return (
    <div className="mx-20">
      <nav className="navbar py-5 flex flex-col sm:flex-row justify-between">
        <img className="" src={logo} alt="windbnb-logo" />
        <div className="input">
          <button className="bg-white py-5 px-5 rounded-tl-xl rounded-bl-xl shadow-xl shadow-gray-100">
            Helsinki, Finland
          </button>
          <button className="text-gray-400 py-5 px-5 border-x shadow-xl shadow-gray-50">
            Add guests
          </button>
          <button className="bg-white py-5 px-5 rounded-tr-xl rounded-br-xl shadow-xl shadow-gray-100">
            Search
          </button>
        </div>
      </nav>
      <div className="py-10 flex justify-between">
        <h3 className="stays-label font-bold">Stays in Finland</h3>
        <div className="stays">12+ stays</div>
      </div>
      {/* <div className="bg-black opacity-20 fixed inset-0 z-50"></div> */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <span className="mx-50">
        created by <span>Firmino Massango</span> - devChallenges.io
      </span>
    </div>
  );
}

export default App;
