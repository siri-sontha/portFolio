import myPic3 from "../assets/myPic3.jpg";


export default function FirstSec() {

    return (
        <>

            <section className="firstSec">

                <div className="firstSecDivOne">
                    <div className="whiteBox"></div>
                    <div className="picDiv">
                        <img src={myPic3} alt="my picture" />
                        <p>FRONT END DEVELOPER</p>
                        <div></div>
                        <p>" TRANSFORMING YOUR IDEAS INTO INTERACTIVE EXPERIENCES IS MY DREAM COME TRUE "</p>
                    </div>
                </div>

                <div className="firstSecDivTwo">
                    <p>MY PORTFOLIO</p>
                    <p>SIRI</p>
                    <p>SONTHA</p>
                    <div>
                        <button>WORK WITH ME</button>
                        <button>TALK TO ME</button>
                    </div>
                </div>

            </section>

        </>
    )
}
