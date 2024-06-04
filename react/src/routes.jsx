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
        path: "ShopPage",
        element:<Shop/>,
        // children:[
        //     {index: true, element: <DefaultProfile />},
        //     {path: "spinach", element: <Spinach/>},
        //     {path: "popeye", element: <Popeye />},
        // ],
    },
];

export default routes;