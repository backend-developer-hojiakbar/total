import ScrollToTop from "@/components/ScrollToTop";

const ImgGallery = () => {
  return (
    <>
      <ScrollToTop />
      <div className="h-[408px] grid grid-cols-4 grid-rows-2 gap-2 mt-10">
        <div className="bg-gray-200 grid-item-1 rounded-md flex items-center justify-center">
          <img
            width={400}
            height={408}
            src={
              "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/d2/1b/65/ugol.jpg?w=600&h=-1&s=1" ||
              "https://via.placeholder.com/400x408"
            }
            alt="Image 1"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div className="bg-gray-200 grid-item-2 flex rounded-md items-center justify-center">
          <img
            width={200}
            height={204}
            src={
              "https://res.cloudinary.com/tf-lab/image/upload/w_276,h_216,c_fill,g_auto:subject,q_auto,f_auto/restaurant/b084ab73-aa24-48d5-8272-dee1bacdb1c8/004e84f5-0411-4e68-905a-ad2d5fe431d4.jpg" ||
              "https://via.placeholder.com/200x204"
            }
            alt="Image 2"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="bg-gray-200 grid-item-2 flex rounded-md items-center justify-center">
          <img
            width={200}
            height={204}
            src={
              "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/99/10/23/pratolina-rez-de-chaussee.jpg?w=600&h=-1&s=1" ||
              "https://via.placeholder.com/200x204"
            }
            alt="Image 3"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="bg-gray-200 grid-item-2 flex rounded-md items-center justify-center">
          <img
            width={200}
            height={204}
            src={
              "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/27/71/35/photo4jpg.jpg?w=600&h=400&s=1" ||
              "https://via.placeholder.com/200x204"
            }
            alt="Image 4"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="bg-gray-200 grid-item-2 flex rounded-md items-center justify-center">
          <img
            width={200}
            height={204}
            src={
              "https://assets3.thrillist.com/v1/image/3122031/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70" ||
              "https://via.placeholder.com/200x204"
            }
            alt="Image 5"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </>
  );
};

export default ImgGallery;
