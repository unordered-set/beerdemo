import './social_token.css'
import stImg from './../../img/section_3.png'

function SocialToken () {
    return (
        <section className='Info'>
        <div className="container">
            <div className="info__content">
                <div className="info__textcontent">
                <div className="info__header"><h2><span id='info_header'>SOCIAL TOKEN</span></h2></div>
                <div className="info__text"><p className='info_text-br'>Looking ahead, the $BEER token ecosystem plans to expand its horizons by partnering with bars worldwide. This innovative move aims to allow token holders to exchange their $BEER tokens for actual beer in participating bars across different countries.</p>
<p>
This collaboration not only bridges the gap between the virtual and real world but also enhances the token's utility and appeal.
</p></div>
            </div>          
            <div className="info__img"><img src={stImg} alt="info_img" /></div>                
            </div>
        </div>
    </section>

    )
}

export default SocialToken;