import {Outlet} from "react-router-dom";
import styles1 from "./Shop.module.css";
import styles from "../App/App.module.css"
import Header from "../Header/Header";
import useMenURL from "../Fetch/FetchDataMen"
import {useParams} from "react-router-dom"
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";



const Shop = () =>{
    const mensData = useMenURL("https://fakestoreapi.com/products/category/men's clothing")
    const jwelData = useMenURL("https://fakestoreapi.com/products/category/jewelery")
    const womensData = useMenURL("https://fakestoreapi.com/products/category/women's clothing")
    const {name} = useParams()
    
    const[totalItem, setTotalItem] = useState(0)

    function updateTotalItem(){
        let a = totalItem;
        a = a+1
        setTotalItem(a)
        console.log(totalItem)
    }

    
    return(

        <div className={styles1.shopPage}>
            <div className={styles1.header}><Header totalItems={totalItem}/></div>
            <div className={styles1.outlet}>
                {name === "men" ? (
                    //
                   
    
                    <div className={styles.shopGrid}>
                            <div className={styles.shopLine1}>
                                <div>
                                    <img src={mensData.image1URL} alt="" />
                                    <div>
                                        <div className={styles.title}>{mensData.title1}</div>
                                        <div className={styles.price}>{mensData.price1} $</div>
                                    </div>
                                    <button className={styles.addToCart}>Add To Cart</button>
                                </div>
                                <div>
                                    <img src={mensData.image2URL} alt="" />
                                    <div>
                                        <div className={styles.title}>{mensData.title2}</div>
                                        <div className={styles.price}>{mensData.price2} $</div>
                                    </div>
                                    <button className={styles.addToCart}>Add To Cart</button>
                                </div>
                                <div>
                                    <img src={mensData.image4URL} alt="" />
                                    <div>
                                        <div className={styles.title}>{mensData.title3}</div>
                                        <div className={styles.price}>{mensData.price3} $</div>
                                    </div>
                                    <button className={styles.addToCart}>Add To Cart</button>
                                </div>
                            </div>
                            <div className={styles.shopLine2}>
                                <div>
                                    <img src={mensData.image3URL} alt="" />
                                    <div>
                                        <div className={styles.title}>{mensData.title4}</div>
                                        <div className={styles.price}>{mensData.price4} $</div>
                                    </div>
                                    <button className={styles.addToCart}>Add To Cart</button>
                                </div>
                                <div>
                                    <img src={jwelData.image4URL} alt="" />
                                    <div>
                                        <div className={styles.title}>{jwelData.title4}</div>
                                        <div className={styles.price}>{jwelData.price4} $</div>
                                    </div>
                                    <button className={styles.addToCart}>Add To Cart</button>
                                </div>
                                <div>
                                    <img src={jwelData.image2URL} alt="" />
                                    <div>
                                        <div className={styles.title}>{jwelData.title2}</div>
                                        <div className={styles.price}>{jwelData.price2} $</div>
                                    </div>
                                    <button className={styles.addToCart}>Add To Cart</button>
                                </div>
                            </div>
                        </div>
    
                    //
                ): name === "women" ? (
                    //
                    <div className={styles.shopGrid}>
                        <div className={styles.shopLine1}>
                            <div>
                                <img src={womensData.image1URL} alt="" />
                                <div>
                                    <div className={styles.title}>{womensData.title1}</div>
                                    <div className={styles.price}>{womensData.price1} $</div>
                                </div>
                                <button className={styles.addToCart} onClick={()=>updateTotalItem()}>Add To Cart</button>
                            </div>
                            <div>
                                <img src={womensData.image2URL} alt="" />
                                <div>
                                    <div className={styles.title}>{womensData.title2}</div>
                                    <div className={styles.price}>{womensData.price2} $</div>
                                </div>
                                <button className={styles.addToCart} onClick={()=>updateTotalItem()}>Add To Cart</button>
                            </div>
                            <div>
                                <img src={womensData.image4URL} alt="" />
                                <div>
                                    <div className={styles.title}>{womensData.title3}</div>
                                    <div className={styles.price}>{womensData.price3} $</div>
                                </div>
                                <button className={styles.addToCart} onClick={()=>updateTotalItem()}>Add To Cart</button>
                            </div>
                        </div>
                        <div className={styles.shopLine2}>
                            <div>
                                <img src={womensData.image3URL} alt="" />
                                <div>
                                    <div className={styles.title}>{womensData.title4}</div>
                                    <div className={styles.price}>{womensData.price4} $</div>
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
                    //
                ):null}
            </div>
            <div className={styles1.footer}>© Copyright Agency and contributors 2024. ABN 53 001 228 799</div>
            
        </div>
    )
}

export default Shop;