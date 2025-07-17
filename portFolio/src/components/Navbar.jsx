
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
                            <li><a href="#">ABOUT ME</a></li>
                            <li><a href="#">MY WORKS</a></li>
                            <li><a href="#">CONTACT</a></li>
                            {/* <li><a href="">REVIEWS</a></li> */}
                        </ul>
                    </div>

                </div>
            </nav>

        </>
    )
}
