import { Button } from "@/components/ui/button";

const LikedCard = ({ item }) => {
  return (
    <div className="border-b pb-4 flex justify-between items-center mt-10">
      <div className="flex items-center gap-4">
        <img
          className="w-[120px] h-[120px] object-cover rounded-lg"
          src={item?.img || "https://via.placeholder.com/120x120"}
          alt="liked"
        />
        <p className="text-2xl font-bold">{item?.title || "Title"}</p>
        <div className="px-[11px] py-[8px] border border-primary rounded-lg text-primary max-w-[125px] text-center">
          {item?.price || "190 000 UZS"}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button className="w-[48px] h-[48px] rounded-full text-[24px]">
          <span className="flex items-center justify-center mb-1">-</span>
        </Button>
        <div className="px-[11px] py-[8px] border border-primary rounded-lg text-primary min-w-[125px] text-center">
          {item?.count || 1}
        </div>
        <Button className="w-[48px] h-[48px] rounded-full text-[24px]">
          <span className="flex items-center justify-center mb-1">+</span>
        </Button>
      </div>
    </div>
  );
};

export default LikedCard;
