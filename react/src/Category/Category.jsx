import styles from "../App/App.module.css"
import c1 from "../App/assets/sneaker1.png"
const CategoryTitle = ({category="SNEAKERS"})=>{
    return(
        <div className={styles.p3t}>{category}</div>
    )
}
const CategoryImage = ({category="SNEAKERS"})=>{
    if (category == "SNEAKERS") {
        return(<img src={c1} alt="" className={styles.p3i} />)
    }
}

export {CategoryTitle, CategoryImage}