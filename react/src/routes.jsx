import App from "./App/App";
import Shop from "./Shop/Shop";
import ErrorPage from "./Error/ErrorPage";


const routes = [
    {
        path: "/",
        element: <App />,
        errorElement:<ErrorPage/>,
    },
    {
        path: "ShopPage/:name",
        element:<Shop/>,
        
    },
];

export default routes;