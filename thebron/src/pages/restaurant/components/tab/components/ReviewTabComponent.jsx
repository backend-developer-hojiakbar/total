import ReviewCard from "@/components/shared/review-card";
import { Button } from "@/components/ui/button";

const ReviewTabComponent = () => {
  const reviews = [
    {
      img: "https://randomuser.me/api/portraits/lego/0.jpg",
      name: "Sven",
      location: "Германия",
      date: "август 2023 г. ",
      term: "Срок аренды - Около недели",
      title:
        "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. C",
    },
    {
      img: "https://randomuser.me/api/portraits/lego/0.jpg",
      name: "Sven",
      location: "Германия",
      date: "август 2023 г. ",
      term: "Срок аренды - Около недели",
      title:
        "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. C",
    },
    {
      img: "https://randomuser.me/api/portraits/lego/0.jpg",
      name: "Sven",
      location: "Германия",
      date: "август 2023 г. ",
      term: "Срок аренды - Около недели",
      title:
        "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. C",
    },
    {
      img: "https://randomuser.me/api/portraits/lego/0.jpg",
      name: "Sven",
      location: "Германия",
      date: "август 2023 г. ",
      term: "Срок аренды - Около недели",
      title:
        "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. C",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 mt-10 gap-[58px] px-4">
        {reviews?.map((review) => (
          <ReviewCard key={review.id} item={review} />
        ))}
      </div>
      <Button className="mt-6" variant="outline">
        Показать все отзывы(23)
      </Button>
    </div>
  );
};

export default ReviewTabComponent;
