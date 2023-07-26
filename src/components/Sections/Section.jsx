import style from './Section.module.css'
import image2 from '../../assets/illustration-1.svg'

export default function Section (){
    return(
        <div className={style.section}>
            <div className={style.text1}>
                <h2>All your files in one secure location, accessible anywhere.</h2>
                <p>Fylo stores your most important files in one secure location. Acess
                    them wherever you need, share and colloborate with friends, family, and co-workers.
                </p>
                <form className={style.form}>
                <input type="text" className={style.caixa} placeholder='Enter your e-mail...'/>
                <input type="submit" value="Get Started" className={style.buttom}/>
                </form>
            </div>

            <div className={style.img}>
                <img src={image2} alt="Ilustração" width={"80%"} />
            </div>
        </div>
    )
}