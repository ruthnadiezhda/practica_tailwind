import Details from "./views/Details";
import Cart from "./views/Cart";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const browserRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/cart", element: <Cart /> },
    { path: "/details/:id", element: <Details /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return (
    //Estados globales deben estar disponibles en el RouterProvider
    <Provider store={store}>
      <RouterProvider router={browserRouter} />
    </Provider>
  );
}
export default App;
