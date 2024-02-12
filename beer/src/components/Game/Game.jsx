import "./game.css";
import coinImg from "./../../img/coin.svg";

import Lottie from "lottie-react";
import AnimationBeer from "./AnimationBeer.json";
import { useRef } from "react";


function Game() {

  const lottieRefs = [
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const playAnimation = (index) => {
    if (lottieRefs[index].current) {
      lottieRefs[index].current.play();
    }
  };

  return (
    <section className="Game">
      <div className="container">
        <div className="game__headerblock">
          <h1>GAME</h1>
          <h2>Pour beer, place bet and win SOL</h2>
        </div>
        <div className="game__slotsblock">
          <div className="game__slot">
            <h1>
              3 SLOT - CASHBACK <span>🥈</span>
            </h1>
            <h2>50% BACK OF YOUR INVESTMENT</h2>
          </div>
          <div className="game__slot">
            <h1>
              2 SLOT - WINNER <span>🏆</span>
            </h1>
            <h2>100% OF SLOT 2 + 50% 0F SLOT 3 + 2</h2>
          </div>
          <div className="game__slot">
            <h1>
              1 SLOT - LOOSER <span>🤡</span>
            </h1>
            <h2>GAME OVER, TRY AGAIN</h2>
          </div>
        </div>
        <div className="game__balance">
          <h1>
            <img src={coinImg} alt="coinImg" />
            6029.01 SOL
          </h1>
        </div>
        <div className="game__winners">

          <div className="game__winner">
            <div className="game__winners_icon"><span>🥈</span></div>
            <div className="game__winners_cap">
            <div className="game__winners_capanime" onClick={() => playAnimation(0)}>
                <Lottie animationData={AnimationBeer}
                        lottieRef={lottieRefs[0]}
                        loop={false}
                        autoplay={false}
                />
              </div>
            </div>
            <div className="game__winners_place"></div>
            <div className="game__winners_points"><h1>543</h1></div>
          </div>
          
          <div className="game__winner">
            <div className="game__winners_icon"><span>🏆</span></div>
            <div className="game__winners_cap">
            <div className="game__winners_capanime" onClick={() => playAnimation(1)}>
                <Lottie animationData={AnimationBeer}
                        lottieRef={lottieRefs[1]}
                        loop={false}
                        autoplay={false}
                />
              </div>
                </div>

            <div className="game__winners_place"></div>
            <div className="game__winners_points"><h1>302</h1></div>
          </div>
          
          <div className="game__winner">
            <div className="game__winners_icon"><span>🤡</span></div>
            <div className="game__winners_cap">
            <div className="game__winners_capanime" onClick={() => playAnimation(2)}>
                <Lottie animationData={AnimationBeer}
                        lottieRef={lottieRefs[2]}
                        loop={false}
                        autoplay={false}
                        className="cap__animation"
                />
              </div>
            </div>
            <div className="game__winners_place"></div>
            <div className="game__winners_points"><h1>152</h1></div>
          </div>

        </div>
        <div className="game__connect">
            <h1>CONNECT WALLET</h1>
        </div>
      </div>
    </section>
  );
}

export default Game;
