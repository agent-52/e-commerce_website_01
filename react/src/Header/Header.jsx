import styles from "./Header.module.css"

const Header = ({totalItems=0})=>{
    return(
        <div className={styles.header}>
            <div className={styles.hl}>
                <div>HOME</div>
                <div>ABOUT</div>
                <div>CONTACT</div>
            </div>
            <div className={styles.hc}>MSTORE</div>
            <div className={styles.hr}>
                <div>MEN</div>
                <div>WOMEN</div>
                <div>CART({totalItems})</div>
            </div>

        </div>
    )
}

export default Header