import Doodle from "../../doodle";
export const Rune = () => {
  return (
    <div className="portfolio">
      <h1 className="rune">Portfolio</h1>
      <div id="doodle">
        <Doodle
          rule={`@grid: 20;
          @size:  3px 3px;
          background-color: rgba(255, 68, 0, 0.379);
          @place: @plot(
            r: sin(-t/2);
            move: 0 -.2;
            rotate: 90;
          );
            box-shadow: 2px 2px 5px orangered;
            animation: m 4s alternate-reverse infinite;
            transform: translateY(calc(@sin(@i / 1) * π * 14px));
            animation-delay: calc(
             -1s/@I * @i * @sin(@i)
             );
             @keyframes m {
               20%, 70%, 100% { scale: 1; opacity: 1}
              20%, 30%, 80% { scale: 0; opacity: 0;}
              `}
        ></Doodle>{" "}
      </div>
      <h1 className="rune">Rune</h1>
    </div>
  );
};
