import React from "react";
import { StarIcon2 } from "@/assets/icons";
import ImgGallery from "@/components/shared/img-gallery";
// import ThreeDScene from "./components/TableScene";
// import lazy threeDScene component
// import { Suspense } from "react";
// import { Loader } from "@/components/shared/loader";
import LeftSide from "./components/LeftSide";
import TabsComponent from "./components/tab";
const ThreeDScene = React.lazy(() => import("./components/TableScene"));

const Restaurant = () => {
  const foodData = [
    {
      id: 1,
      name: "Cheeseburger",
      rating: 4.5,
      description:
        "A juicy cheeseburger with a perfectly grilled patty, cheddar cheese, lettuce, tomato, and pickles.",
      count: 10,
      price: 8.99,
    },
    {
      id: 2,
      name: "Margherita Pizza",
      rating: 4.7,
      description:
        "Classic Margherita pizza with fresh mozzarella, basil, and a tomato sauce base.",
      count: 5,
      price: 12.99,
    },
    {
      id: 3,
      name: "Spaghetti Carbonara",
      rating: 4.6,
      description:
        "Traditional Italian pasta with a creamy carbonara sauce, pancetta, and Parmesan cheese.",
      count: 7,
      price: 14.99,
    },
    {
      id: 4,
      name: "Chicken Caesar Salad",
      rating: 4.4,
      description:
        "Crisp romaine lettuce with grilled chicken, Caesar dressing, croutons, and Parmesan cheese.",
      count: 8,
      price: 11.49,
    },
    {
      id: 5,
      name: "Vegetable Stir-Fry",
      rating: 4.3,
      description:
        "A colorful mix of fresh vegetables stir-fried with a savory sauce, served over rice.",
      count: 6,
      price: 9.99,
    },
  ];

  return (
    <div>
      <h3 className="font-bold text-[40px]">Name Restarount</h3>
      <div className="flex items-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <StarIcon2 />
          <span className="text-2xl">4.6</span>
        </div>
        <address className="not-italic text-[#03559E] underline text-2xl">
          Tashkent
        </address>
      </div>
      <ImgGallery />
      <div className="grid grid-cols-12 mt-10 gap-7">
        <div className="col-span-4 h-[580px]">
          <LeftSide />
        </div>
        <div className="col-span-8 rounded-lg border">
          <ThreeDScene />
        </div>
      </div>
      <TabsComponent foodData={foodData} />
    </div>
  );
};

export default Restaurant;
