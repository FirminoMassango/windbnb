import { useState } from "react";

export function Modal() {
  const [isLocationFieldActive, changeLocationStatus] = useState<boolean>(true);
  const [isGuestsFieldActive, changeGestStatus] = useState<boolean>(false);
  const [numberOfAdults, changeNumberOfAdults] = useState<number>(0);

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
        <div className="mt-14 h-16 md:pt-0 flex flex-row justify-center drop-shadow">
          <div
            className="bg-white w-96 rounded-tl-xl rounded-bl-xl"
            onClick={setLocationStatusToActive}
          >
            {isLocationFieldActive ? (
              <div className="w-96 h-16 px-5 border border-gray-700 rounded-xl">
                <div>Location</div>
                <div>Helsinki, Finland</div>
              </div>
            ) : (
              <div className="bg-white w-96 px-5 rounded-tl-xl rounded-bl-xl">
                <div>Location</div>
                <div>Helsinki, Finland</div>
              </div>
            )}
          </div>
          <div className="bg-white w-96" onClick={setGuestsStatusToActive}>
            {isGuestsFieldActive ? (
              <div className="bg-white w-96  h-16 border text-gray-400 text-left py-5 px-5 border-gray-700 rounded-xl">
                Add guests
              </div>
            ) : (
              <button className="bg-white w-96  h-16 border-x text-gray-400 py-5 px-5">
                Add guests
              </button>
            )}
          </div>
          <div className="bg-white w-96 h-16 flex rounded-tr-xl rounded-br-xl items-center justify-center">
            <button className="bg-red-500 w-36 h-12 py-1 px-5 rounded-xl flex items-center justify-center">
              <span className="material-icons text-white md-48 text-justify">
                search
              </span>
              <span className="text-white ml-2">Serach</span>
            </button>
          </div>
        </div>
        <div className="mt-5 h-16 md:pt-0 flex flex-row justify-center">
          <div className="w-96 h-16 px-5 border border-gray-700 rounded-xl">
            Locations
          </div>
          <div className="w-96 h-16 px-5">
            <div id="adults">
              <h4 className="text-lg text-gray-700 font-semibold">Adults</h4>
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
              <h4 className="text-lg text-gray-700 font-semibold">Children</h4>
              <p className="text-base text-gray-500">Ages 2 - 12</p>
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
          </div>
          <div className="w-96 h-16 px-5 border border-gray-700 rounded-xl">
            NOtihing here
          </div>
        </div>
      </div>
    </div>
  );
}
