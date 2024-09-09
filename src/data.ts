export const popularProducts = [
  {
    id: "1",
    name: "CircuitMess Jay-D მოდულები",
    imageUrl:
      "https://store.arduino.cc/cdn/shop/products/TPX00092_00.default_430x287.jpg?v=1630653520",
    highResImageUrl:
      "https://store.arduino.cc/cdn/shop/products/TPX00092_00.default_2400x1600.jpg?v=1630653520",
    description:
      "DIY mixtable, რომელიც გასწავლით მიკროკომპიუტერების და ელექტრონიკის, ხმის ტალღების და ციფრული ხმის წარმოების და პირადი კოდირების შესახებ!",
    price: 100,
    category: "modules",
  },
  {
    id: "2",
    imageUrl:
      "https://store.arduino.cc/cdn/shop/files/TPX00143_00.default_382x287.jpg?v=1724837407",
    highResImageUrl:
      "https://store.arduino.cc/cdn/shop/files/TPX00143_00.default_863x647.jpg?v=1724837407",
    name: "CircuitPet მიკროკონტროლერი",
    price: 200,
    category: "microcontrollers",
  },
  {
    id: "3",
    imageUrl:
      "https://store.arduino.cc/cdn/shop/files/TPX00052_03.back_430x287.jpg?v=1723037737",
    highResImageUrl:
      "https://store.arduino.cc/cdn/shop/files/TPX00052_03.back_564x376.jpg?v=1723037737",
    name: "გრავიტაცია: I2C ოზონის სენსორი (0-10ppm)",
    price: 300,
    category: "sensors",
  },
  {
    id: "4",
    imageUrl:
      "https://store.arduino.cc/cdn/shop/products/TPX00083_02.front_381x381.jpg?v=1621501518",
    highResImageUrl:
      "https://store.arduino.cc/cdn/shop/products/TPX00083_02.front_598x598.jpg?v=1621501518",
    name: "სილიკონის ხალიჩა შედუღებისთვის 450x300 მმ",
    price: 400,
    category: "kits",
  },
  {
    id: "5",
    name: "CircuitMess Jay-D მულტიმეტრი",
    imageUrl:
      "https://store.arduino.cc/cdn/shop/products/TPX00092_00.default_430x287.jpg?v=1630653520",
    highResImageUrl:
      "https://store.arduino.cc/cdn/shop/products/TPX00092_00.default_2400x1600.jpg?v=1630653520",
    price: 100,
    category: "multimeters",
  },
  {
    id: "6",
    imageUrl:
      "https://store.arduino.cc/cdn/shop/files/TPX00143_00.default_382x287.jpg?v=1724837407",
    highResImageUrl:
      "https://store.arduino.cc/cdn/shop/files/TPX00143_00.default_863x647.jpg?v=1724837407",
    name: "CircuitPet კვების ბლოკი",
    price: 200,
    category: "power-block",
  },
  {
    id: "7",
    imageUrl:
      "https://store.arduino.cc/cdn/shop/files/TPX00052_03.back_430x287.jpg?v=1723037737",
    highResImageUrl:
      "https://store.arduino.cc/cdn/shop/files/TPX00052_03.back_564x376.jpg?v=1723037737",
    name: "გრავიტაცია: I2C ოზონის სენსორი (0-10ppm) სხვა",
    price: 300,
    category: "other",
  },
  {
    id: "8",
    imageUrl:
      "https://store.arduino.cc/cdn/shop/products/TPX00083_02.front_381x381.jpg?v=1621501518",
    highResImageUrl:
      "https://store.arduino.cc/cdn/shop/products/TPX00083_02.front_598x598.jpg?v=1621501518",
    name: "სილიკონის ხალიჩა შედუღებისთვის 450x300 მმ",
    price: 400,
    category: "kits",
  },
];

export function getProducts(id: string) {
  return popularProducts.find((product) => product.id === id) || null;
}
