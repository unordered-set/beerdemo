import logoX from './../../img/social_logo_svg/X.svg'
import logoTelegram from './../../img/social_logo_svg/Telegram.svg'

import './header.css'

function Header () {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__row">
                    <nav className="header__nav">
                        <ul>
                            <li><a href="#!">Buy</a></li>
                            <li><a href="#info">Info</a></li>
                            <li><a href="#tokenomics">Tokenomics</a></li>
                            <li><a href="#roadmap">RM</a></li>
                        </ul>
                    </nav>
                    <div className="header__links"><ul>
                            <li><a href="#!"><img src={logoX} alt="" /></a></li>
                            <li><a href="#!"><img src={logoTelegram} alt="" /></a></li>
                        </ul></div>
                    
                </div>
            </div>
        </header>

    )
}

export default Header; 