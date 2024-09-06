import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Main from "./pages/main/Index";
import Store, { loader as storeLoader } from "./pages/products";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="products" element={<Store />} loader={storeLoader} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
