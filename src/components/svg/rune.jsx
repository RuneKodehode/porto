import Doodle from "../../doodle";
export const Rune = () => {
  return (
    <div className="portfolio">
      <h1 className="rune">Portfolio</h1>
      <div id="doodle">
        <Doodle
          rule={`@grid: 10 / 4rem;
            width: 30px; 
            height: 5px;
            background-color: white;
            box-shadow: 5px 5px 10px #ff4d6d;
            animation: m 4s alternate-reverse infinite;
            transform: translateX(calc(@sin(@i / 1) * π * 2px));
           animation-delay: calc(
             -1s/@I * @i * @sin(@i)
             );
             @keyframes m {
               10%, 20%, 100% { scale: 1; opacity: 1}
              10%, 70%, 50% { scale: 0; opacity: 0 }`}
        ></Doodle>{" "}
      </div>
      <h1 className="rune">Rune</h1>
    </div>
  );
};
