import style from './SectionTwo.module.css'
import image2 from '../../assets/illustration-2.svg'
import image3 from '../../assets/icon-arrow.svg'
import image4 from '../../assets/icon-quotes.svg'
import image5 from '../../assets/avatar-testimonial.jpg'

export default function Section (){
    return(
        <div className={style.sectionTwo}>
                <div className={style.text1}>
                    <h2>Stay productive, wherever you are</h2>
                    <p>Never let location be an issue when accessing your files. Fylo has you covered for 
                        all of your file storage needs.
                        <br /> 
                        <br />
                        Securely share files and folders with friends, family and colleagues for
                        live colaboration. No email attachments required!
                    </p>
                    <a className={style.link} href="#">See how Fylo works <img src={image3}/></a>
                    <div className={style.card}>
                        <img src={image4} />
                        <p>Fylo has improved our team productivity by an order of magnitude.
                        Since making the switch our team has become a well-oiled colloboration machine
                        </p>
                        <div className={style.cardimage}>
                            <div>
                                <img src={image5} />
                            </div>
                            <div>
                                <p>Kyle Burton</p>
                                <p>Founder & CEO, Huddle</p>
                            </div>
                        </div>
                    </div>
                </div>

            <div className={style.img}>
                <img src={image2} alt="Ilustração" width={"80%"}/>
                
            </div>
        </div>
    )
}