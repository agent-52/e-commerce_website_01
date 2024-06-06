
import styles from "../App/App.module.css"
import useMenURL from "../Fetch/FetchDataMen"
import { useState } from "react"
const Women = ()=>{
    //
    const jwelData = useMenURL("https://fakestoreapi.com/products/category/jewelery")
    const mensData = useMenURL("https://fakestoreapi.com/products/category/women's clothing")
    // 
    return(
        <div className={styles.shopGrid}>
                <div className={styles.shopLine1}>
                    <div>
                        <img src={mensData.image1URL} alt="" />
                        <div>
                            <div className={styles.title}>{mensData.title1}</div>
                            <div className={styles.price}>{mensData.price1} $</div>
                        </div>
                        <button className={styles.addToCart} onClick={()=>updateTotalItem()}>Add To Cart</button>
                    </div>
                    <div>
                        <img src={mensData.image2URL} alt="" />
                        <div>
                            <div className={styles.title}>{mensData.title2}</div>
                            <div className={styles.price}>{mensData.price2} $</div>
                        </div>
                        <button className={styles.addToCart} onClick={()=>updateTotalItem()}>Add To Cart</button>
                    </div>
                    <div>
                        <img src={mensData.image4URL} alt="" />
                        <div>
                            <div className={styles.title}>{mensData.title3}</div>
                            <div className={styles.price}>{mensData.price3} $</div>
                        </div>
                        <button className={styles.addToCart} onClick={()=>updateTotalItem()}>Add To Cart</button>
                    </div>
                </div>
                <div className={styles.shopLine2}>
                    <div>
                        <img src={mensData.image3URL} alt="" />
                        <div>
                            <div className={styles.title}>{mensData.title4}</div>
                            <div className={styles.price}>{mensData.price4} $</div>
                        </div>
                        <button className={styles.addToCart} onClick={()=>updateTotalItem()}>Add To Cart</button>
                    </div>
                    <div>
                        <img src={jwelData.image3URL} alt="" />
                        <div>
                            <div className={styles.title}>{jwelData.title3}</div>
                            <div className={styles.price}>{jwelData.price3} $</div>
                        </div>
                        <button className={styles.addToCart} onClick={()=>updateTotalItem()}>Add To Cart</button>
                    </div>
                    <div>
                        <img src={jwelData.image1URL} alt="" />
                        <div>
                            <div className={styles.title}>{jwelData.title1}</div>
                            <div className={styles.price}>{jwelData.price1} $</div>
                        </div>
                        <button className={styles.addToCart} onClick={()=>updateTotalItem()}>Add To Cart</button>
                    </div>
                </div>
            </div>
    )
}

export default Women