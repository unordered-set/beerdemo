import './roadmap.css'

function Roadmap (){
    return (
        <section className='Roadmap' id="roadmap">
            <div className="roadmap__container">
                <div className="roadmap__header"><h1><span id='roadmap_header'>ROADMAP</span></h1></div>
                <div className="roadmap__table">
                    <div className="roadmap__table-text"><p id='r1'>Token Launch</p><p>2024 q1</p></div>
                    <div className="roadmap__table-text"><p id='r1'>Games</p><p>2024 q2</p></div>
                    <div className="roadmap__table-text"><p id='r1'>Bars collabs</p> <p>2024 q3-q4</p></div>
                </div>
                <div className="roadmap__btn"><button>Buy $BEER</button></div>    


            </div>
        </section>
    )
}

export default Roadmap; 