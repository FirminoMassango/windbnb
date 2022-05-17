import { useState } from "react";
import useStayStore, { StayType } from "../stores";

export function Filter() {
  const [isLocationFieldActive, changeLocationStatus] = useState<boolean>(true);
  const [isGuestsFieldActive, changeGestStatus] = useState<boolean>(false);
  const [numberOfAdults, changeNumberOfAdults] = useState<number>(0);
  const [numberOfChildren, changeNumberOfChildren] = useState<number>(0);
  const [currentCity, setCurrenCity] = useState<string>("Helsinki");
  const [locationFieldStyling, setLocationFieldStyling] = useState<string>(
    "w-80 md:w-64 lg:w-96 h-16 px-5 border border-gray-700 rounded-xl"
  );
  const [guestsFieldStyling, setGuestsFieldStyling] = useState<string>(
    "w-80 md:w-64 lg:w-96 h-16 px-5 rounded-xl"
  );
  const [locationFieldTextColor, setLocationFieldTextColor] =
    useState<string>("text-gray-700");
  const [guestsFieldTextColor, setGuestsFieldTextColor] =
    useState<string>("text-gray-400");
  const addStay = useStayStore((state) => state.addStay);

  function changeStayData(data: StayType) {
    addStay(data);
  }

  const country: string = "Finland";

  function setLocationStatusToActive() {
    setLocationFieldTextColor("text-gray-700");
    setGuestsFieldTextColor("text-gray-400");
    setLocationFieldStyling(
      "w-80 md:w-64 lg:w-96 h-16 px-5 border border-gray-700 rounded-xl"
    );
    setGuestsFieldStyling("w-80 w-96 md:w-64 lg:w-96 h-16 px-5 rounded-xl");
    changeLocationStatus(true);
    changeGestStatus(false);
  }

  function setGuestsStatusToActive() {
    changeLocationStatus(false);
    changeGestStatus(true);
    setLocationFieldTextColor("text-gray-400");
    setGuestsFieldTextColor("text-gray-700");
    setLocationFieldStyling("w-80 md:w-64 lg:w-96 h-16 px-5 rounded-xl");
    setGuestsFieldStyling(
      "w-80 md:w-64 lg:w-96 h-16 px-5 border border-gray-700 rounded-xl"
    );
  }

  return (
    <div>
      <div className="bg-black opacity-30 fixed inset-0"></div>
      <div className="bg-white fixed top-0 left-0 w-screen h-96 z-2 t-0 mx-0">
        <div className="mt-14 h-16 md:pt-0 flex flex-col md:flex-row justify-center items-center drop-shadow">
          {/* Location */}
          <div
            className="bg-white h-16 w-80  md:w-64 lg:w-96 rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-bl-xl"
            onClick={setLocationStatusToActive}
          >
            <div className={locationFieldStyling}>
              <div className="uppercase text-sm mt-1 text-gray-700 font-semibold">
                Location
              </div>
              <div className={locationFieldTextColor}>
                {currentCity}, {country}
              </div>
            </div>
          </div>
          {/* Guests */}
          <div
            className="bg-white h-16 w-80 rounded-bl-xl rounded-br-xl md:rounded-bl-none md:rounded-br-none md:w-64 lg:w-96"
            onClick={setGuestsStatusToActive}
          >
            <div className={guestsFieldStyling}>
              <div className="uppercase text-sm mt-1 text-gray-700 font-semibold">
                Guests
              </div>
              <div className={guestsFieldTextColor}>
                {numberOfAdults + numberOfChildren} guests
              </div>
            </div>
          </div>
          {/* Button  */}
          <div className="bg-white w-screen md:w-80 md:w-64 lg:w-96 h-16 border-l flex md:rounded-tr-xl md:rounded-br-xl items-center justify-center fixed top-80 md:static">
            <button
              className="bg-red-500 w-36 h-12  rounded-xl flex items-center justify-center"
              onClick={() =>
                changeStayData({
                  city: currentCity,
                  maxGuests: numberOfAdults + numberOfChildren,
                  isModalActive: false,
                })
              }
            >
              <span className="material-icons text-white">search</span>
              <span className="text-white ml-2">Search</span>
            </button>
          </div>
        </div>
        {/* List of Locations  */}
        <div className="mt-20 lg:mt-15 h-16 md:pt-0 flex flex-row justify-center items-center">
          <div className="w-96">
            {isLocationFieldActive && (
              <ul className="w-56 mt-10 md:mt-0">
                <li
                  className="pl-5 py-3 hover:text-red-500 hover:cursor-pointer flex align-center"
                  onClick={() => setCurrenCity("Helsinki")}
                >
                  <span className="material-icons text-gray-500 mr-2  hover:text-red-500">
                    location_pin
                  </span>
                  <span>Helsinki, Finland</span>
                </li>
                <li
                  className="pl-5 py-3 hover:text-red-500 hover:cursor-pointer flex align-center"
                  onClick={() => setCurrenCity("Turku")}
                >
                  <span className="material-icons text-gray-500 mr-2  hover:text-red-500">
                    location_pin
                  </span>
                  <span>Turku, Finland</span>
                </li>
                <li
                  className="pl-5 py-3 hover:text-red-500 hover:cursor-pointer flex align-center"
                  onClick={() => setCurrenCity("Oulu")}
                >
                  <span className="material-icons text-gray-500 mr-2  hover:text-red-500">
                    location_pin
                  </span>
                  <span>Oulu, Finland</span>
                </li>
                <li
                  className="pl-5 py-3 hover:text-red-500 hover:cursor-pointer flex align-center"
                  onClick={() => setCurrenCity("Vaasa")}
                >
                  <span className="material-icons text-gray-500 mr-2  hover:text-red-500">
                    location_pin
                  </span>
                  <span>Vaasa, Finland</span>
                </li>
              </ul>
            )}
          </div>
          {/* Add Guests  */}
          <div className="bg-green-100 w-96 mt-56 md:mt-5 h-72 md:h-16 px-5">
            {isGuestsFieldActive && (
              <div>
                <div id="adults">
                  <h4 className="text-base md:text-lg text-gray-700 font-semibold">
                    Adults
                  </h4>
                  <p className="text-sm md:text-base text-gray-500">
                    Ages 13 or above
                  </p>
                  <div className="mt-5 flex flex-row">
                    <button
                      className="mr-5 w-8 border border-md border-gray-400 rounded-md"
                      onClick={() => changeNumberOfAdults(numberOfAdults - 1)}
                    >
                      -
                    </button>
                    <p>{numberOfAdults}</p>
                    <button
                      className="ml-5 w-8 border border-md border-gray-400 rounded-md"
                      onClick={() => changeNumberOfAdults(numberOfAdults + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="mt-5" id="children">
                  <h4 className="text-base md:text-lg text-gray-700 font-semibold">
                    Children
                  </h4>
                  <p className="text-sm md:text-base text-gray-500">
                    Ages 2 - 12
                  </p>
                  <div className="mt-5 flex flex-row">
                    <button
                      className="mr-5 w-8 border border-md border-gray-400 rounded-md"
                      onClick={() =>
                        changeNumberOfChildren(numberOfChildren - 1)
                      }
                    >
                      -
                    </button>
                    <p>{numberOfChildren}</p>
                    <button
                      className="ml-5 w-8 border border-md border-gray-400 rounded-md"
                      onClick={() =>
                        changeNumberOfChildren(numberOfChildren + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Just an empty space */}
          <div className="w-96"></div>
        </div>
      </div>
    </div>
  );
}
