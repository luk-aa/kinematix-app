import { Dispatch, SetStateAction } from "react";
import { BiSolidCategory } from "react-icons/bi";
import { BsLightningCharge } from "react-icons/bs";
import { FaMicrochip } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { IoSpeedometerOutline } from "react-icons/io5";
import { MdOutlineViewModule } from "react-icons/md";
import { PiDotsThreeOutline } from "react-icons/pi";
import { TbPhotoSensor } from "react-icons/tb";

type SidebarPropsType = {
  handleFilterChange: (key: string, value: string) => void;
  typeFilter: string | null;
  setShowCategory: Dispatch<SetStateAction<boolean>>;
};

type handleClickTypes = (key: string, value: string) => void;

const Sidebar = ({
  handleFilterChange,
  typeFilter,
  setShowCategory,
}: SidebarPropsType) => {
  const handleClick: handleClickTypes = (key, value) => {
    setShowCategory((prev) => !prev);
    handleFilterChange(key, value);
  };

  return (
    <div className="space-y-2 text-lg text-secondary">
      <div className="mb-5 flex items-center  gap-4 ">
        <BiSolidCategory className="text-4xl text-primary" />
        <h2 className="text-xl font-semibold">კატეგორია</h2>
      </div>
      {/* <hr className="border-primary" /> */}
      <div
        className={`flex items-center gap-5 p-3 rounded-md  cursor-pointer ${
          typeFilter === "kits" ? "bg-primary text-white" : "hover:bg-slate-200"
        }`}
        onClick={() => handleClick("category", "kits")}
      >
        <FiShoppingBag
          className={`text-2xl opacity-70 
          }`}
        />
        ნაკრები
      </div>
      <div
        className={`flex items-center gap-5 p-3 rounded-md cursor-pointer ${
          typeFilter === "microcontrollers"
            ? "bg-primary text-white"
            : "hover:bg-slate-200"
        }`}
        onClick={() => handleClick("category", "microcontrollers")}
      >
        <FaMicrochip
          className={`text-2xl opacity-70 
          }`}
        />
        მიკროკონტროლერი
      </div>
      <div
        className={`flex items-center gap-5 p-3 rounded-md  cursor-pointer ${
          typeFilter === "sensors"
            ? "bg-primary text-white"
            : "hover:bg-slate-200"
        }`}
        onClick={() => handleClick("category", "sensors")}
      >
        <TbPhotoSensor
          className={`text-2xl opacity-70 
          }`}
        />
        სენსორები
      </div>
      <div
        className={`flex items-center gap-5 p-3 rounded-md  cursor-pointer ${
          typeFilter === "modules"
            ? "bg-primary text-white"
            : "hover:bg-slate-200"
        }`}
        onClick={() => handleClick("category", "modules")}
      >
        <MdOutlineViewModule
          className={`text-2xl opacity-70 
          }`}
        />
        მოდულები
      </div>
      <div
        className={`flex items-center gap-5 p-3 rounded-md  cursor-pointer ${
          typeFilter === "multimeters"
            ? "bg-primary text-white"
            : "hover:bg-slate-200"
        }`}
        onClick={() => handleClick("category", "multimeters")}
      >
        <IoSpeedometerOutline
          className={`text-2xl opacity-70 
          }`}
        />
        მულტიმეტრები
      </div>
      <div
        className={`flex items-center gap-5 p-3 rounded-md  cursor-pointer ${
          typeFilter === "power-block"
            ? "bg-primary text-white"
            : "hover:bg-slate-200"
        }`}
        onClick={() => handleClick("category", "power-block")}
      >
        <BsLightningCharge
          className={`text-2xl opacity-70 
          }`}
        />
        კვების ბლოკი
      </div>
      <div
        className={`flex items-center gap-5 p-3 rounded-md  cursor-pointer ${
          typeFilter === "other"
            ? "bg-primary text-white"
            : "hover:bg-slate-200"
        }`}
        onClick={() => handleClick("category", "other")}
      >
        <PiDotsThreeOutline
          className={`text-2xl opacity-70 
          }`}
        />
        სხვა
      </div>
    </div>
  );
};

export default Sidebar;
