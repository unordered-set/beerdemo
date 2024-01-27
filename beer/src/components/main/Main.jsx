import './main.css'
import mainLogo from './../../img/beer_logo.webp'
import coverImage from './../../img/main.webp'


function Main() {
    return (
        <section className='Main'>
            <div className="cover">
                <img src={coverImage} alt="cover" layout="responsive" />
            </div>
            <div className="main__logo">
                <img src={mainLogo} alt="beer_logo" />
            </div>
            <div className="main__container">
                <div className="main_header"><h1>Welcome to $BEER</h1></div>
                <div className="main_button"><button>Buy $BEER</button></div>
            </div>
        </section>
    )
}

export default Main; 