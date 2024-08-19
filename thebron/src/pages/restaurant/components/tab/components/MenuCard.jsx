import { StarIcon2 } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import React from "react";

const MenuCard = ({ item }) => {
  const addToCard = (id) => {
    alert(id);
  };

  const [count, setCount] = React.useState(1);
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden">
      <img
        className="w-[360px] h-[360px] object-cover mx-auto rounded-lg"
        src="https://via.placeholder.com/360x360"
        alt="Card image"
      />

      <div className="mt-6">
        <div className="flex items-center gap-6 mb-2">
          <h2 className="text-xl font-bold">{item.name}</h2>
          <div className="flex items-center gap-1">
            <StarIcon2 /> <span className="font-medium">{item.rating}</span>
          </div>
        </div>

        <p className="text-gray-700 mb-4">{item.description}</p>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between gap-2">
            <Button onClick={() => setCount(count - 1)} className="w-20">
              -
            </Button>
            <Button className="w-full hover:bg-white bg-white border-primary border text-primary">
              {count}
            </Button>
            <Button onClick={() => setCount(count + 1)} className="w-20">
              +
            </Button>
          </div>
          <div className="flex justify-between gap-2 mt-2">
            <Button className="w-full hover:bg-white bg-white text-primary border border-primary">
              190 000 UZS
            </Button>
            <Button onClick={() => addToCard(item.id)} className="w-full">
              Add cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
