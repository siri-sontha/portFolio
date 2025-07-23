import ss1 from "../assets/ss1.png";
import ss2 from "../assets/ss2.png";

export default function FourthSec() {

    return (
        <>

            <section className="fourthSec" id="fourthSec">

                <div>
                    <p>My
                        Projects</p>
                    <p>These are some projects that I have worked upon. Some of them are unique works while other are recreational projects.</p>
                </div>
                <div>
                    <img src={ss1} alt="project pic" />
                    <img src={ss2} alt="project pic" />
                </div>

            </section>

        </>
    )
}