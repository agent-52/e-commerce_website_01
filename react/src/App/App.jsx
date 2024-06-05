import styles from "./App.module.css"
import Header from "../Header/Header.jsx"
import mailImage from "./assets/MAIL.png"
import phoneImage from "./assets/phone2.png"
import i1 from "./assets/m1.png"
import l1 from "./assets/l1.png"
import l2 from "./assets/l2.png"
import l3 from "./assets/l3.png"
import l4 from "./assets/l4.png"
import l5 from "./assets/l5.png"
import l6 from "./assets/l6.png"
import l7 from "./assets/l7.png"
import forward from "./assets/back2.png"
import backward from "./assets/back1.png"
import useMenURL from "../Fetch/FetchDataMen.jsx"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";   
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {CategoryTitle} from "../Category/Category.jsx"
import {CategoryImage} from "../Category/Category.jsx"



gsap.registerPlugin(useGSAP,ScrollTrigger);

const App = () =>{
    const womensData = useMenURL("https://fakestoreapi.com/products/category/women's clothing")
    const mensData = useMenURL("https://fakestoreapi.com/products/category/men's clothing")
    // console.log(mensData)
    // console.log(womensData)
    const [i, setI] = useState(0)
    const [j, setJ] = useState(0)
    const [k, setK] = useState(0)
    
    function time(){
        let a = 0
        const interval = setInterval(() => {
            a += Math.floor(Math.random()*10)
            setI(a)
            if(a>=122){
                setI(122)
                clearInterval(interval)
            }
        }, 35)
    }
    function time1(){
        let a = 0
        const interval = setInterval(() => {
            a += Math.floor(Math.random()*10)
            setJ(a)
            if(a>=34){
                setJ(34)
                clearInterval(interval)
            }
        }, 100)
    }
    function time2(){
        let a = 0
        const interval = setInterval(() => {
            a += Math.floor(Math.random()*10)
            setK(a)
            if(a>=234){
                setK(234)
                clearInterval(interval)
            }
        }, 25)
    }

    
    //
    useGSAP(()=>{
        const tl = gsap.timeline()
        gsap.to("#ball1, #ball2, #ball3", {
            x: "random(-105, 85)",
            y: "random(-195, 145)",
            ease: "power1.inOut",
            duration: 2, 
            repeat: -1,
            repeatRefresh: true
          });
        gsap.from("#mainImage", {
            y:400,
            duration:1,
            opacity:0
          })
        gsap.from("#p1H",{
            y:500,
            opacity:0,
            duration:1.3,
            
          })
        gsap.from("#socialIcons", {
            x:-200,
            opacity:0,
            duration:1
          })
        gsap.from("#contactIcons", {
            x:200,
            opacity:0,
            duration:1
          })
        gsap.from("#blackStrips",{
            scale:0,
            opacity:0,
            duration:1.3,
            stagger:0.1,
            delay:0.4,
            
          })
        ScrollTrigger.create({
            trigger: "#clientNo",
            duration:2,
            scrub:1,
            onEnter: time,
            
          });
        ScrollTrigger.create({
            trigger: "#brandNo",
            duration:2,
            scrub:1,
            onEnter: time1,
            
          });
        ScrollTrigger.create({
            trigger: "#salesNo",
            duration:2,
            scrub:1,
            onEnter: time2,
            
          });
        gsap.from("#aboutUs",{
            opacity:0,
            y:200,
            duration:1,
            scrollTrigger:"true"
        })
          

    },)
    
    //
    
    return(
        <div className={styles.App}>
       <div className={styles.page1}>
        <Header/>
        <div className={styles.page1Main}>
            <div className={styles.p1t}>
                <div className={styles.p1Heading} id="p1H">
                    <div>MINIMALIST</div>
                    <div>FASHION</div>
                </div>
                <div className={styles.p1CircleBox}>
                    <div id="socialIcons">
                        <div className={styles.circle1}>IG</div>
                        <div className={styles.circle1}>TW</div>
                        <div className={styles.circle1}>FB</div>
                        <div className={styles.circle1}>LN</div>
                    </div>
                    <div id="contactIcons">
                        <div className={styles.circle1}><img src={mailImage} alt="" /></div>
                        <div className={styles.circle1}><img src={phoneImage} alt="" /></div>
                    </div>
                </div>
                
            </div>
            <div className={styles.p1b} >
                <img src={i1} alt="" className={styles.i1} id="mainImage"/>
                <div id="blackStrips"></div>
                <div id="blackStrips"></div>
                <div id="blackStrips"></div>
                <div id="blackStrips"></div>
                <div id="blackStrips"></div>
                <div id="blackStrips"></div>
                <div id="blackStrips"></div>
                <div className={styles.lastChild} id="blackStrips"></div>
            </div>
        </div>
       </div>
       <div className={styles.page2}>
            <div className={styles.p2_1}>
                <div className={styles.p2_1_1} id="aboutUs">ABOUT US</div>
                <div>what began asd astand alone retail store in aarphus denmark in 1997 has since developed into an international fashion brand. minimum is the result of a shared desire to design clothes that is accesible yet fashionable with a keen eye for detal, quality, and fit , not backed by any big cooperation we are still a proud and independent business spearheaded by our founder and owner tang. while aiming to maintain our international outlook.</div>
            </div>
            <div className={styles.p2_2}>
                <div>
                    <div className={styles.p2_2_1} id="clientNo">{i}</div>
                    <div className={styles.p2_2_2}>CLIENTS</div>
                </div>
                <div>
                    <div className={styles.p2_2_1} id="brandNo">{j}+</div>
                    <div className={styles.p2_2_2}>BRANDS</div>
                </div>
                <div>
                    <div className={styles.p2_2_1} id="salesNo">{k}K</div>
                    <div className={styles.p2_2_2}>SALES</div>
                </div>
            </div>
            <div className={styles.p2_3}>NEW ARRIVALS</div>
            <div className={styles.shopGrid}>
                <div className={styles.shopLine1}>
                    <div>
                        <img src={mensData.image1URL} alt="" />
                        <div>
                            <div className={styles.title}>{mensData.title1}</div>
                            <div className={styles.price}>{mensData.price1} $</div>
                        </div>
                    </div>
                    <div>
                        <img src={mensData.image2URL} alt="" />
                        <div>
                            <div className={styles.title}>{mensData.title2}</div>
                            <div className={styles.price}>{mensData.price2} $</div>
                        </div>
                    </div>
                    <div>
                        <img src={mensData.image4URL} alt="" />
                        <div>
                            <div className={styles.title}>{mensData.title3}</div>
                            <div className={styles.price}>{mensData.price3} $</div>
                        </div>
                    </div>
                </div>
                <div className={styles.shopLine2}>
                    <div>
                        <img src={womensData.image3URL} alt="" />
                        <div>
                            <div className={styles.title}>{mensData.title4}</div>
                            <div className={styles.price}>{mensData.price4} $</div>
                        </div>
                    </div>
                    <div>
                        <img src={womensData.image1URL} alt="" />
                        <div>
                            <div className={styles.title}>{womensData.title1}</div>
                            <div className={styles.price}>{womensData.price1} $</div>
                        </div>
                    </div>
                    <div>
                        <img src={womensData.image2URL} alt="" />
                        <div>
                            <div className={styles.title}>{womensData.title2}</div>
                            <div className={styles.price}>{womensData.price2} $</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.viewMore}><button className={styles.viewMoreButton}>VIEW MORE</button></div>
       </div>
        <div className={styles.page3}>
            <div className={styles.stripBox}>
                <div className={styles.strip1}><div className={styles.strip1Text} id="strip1">booking week 40% off all items - no code required - discount will apply at checkout </div></div>
                <div className={styles.strip2}><div className={styles.strip2Text} id="strip2">booking week 40% off all items - no code required - discount will apply at checkout</div></div>
            </div>
        
            <div className={styles.p3bBox}>
                <div className={styles.p3m}>
                    <div className={styles.categories}>CATEGORIES</div>
                    <div className={styles.p3tBox}>
                        <div className={styles.backward}><img src={backward} alt="" /></div>
                        <CategoryTitle/>
                        <div className={styles.forward}><img src={forward} alt="" /></div>
                    </div>
                </div>
                <CategoryImage />
                <div className={styles.p3b}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className={styles.lastChild}></div>
                </div>
            </div>


        </div>
        <div className={styles.page4}>
            <div className={styles.p4t}>
                <div className={styles.p4h}>OUR PARTERNS</div>
                <div className={styles.iconBox}>
                    <div className={styles.largeCircle} id="ball1"><img src={l1} alt="" /></div>
                    <div className={styles.largeCircle} id="ball2"><img src={l2} alt="" /></div>
                    <div className={styles.smallCircle} id="ball3"><img src={l3} alt="" /></div>
                    <div className={styles.smallCircle} id="ball2"><img src={l4} alt="" /></div>
                    <div className={styles.smallCircle} id="ball1"><img src={l5} alt="" /></div>
                    <div className={styles.largeCircle} id="ball3"><img src={l6} alt="" /></div>
                    <div className={styles.largeCircle} id="ball1"><img src={l7} alt="" /></div>
                    <div className={styles.largeCircle} id="ball2"><img src={l1} alt="" /></div>
                    <div className={styles.smallCircle} id="ball3"><img src={l2} alt="" /></div>
                </div>
            </div>
            <div className={styles.p4b}>
                <div className={styles.contactBox}>
                    <div>
                        <div className={styles.footerH}>newsletter</div>
                        <div>
                            <div>phone: +999 134344 4445</div>
                            <div>sign up to opur newsletter and get 20% off your first order</div>
                            <input type="email" name="" id="" placeholder="ENTER YOUR EMAIL"/>
                        </div> 
                    </div>
                    <div>
                        <div className={styles.footerH}>CONTACT US</div>
                        <div>
                            <div>phone: +999 134344 4445</div>
                            <div>hours business days(9am-5pm)</div>
                            <div>email: abhaybhadauriya12366@gmail.com</div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.footerH}>informations</div>
                        <div>
                            <div>shipping and returns</div>
                            <div>terms & conditions</div>
                            <div>about mstore</div>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>© Copyright Agency and contributors 2024. ABN 53 001 228 799</div>
            </div>
        </div>

    </div>
    )
}

export default App