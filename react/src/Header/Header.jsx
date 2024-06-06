import styles from "./Header.module.css"
import { Link } from "react-router-dom"
const Header = ({totalItems=0})=>{
    return(
        <div className={styles.header}>
            <div className={styles.hl}>
                <Link to="/"><div>HOME</div></Link>
                <div>ABOUT</div>
                <div>CONTACT</div>
            </div>
            <Link to="/"><div className={styles.hc}>MSTORE</div></Link>
            <div className={styles.hr}>
                <Link to="/ShopPage/men"><div>MEN</div></Link>
                <Link to="/ShopPage/women"><div>WOMEN</div></Link>
                <div>CART({totalItems})</div>
            </div>

        </div>
    )
}

export default Header