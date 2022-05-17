import { useState } from "react";
import { Stay } from "../helper/Stay";
import useStayStore, { StayType } from "../stores";

// interface Stay {
//   // city: string;
//   // country: string;
//   superHost: boolean;
//   title: string;
//   rating: number;
//   type: string;
//   beds: number | null;
//   photo: string;
// }

export function Filter(props: string) {
  const [isLocationFieldActive, changeLocationStatus] = useState<boolean>(true);
  const [isGuestsFieldActive, changeGestStatus] = useState<boolean>(false);
  const [numberOfAdults, changeNumberOfAdults] = useState<number>(0);
  const [numberOfChildren, changeNumberOfChildren] = useState<number>(0);
  const numberOfGuests = numberOfAdults + numberOfChildren;
  const [currentCity, setCurrenCity] = useState<string>("Helsinki");
  const stayStandards = useStayStore((state) => state.stay);
  const addStay = useStayStore((state) => state.addStay);

  function changeStayData(data: StayType) {
    addStay(data);
  }

  const country: string = "Finland";

  // props.stay.filter((stay) => stay.city === "Helsinki");

  function setLocationStatusToActive() {
    changeLocationStatus(true);
    changeGestStatus(false);
  }

  function setGuestsStatusToActive() {
    changeLocationStatus(false);
    changeGestStatus(true);
  }

  return (
    <div>
      <div className="bg-black opacity-30 fixed inset-0"></div>
      <div className="bg-white fixed top-0 left-0 w-screen h-96 z-2 t-0 mx-0">
        <div className="mt-14 h-16 md:pt-0 flex flex-col lg:flex-row justify-center drop-shadow">
          {/* Location */}
          <div
            className="bg-white w-96 rounded-tl-xl rounded-bl-xl"
            onClick={setLocationStatusToActive}
          >
            {isLocationFieldActive ? (
              <div className="w-96 h-16 px-5 border border-gray-700 rounded-xl">
                <div className="uppercase text-sm mt-1 text-gray-700 font-semibold">
                  Location
                </div>
                <div className="text-gray-700">
                  {currentCity}, {country}
                </div>
              </div>
            ) : (
              <div className="bg-white w-96 px-5 rounded-tl-xl rounded-bl-xl">
                <div className="uppercase text-sm mt-1 text-gray-700 font-semibold">
                  Location
                </div>
                <div className="text-gray-400">
                  {currentCity}, {country}
                </div>
              </div>
            )}
          </div>
          {/* Guests */}
          <div className="bg-white w-96" onClick={setGuestsStatusToActive}>
            {isGuestsFieldActive ? (
              <div className="w-96 h-16 px-5 border border-gray-700 rounded-xl">
                <div className="uppercase text-sm mt-1 text-gray-700 font-semibold">
                  Guests
                </div>
                <div className="text-gray-700">
                  {numberOfAdults + numberOfChildren} guests
                </div>
              </div>
            ) : (
              <div className="w-96 h-16 px-5 rounded-xl">
                <div className="uppercase text-sm mt-1 text-gray-700 font-semibold">
                  Guests
                </div>
                <div className="text-gray-400">Add guests</div>
              </div>
            )}
          </div>
          {/* Button  */}
          <div className="bg-white w-96 h-16 border-l flex rounded-tr-xl rounded-br-xl items-center justify-center">
            <button
              className="bg-red-500 w-36 h-12 rounded-xl flex items-center justify-center"
              onClick={() =>
                changeStayData({
                  city: currentCity,
                  maxGuests: numberOfAdults + numberOfChildren,
                })
              }
            >
              <span className="material-icons text-white">search</span>
              <span className="text-white ml-2">Serach</span>
            </button>
          </div>
        </div>
        {/* List of Locations  */}
        <div className="mt-5 h-16 md:pt-0 flex flex-row justify-center">
          <div className="w-96">
            {isLocationFieldActive && (
              <ul>
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
          <div className="w-96 h-16 px-5">
            {isGuestsFieldActive && (
              <div>
                <div id="adults">
                  <h4 className="text-lg text-gray-700 font-semibold">
                    Adults
                  </h4>
                  <p className="text-base text-gray-500">Ages 13 or above</p>
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
                  <h4 className="text-lg text-gray-700 font-semibold">
                    Children
                  </h4>
                  <p className="text-base text-gray-500">Ages 2 - 12</p>
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
