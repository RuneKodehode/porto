import Doodle from "../../doodle";
export const Rune = () => {
  return (
    <div className="portfolio">
      <h1 className="rune">Portfolio</h1>
      <div id="doodle">
        <Doodle
          rule={`@grid: 30;
            width: 1.5px; 
            height: 1px;
            background-color: orangered;
  
            animation: m 5s alternate-reverse infinite;
            transform: translateX(calc(@sin(@i / 1) * π * 12px));
            animation-delay: calc(
             -1s/@I * @i * @sin(@i)
             );
             @keyframes m {
               10%, 30%, 100% { scale: 1; opacity: 1}
              10%, 60%, 50% { scale: 0; opacity: 0 }`}
        ></Doodle>{" "}
      </div>
      <h1 className="rune">Rune</h1>
    </div>
  );
};
