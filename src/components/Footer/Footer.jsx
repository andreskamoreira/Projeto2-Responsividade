import style from './Footer.module.css'
import image6 from '../../assets/logo.svg'
import image7 from '../../assets/icon-phone.svg'
import image8 from '../../assets/icon-email.svg'

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
                <input type="text" className={style.caixa} placeholder='email@example.com' />
                <input type="submit" value="Get Started For Free" className={style.buttom}/>
                </form>
                </div>
            </div>
            <div className={style.infor}>
                <div className={style.logo}>
                    <img src={image6} alt="logo" />
                        <div className={style.contact}>
                            <img src={image7} alt="phone"  className={style.image7}/>
                            <p>Phone: +1-543-123-4567</p>
                        </div>
                        <div className={style.contacttwo}>
                            <img src={image8} alt="email"  className={style.image8}/>
                            <p>example@fylo.com</p>
                        </div>
                </div>
                <div className={style.about}>
                    <nav>
                        <ul className={style.links}>
                            <li><a href="#">About Us</a></li>
                            
                            <li><a href="#">Jobs</a></li>
                            
                            <li><a href="#">Press</a></li>
                            
                            <li><a href="#">Blog</a></li>
                        </ul>
                        <ul className={style.linkstwo}>
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