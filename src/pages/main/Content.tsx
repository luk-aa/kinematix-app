import { useState } from "react";
import { Link } from "react-router-dom";
import firstImg from "@/assets/images/arduinoFirstImgs.jpg";
import secondImg from "@/assets/images/arduinosecondImg.jpg";

const Content = () => {
  const [hovered, setHovered] = useState(false);
  console.log(hovered);
  return (
    <div className="block md:flex gap-5">
      <div
        className={`relative overflow-hidden h-[400px] p-7 rounded-sm bg-[#9AEAE8] ${
          hovered ? "md:w-5/12" : "md:w-7/12"
        } duration-500`}
        onMouseEnter={() => setHovered(false)}
      >
        <img
          className={`absolute top-0 h-full ${
            hovered ? "-right-40" : "right-0"
          } duration-700 ease-in-out`}
          src={firstImg}
          alt="product-img"
        />
        <div className="relative max-w-[400px]">
          <h1 className="text-3xl text-white">არდუინოს STEM ნაკრები</h1>
          <p className="text-xl mt-5 text-white">
            მოიცავს Arduino დაფას, სენსორებს და აქტუატორებს. მარტივი
            ინსტრუქციებით და სახალისო პროექტებით!
          </p>
          <Link
            to="/"
            className="hover:shadow-md shadow-sm font-semibold text-[#008184] mt-10 inline-block bg-white px-5 py-3 rounded-full"
          >
            შეძენა
          </Link>
        </div>
      </div>

      <div
        className={`relative mt-5 md:mt-0 overflow-hidden p-7 rounded-sm duration-500 h-[400px] bg-[#ECD365] 
          ${hovered ? "md:w-7/12" : "md:w-5/12"} duration-500`}
        onMouseEnter={() => setHovered(true)}
      >
        <img
          className={`absolute top-0 h-full ${
            hovered ? "right-0" : "-right-40"
          } duration-700`}
          src={secondImg}
          alt="product-img"
        />
        <div className="relative max-w-[400px]">
          <h1 className="text-3xl text-white">არდუინოს STEM ნაკრები</h1>
          <p className="text-xl mt-5 text-white">
            მოიცავს Arduino დაფას, სენსორებს და აქტუატორებს. მარტივი
            ინსტრუქციებით და სახალისო პროექტებით!
          </p>
          <Link
            to="/"
            className="hover:shadow-md shadow-sm font-semibold text-[#008184] mt-10 inline-block bg-white px-5 py-3 rounded-full"
          >
            შეძენა
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;
