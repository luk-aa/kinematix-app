import Content from "./Content";
import Products from "./Products";

const Main = () => {
  return (
    <>
      <div>
        <Content />
      </div>
      <div className="mt-16">
        <h2 className="text-2xl text-center">პოპულარული პროდუქცია</h2>
        <Products />
      </div>
    </>
  );
};

export default Main;
