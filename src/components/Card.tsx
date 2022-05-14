import logo from "../assets/logo.svg";

export function Card() {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src={logo} alt="Mountain" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Mountain</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
    </div>
  );
}
