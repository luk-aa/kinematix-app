import { Checkbox } from "@/components/ui/checkbox";
import { productTypes } from "./index";

const Sidebar = ({ selectedCategories, setSelectedCategories }) => {
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(
      (prevSelected: string[]) =>
        prevSelected.includes(category)
          ? prevSelected.filter((c) => c !== category) // Uncheck category
          : [...prevSelected, category] // Check new category
    );
  };

  return (
    <div className="space-y-5 w-[300px] text-secondary">
      <h2 className="text-xl">კატეგორია</h2>
      <hr className="border-primary" />
      <div className="flex items-center justify-between space-x-2">
        <label
          htmlFor="terms"
          className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          ნაკრები
        </label>
        <Checkbox
          id="terms"
          checked={selectedCategories.includes("kits")}
          onCheckedChange={() => handleCategoryChange("kits")}
        />
      </div>
      <div className="flex items-center justify-between space-x-2">
        <label
          htmlFor="terms"
          className=" text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          მიკროკონტროლერი
        </label>
        <Checkbox
          id="terms"
          checked={selectedCategories.includes("microcontrollers")}
          onCheckedChange={() => handleCategoryChange("microcontrollers")}
        />
      </div>
      <div className="flex items-center justify-between space-x-2">
        <label
          htmlFor="terms"
          className=" text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          სენსორები
        </label>
        <Checkbox
          id="terms"
          checked={selectedCategories.includes("sensors")}
          onCheckedChange={() => handleCategoryChange("sensors")}
        />
      </div>
      <div className="flex items-center justify-between space-x-2">
        <label
          htmlFor="terms"
          className=" text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          მოდულები
        </label>
        <Checkbox
          id="terms"
          checked={selectedCategories.includes("modules")}
          onCheckedChange={() => handleCategoryChange("modules")}
        />
      </div>
      <div className="flex items-center justify-between space-x-2">
        <label
          htmlFor="terms"
          className=" text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          მულტიმეტრები
        </label>
        <Checkbox
          id="terms"
          checked={selectedCategories.includes("multimeters")}
          onCheckedChange={() => handleCategoryChange("multimeters")}
        />
      </div>
      <div className="flex items-center justify-between space-x-2">
        <label
          htmlFor="terms"
          className=" text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          კვების ბლოკი
        </label>
        <Checkbox
          id="terms"
          checked={selectedCategories.includes("power-block")}
          onCheckedChange={() => handleCategoryChange("power-block")}
        />
      </div>
      <div className="flex items-center justify-between space-x-2">
        <label
          htmlFor="terms"
          className=" text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          სხვა
        </label>
        <Checkbox
          id="terms"
          checked={selectedCategories.includes("other")}
          onCheckedChange={() => handleCategoryChange("other")}
        />
      </div>
    </div>
  );
};

export default Sidebar;
