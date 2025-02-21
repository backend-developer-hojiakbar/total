import { NavLink } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Toggle } from "@/components/ui/toggle";
import format from "@/lib/format";
import { format as f } from "date-fns";

const Card = ({ item, path }) => {
  return (
    <NavLink to={String(path + "/" + item.id)}>
      <Toggle aria-label="Toggle bold">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Phosphor Icons / Heart">
            <path
              id="Vector"
              d="M17.1873 3C15.2513 3 13.5563 3.8325 12.4998 5.23969C11.4432 3.8325 9.74819 3 7.81226 3C6.27122 3.00174 4.7938 3.61468 3.70412 4.70436C2.61444 5.79404 2.00149 7.27146 1.99976 8.8125C1.99976 15.375 11.7301 20.6869 12.1444 20.9062C12.2537 20.965 12.3757 20.9958 12.4998 20.9958C12.6238 20.9958 12.7459 20.965 12.8551 20.9062C13.2694 20.6869 22.9998 15.375 22.9998 8.8125C22.998 7.27146 22.3851 5.79404 21.2954 4.70436C20.2057 3.61468 18.7283 3.00174 17.1873 3ZM12.4998 19.3875C10.7879 18.39 3.49976 13.8459 3.49976 8.8125C3.50124 7.66921 3.95607 6.57317 4.7645 5.76475C5.57293 4.95632 6.66897 4.50149 7.81226 4.5C9.63569 4.5 11.1666 5.47125 11.806 7.03125C11.8625 7.16881 11.9586 7.28646 12.0822 7.36926C12.2057 7.45207 12.351 7.49627 12.4998 7.49627C12.6485 7.49627 12.7938 7.45207 12.9173 7.36926C13.0409 7.28646 13.137 7.16881 13.1935 7.03125C13.8329 5.46844 15.3638 4.5 17.1873 4.5C18.3305 4.50149 19.4266 4.95632 20.235 5.76475C21.0434 6.57317 21.4983 7.66921 21.4998 8.8125C21.4998 13.8384 14.2098 18.3891 12.4998 19.3875Z"
              fill="white"
            />
          </g>
        </svg>
      </Toggle>
      {/* <Carousel>
        <CarouselContent>
          <CarouselItem key={item.id}>
            <CarouselContent> */}
      <div h="300px">
        <img
          rounded="20px"
          w="300px"
          object-cover
          h-full
          width={300}
          src={item?.images[0]}
          alt=""
        />
      </div>
      {/* </CarouselContent>
          </CarouselItem>
        </CarouselContent>
      </Carousel> */}
      <h2 text-xl not-italic font-semibold leading-7 mt-4>
        {item.name}
      </h2>
      <p text="#7A7A7A" text-lg not-italic font-normal leading-6 mt-1>
        {item?.location_name}
      </p>
      <time
        text="#7A7A7A"
        text-lg
        not-italic
        font-normal
        leading-6
        mt-1
        dateTime=""
      >
        {f(item?.availability_dates[0]?.date, "MMM dd")}
      </time>
      <div flex items-center gap-1>
        <p text-2xl not-italic leading-9>
          {format(item?.daily_price)}
        </p>
        <span text="#7A7A7A" text-lg not-italic font-normal leading-6>
          ночь
        </span>
      </div>
    </NavLink>
  );
};

export default Card;
