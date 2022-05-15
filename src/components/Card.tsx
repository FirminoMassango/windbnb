import star from "../assets/star.svg";

interface Stay {
  city: string;
  country: string;
  superHost: boolean;
  title: string;
  rating: string;
  maxGuests: number;
  type: string;
  beds: number;
  photo: string;
}

export function Card(props: Stay) {
  return props.superHost ? (
    <div className="rounded-xl">
      <img
        className="w-full rounded-xl h-48"
        src={props.photo}
        alt="Mountain"
      />
      <div className="flex justify-between text-xs py-5">
        <div>
          <span className="text-gray-700 text-md font-semibold border border-gray-600 rounded-2xl px-1 py-1 mr-2">
            SUPER HOST
          </span>
          <span className="text-gray-600 mr-1">{props.type}.</span>
          <span className="text-gray-600">{props.beds} beds</span>
        </div>
        <div className="flex justify-content content-center">
          <img className="mr-1" src={star} alt="" width={14} height={14} />
          <span className="text-gray-700">{props.rating}</span>
        </div>
      </div>
      <p className="text-base font-semibold text-gray-700">{props.title}</p>
    </div>
  ) : (
    <div className="rounded-xl">
      <img
        className="w-full rounded-xl h-48"
        src={props.photo}
        alt="Mountain"
      />
      <div className="flex justify-between text-xs py-5">
        <div>
          <span className="text-gray-600 mr-2">{props.type}.</span>
          <span className="text-gray-600">{props.beds} beds</span>
        </div>
        <div className="flex justify-content content-center">
          <img className="mr-1" src={star} alt="" width={14} height={14} />
          <span className="text-gray-700">{props.rating}</span>
        </div>
      </div>
      <p className="text-base font-semibold text-gray-700">{props.title}</p>
    </div>
  );
}
