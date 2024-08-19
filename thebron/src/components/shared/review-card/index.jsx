import { CaretRightIcon, StarIcon2 } from "@/assets/icons";

const ReviewCard = ({ item }) => {
  return (
    <div>
      <div flex items-center gap="18px">
        <img rounded-full src={item?.img} alt="" w="52px" h="52px" />
        <div flex flex-col gap="2px">
          <h6 className="not-italic font-bold text-base">{item?.name}</h6>
          <p className="not-italic font-normal text-[14px] text-gray-500">
            {item?.location}
          </p>
        </div>
      </div>
      <div flex items-center gap="8px" mt="8px">
        <div flex items-center gap="2px">
          <StarIcon2 />
          <StarIcon2 />
          <StarIcon2 />
          <StarIcon2 />
          <StarIcon2 />
        </div>
        <h6>{item?.date}</h6>
        <p className="text-[14px] font-medium text-[#a29f9f]">{item?.term}</p>
      </div>
      <p mt="10px" font="400" leading="20px">
        {item?.term}
      </p>
      <div mt="10px">
        <p text-black text="14px" font-normal max-w="812px">
          {item?.title}
        </p>
        <div flex items-center gap="8px" mt="12px" cursor-pointer>
          <h6 font="500" text="15px" leading="24px">
            Показать ещё
          </h6>
          <CaretRightIcon />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
