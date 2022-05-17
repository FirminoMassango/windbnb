import { useState, useEffect } from "react";
import { Card } from "./components/Card";
import { Filter } from "./components/Filter";
import stays from "./stores/stays.json";
import logo from "./assets/logo.svg";
import "./App.css";

import useStayStore from "./stores";

function App() {
  const [city, setCity] = useState<string>("");
  const [maxGuests, setNumberOfGuests] = useState<number>(0);
  const stayStandards = useStayStore((state) => state.stay);
  const isModalActive = stayStandards[0]["isModalActive"];
  const addStay = useStayStore((state) => state.addStay);
  var filteredStays;

  useEffect(() => {
    setCity(stayStandards[0]["city"]);
    setNumberOfGuests(stayStandards[0]["maxGuests"]);
  });

  function enableFilter() {
    addStay({
      city: stayStandards[0]["city"],
      maxGuests: stayStandards[0]["maxGuests"],
      isModalActive: true,
    });
  }

  // By default the city value is set to an empty string and the maxGuests to 0
  if (city !== "") {
    filteredStays = stays.filter(
      (stay) => stay.city === city && stay.maxGuests >= maxGuests
    );
  } else {
    filteredStays = stays;
  }

  return (
    <div className="mx-5 md:mx-14">
      <header className="navbar py-5 flex flex-col sm:flex-row justify-between">
        <img className="" src={logo} alt="windbnb-logo" />
        <div className="pt-5 md:pt-0 flex flex-row drop-shadow">
          <button
            className="bg-white h-14 px-5 text-xs md:text-base rounded-tl-xl rounded-bl-xl"
            onClick={enableFilter}
          >
            Helsinki, Finland
          </button>
          <button
            className="bg-white h-14 text-xs md:text-base border-x text-gray-400 py-5 px-5"
            onClick={enableFilter}
          >
            Add guests
          </button>
          <button
            className="bg-white h-14 text-xs md:text-base px-5 rounded-tr-xl rounded-br-xl"
            onClick={enableFilter}
          >
            <span className="material-icons text-red-500 md-48 text-justify">
              search
            </span>
          </button>
        </div>
      </header>
      <div className="py-10 flex justify-between">
        <h3 className="stays-label font-bold">Stays in Finland</h3>
        <div className="stays">{filteredStays.length} stays</div>
      </div>
      {/* Enabling the filter (popup/modal) when its status is true  */}
      {isModalActive && <Filter />}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5 sm:gap-10 content-center">
        {filteredStays.map((stay, index) => {
          return (
            <Card
              key={index}
              photo={stay.photo}
              superHost={stay.superHost}
              type={stay.type}
              beds={stay.beds}
              rating={stay.rating}
              title={stay.title}
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
