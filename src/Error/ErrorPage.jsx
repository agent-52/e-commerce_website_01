import styles from "./ErrorPage.module.css";
import {Link} from "react-router-dom";
import e1 from "./assets/e9.mp4"
function ErrorPage(){
    return(
        <div className={styles.errorPage}>
            <div className={styles.errorMain}>
                <video src={e1} className={styles.errorImage} autoPlay loop muted></video>
                <div className={styles.blurElement}></div>
                <div>
                    <h1>404</h1>
                    <h2>Page Not Found!</h2>
                </div>

                <Link to="/"><div className={styles.outerButton}><button className={styles.errorButton}>Back Home</button></div></Link>
            </div>
        </div>
    )
};

export default ErrorPage;