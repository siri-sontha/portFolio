
export default function Navbar() {

    return (
        <>

            <nav>
                <div className="navDiv">

                    <div className="navSecOne">
                        <ul>
                            <li className="logo">SIRI</li>
                        </ul>
                    </div>

                    <div className="navSecTwo">
                        <ul>
                            <li><a href="#secondSec">About Me</a></li>
                            <li><a href="#thirdSec">My Background</a></li>
                            <li><a href="#fourthSec">Works</a></li>
                            <li><a href="#sixthSec">Contact</a></li>
                            {/* <li><a href="">REVIEWS</a></li> */}
                        </ul>
                    </div>

                </div>
            </nav>

        </>
    )
}
