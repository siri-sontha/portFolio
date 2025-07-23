import img2 from "../assets/img2.webp";
import img1 from "../assets/img1.webp";


export default function SecondSec() {

    return (
        <>
            <section className="secondSec" id="secondSec">
                <img src={img2} className="heartDoodle" alt="heartDoodle" />
                <div className="archShape">
                    <div className="whoTextDiv">
                        <img src={img1} alt="effect image" />
                        <p>WHO</p>
                        <p>AM I?</p>
                    </div>
                    <div className="abtMeDiv">
                        <p>I am a Full-Stack Web Developer.</p>
                        <p>I’m good at creating visually engaging and highly functional websites. With expertise in React.js, Node.js, MySql and modern frameworks like Tailwind CSS, I specialize in building responsive, mobile-first websites that prioritize user experience.</p>
                        <p>My attention to detail ensures that every project I work on is not only visually appealing but also optimized for speed and performance.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
