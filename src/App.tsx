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
import ProductDetails, {
  loader as productDetailsLoader,
} from "./pages/products/ProductDetails";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/contact/Index";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="products" element={<Store />} loader={storeLoader} />
        <Route
          path="products/:id"
          element={<ProductDetails />}
          loader={productDetailsLoader}
        />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
