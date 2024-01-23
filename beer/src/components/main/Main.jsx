import './main.css'
import mainLogo from './../../img/beer_logo.png'

function Main (){
    return (
        <section className='Main'>
            <div className="container">
                <div className="main__content">
                    <div className="main_img"><img src={mainLogo} alt="beer_logo" /></div>
                    <div className="main_header"><h1>Welcome to $BEER</h1></div>
                    <div className="main_button"><button>Buy $BEER</button></div>                   
                </div>
            </div>
        </section>
    )
}

export default Main; 