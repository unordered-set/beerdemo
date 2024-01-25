import './buy.css'
import buyImg from './../../img/section_4.png'

function Buy () {
    return (
        <section className='Buy'>
        <div className="buy__container">
            <div className="info__content">
                <div className="info__textcontent">
                <div className="info__header"><h2><span id='info_header'>HOW TO BUY</span></h2></div>
                <div className="info__text"><p className='info_text-br'>You can purchase $BEER in various different ways.</p>
<p>
We reccomend downloading Phantom Wallet, purchasing SOL, sending it to your phantom address and swapping using Phantom's in-app wallet.
</p></div>
                <div className="buy__btn"><button>Download PHANTOM</button></div>
            </div>          
            <div className="info__img"><img src={buyImg} alt="info_img" /></div>                
            </div>
        </div>
    </section>

    )
}

export default Buy;