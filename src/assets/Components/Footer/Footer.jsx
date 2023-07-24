import style from '../Footer/Footer.module.css'
import image6 from '../Footer/logo.svg'
import image7 from '../Footer/icon-phone.svg'
import image8 from '../Footer/icon-email.svg'

export default function Footer (){
    return(
        <div className={style.footer}>
            <div className={style.acess}>
                <div className={style.text}>
                <h2>Get early acess today</h2>
                <p>It only takes a minute to sign up and our free started tier is 
                    extremely generous. If you have any questions, our support team 
                    would be happy to help you.
                </p>
                </div>
                <div className={style.form}>
                <form>
                <input type="text" className={style.caixa} />
                <input type="submit" value="Get Started For Free" className={style.buttom}/>
                </form>
                </div>
            </div>
            <div className={style.infor}>
                <div className={style.logo}>
                    <img src={image6} alt="logo" />
                    <img src={image7} alt="phone"/>Phone: +1-543-123-4567
                    <img src={image8} alt="email"/>example@fylo.com
                </div>
                <div>
                    <nav>
                        <ul className={style.links}>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Privacy</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )

}