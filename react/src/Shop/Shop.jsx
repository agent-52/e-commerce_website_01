import {Outlet} from "react-router-dom";

const Shop = () =>{
    return(
        <div>
            <h1>Hello from profile page</h1>
            <p>so, how are you?</p>
            <hr />
            <h2>The profile visited is here:</h2>
            <Outlet></Outlet>
        </div>
    )
}

export default Shop;