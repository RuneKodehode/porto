import Doodle from "../../doodle";
export const Rune = () => {
  return (
    <div
      className="self-center justify-self-center w-100 grid row-start-1 col-start-2"
      id="portfolio"
    >
      <h1 className="self-center justify-self-center text-center  text-4xl mb-6">
        Portfolio
      </h1>
      <div id="doodle" className="min-w-full">
        <Doodle
          rule={`@grid: 20;
          @size:  2px 2px;
          background-color: white;
          @place: @plot(
            r: sin(-t/2);
            move: 0 -.2;
            rotate: 90;
          );
            box-shadow: 2px 2px 5px cyan;
            animation: m 4s alternate-reverse infinite;
            transform: translateY(calc(@sin(@i / 1) * π * 16px));
            animation-delay: calc(
             -1s/@I * @i * @sin(@i)
             );
             @keyframes m {
               15%, 70%, 70% { scale: 1; opacity: 1}
              04%, 60%, 100% { scale: 0; opacity: 0;}
              `}
        ></Doodle>{" "}
      </div>
      <h1 className="w-auto self-center justify-self-center text-center  text-4xl mt-6">
        Rune
      </h1>
    </div>
  );
};
