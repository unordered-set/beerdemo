import "./game.css";
import coinImg from "./../../img/coin.svg";
import beerImg from "./../../img/beercap.svg";
import Lottie from "lottie-react";
import AnimationBeer from "./AnimationBeer.json";
import { useRef } from "react";


function Game() {

  const lottieRef = useRef();

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

                {/* <div className="game__winners_capanime"><Lottie animationData={AnimationBeer} /></div> */}
                <img src={beerImg} alt="" />
            </div>
            <div className="game__winners_place"></div>
            <div className="game__winners_points"><h1>543</h1></div>
          </div>
          
          <div className="game__winner">
            <div className="game__winners_icon"><span>🏆</span></div>
            <div className="game__winners_cap">
                <div className="game__winners_capanime">
                  <Lottie animationData={AnimationBeer}
                  lottieRef={lottieRef} 
                        loop={true}
                        />
                </div>
                {/* <img src={beerImg} alt="" /> */}
                </div>

            <div className="game__winners_place"></div>
            <div className="game__winners_points"><h1>302</h1></div>
          </div>
          
          <div className="game__winner">
            <div className="game__winners_icon"><span>🤡</span></div>
            <div className="game__winners_cap">
                {/* <div className="game__winners_capanime"><Lottie animationData={AnimationBeer}/></div> */}
                <img src={beerImg} alt="" />
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
