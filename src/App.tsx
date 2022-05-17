import { useState, useEffect } from "react";
import logo from "./assets/logo.svg";
import { Card } from "./components/Card";
import { Filter } from "./components/Filter";
import { Stay } from "./helper/Stay";
import stays from "./stores/stays.json";
import "./App.css";
import useStayStore, { StayType } from "./stores";

function App() {
  const [stay, setStays] = useState<any>(stays);
  const [isModalActive, activeModal] = useState(false);
  const [myCity, setMyCity] = useState<string>("");
  const stayStandards = useStayStore((state) => state.stay);
  var filteredStays;

  function filter() {
    activeModal(!isModalActive);
  }

  const addStay = useStayStore((state) => state.addStay);

  function newData() {
    addStay({ city: "London", maxGuests: 20 });
  }

  // stayStandards.((stay: StayType) => console.log(stay.city));

  console.log(stayStandards[0]["city"]);

  if (myCity !== null) {
    filteredStays = stays.filter(
      (stay) => stay.city === "Helsinki" && stay.maxGuests >= 5
    );
  } else {
    filteredStays = stays;
  }

  return (
    <div className="mx-5 md:mx-14">
      <button onClick={newData}>Click me</button>
      <header className="navbar py-5 flex flex-col sm:flex-row justify-between">
        <img className="" src={logo} alt="windbnb-logo" />
        <div className="pt-5 md:pt-0 flex flex-row drop-shadow">
          <button
            className="bg-white h-14 px-5 rounded-tl-xl rounded-bl-xl"
            onClick={filter}
          >
            Helsinki, Finland
          </button>
          <button
            className="bg-white h-14 border-x text-gray-400 py-5 px-5"
            onClick={filter}
          >
            Add guests
          </button>
          <button
            className="bg-white h-14 px-5 rounded-tr-xl rounded-br-xl"
            onClick={filter}
          >
            <span className="material-icons text-red-500 md-48 text-justify">
              search
            </span>
          </button>
        </div>
      </header>
      <div className="py-10 flex justify-between">
        <h3 className="stays-label font-bold">Stays in Finland</h3>
        <div className="stays">{stays.length} stays</div>
      </div>
      {isModalActive && <Filter changeCity={(myCity) => setMyCity(myCity)} />}
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
