import { Button } from "@/components/ui/button";

const ShoppingList = ({ item }) => {
  return (
    <div className="flex justify-between items-center border-b pb-4 mt-4">
      <div className="flex gap-4 items-center">
        <img
          width={100}
          height={100}
          className="rounded-2xl object-cover w-[100px] h-[100px]"
          src="https://via.placeholder.com/100x100"
        />
        <h2 className="font-bold whitespace-nowrap">
          {item.name || "Product name"}
        </h2>
        <div className="text-primary font-bold">
          {item.price || "290 000"} sum
        </div>
      </div>
      <div className="flex gap-2 items-center h-full">
        <Button className="rounded-full w-[38px] h-[38px] text-[22px] pb-3">
          -
        </Button>
        <div className="flex items-center justify-center text-[20px] w-[40px] h-full">
          {item.count || 1}
        </div>
        <Button className="rounded-full w-[38px] h-[38px] text-[22px] pb-3">
          +
        </Button>
      </div>
    </div>
  );
};

export default ShoppingList;
