import { useState, useEffect } from "react";
import logo from "./assets/logo.svg";
import { Card } from "./components/Card";
import allStays from "./store/stays.json";
import "./App.css";

function App() {
  const [stays, setStays] = useState(allStays);

  // useEffect(setStays(stay));

  console.log(allStays.filter((stay) => stay.city === "Helsinki"));
  // console.log(
  //   stays.map(
  //     ({ title, rating, type, superHost }) => title,
  //     rating,
  //     type,
  //     superHost
  //   )
  // );
  // console.log();

  return (
    <div className="mx-5 md:mx-20">
      <nav className="navbar py-5 flex flex-col sm:flex-row justify-between">
        <img className="" src={logo} alt="windbnb-logo" />
        <div className="pt-5 md:pt-0 flex flex-row drop-shadow">
          <button className="bg-white py-5 px-5 rounded-tl-xl rounded-bl-xl">
            Helsinki, Finland
          </button>
          <button className="bg-white border-x text-gray-400 py-5 px-5">
            Add guests
          </button>
          <button className="bg-white py-5 px-5 rounded-tr-xl rounded-br-xl">
            <span className="material-icons text-red-500 md-48 text-justify">
              search
            </span>
          </button>
        </div>
      </nav>
      <div className="py-10 flex justify-between">
        <h3 className="stays-label font-bold">Stays in Finland</h3>
        <div className="stays">{stays.length}+ stays</div>
      </div>
      {/* <div className="bg-black opacity-20 fixed inset-0 z-50"></div> */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {allStays.map((stays) => {
          return (
            <Card
              photo={stays.photo}
              superHost={stays.superHost}
              type={stays.type}
              beds={stays.beds}
              rating={stays.rating}
              title={stays.title}
            />
          );
        })}
      </div>
      <div className="mt-20">
        <span>
          created by <span>Firmino Massango</span> - devChallenges.io
        </span>
      </div>
    </div>
  );
}

export default App;
