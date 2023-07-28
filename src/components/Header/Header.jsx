import styles from "./Header.module.css"
import image1 from "../../assets/logo.svg"


export default function Header (){
    return(
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <a href="#"><img src={image1} alt="logo" width={"90%"} /></a>
            </div>
            <div className={styles.menu}>
                <ul>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Sign In</a></li>
                </ul>
            </div>
        </nav>
    )
}