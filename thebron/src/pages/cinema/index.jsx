import React from "react";
import { StarIcon2 } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import ScrollToTop from "@/components/ScrollToTop";
import { useNavigate, useParams } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useCinema } from "./context";

const Cinema = () => {
  const [infoModal, setInfoModal] = React.useState(false);
  const [date, setDate] = React.useState();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    selectedTime,
    setSelectedTime,
    setSelectedDate,
    selectedSeats,
    setSelectedSeats,
  } = useCinema();

  const generateDates = (startDate, numberOfDays) => {
    return Array.from({ length: numberOfDays }, (_, i) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      return date;
    });
  };

  const times = [
    { time: "10:00", price: 10 },
    { time: "12:00", price: 10 },
    { time: "14:00", price: 10 },
    { time: "16:00", price: 10 },
    { time: "18:00", price: 10 },
    { time: "20:00", price: 10 },
    { time: "22:00", price: 10 },
  ];

  const today = new Date();
  const availableDates = generateDates(today, 9);

  const [selectedDateState, setSelectedDateState] = React.useState(today);

  const formatDateLabel = (date) => {
    const todayDate = new Date().toDateString();
    const tomorrowDate = new Date();
    tomorrowDate.setDate(today.getDate() + 1);
    const tomorrowString = tomorrowDate.toDateString();

    if (date.toDateString() === todayDate) {
      return t("today");
    } else if (date.toDateString() === tomorrowString) {
      return t("tomorrow");
    } else {
      return new Intl.DateTimeFormat(i18n.language, {
        day: "2-digit",
        month: "short",
      }).format(date);
    }
  };

  const selectTime = (time) => {
    setSelectedTime(time);
    navigate(`/cinema/${id}/places`);
  };

  const handleSelectData = (date) => {
    setSelectedDateState(date);
    setSelectedDate(date);
    console.log(date);
  };

  return (
    <div>
      <ScrollToTop />
      <Dialog open={infoModal} onOpenChange={setInfoModal}>
        <DialogContent className="lg:max-w-screen-sm lg:max-h-[95vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Interstellar</DialogTitle>
          </DialogHeader>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <img
                    width={185}
                    height={185}
                    className="h-[185px] w-[185px] object-cover rounded-xl"
                    src="https://variety.com/wp-content/uploads/2020/11/ODEON-Leicester-Square-London.jpg"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
          <p className="font-bold">Где вы будете</p>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <a
              href="https://yandex.com/maps?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "0px",
              }}
            >
              Yandex Maps
            </a>
            <a
              href="https://yandex.com/maps/?ll=6.437682%2C49.921842&utm_medium=mapframe&utm_source=maps&z=8"
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "14px",
              }}
            >
              Yandex Maps: search for places, transport, and routes
            </a>
            <iframe
              src="https://yandex.com/map-widget/v1/?ll=6.437682%2C49.921842&z=8"
              width="100%"
              height="270px"
              frameBorder="1"
              allowFullScreen
              style={{ position: "relative" }}
            ></iframe>
          </div>
          <p className="font-medium text-base">
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.Yorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos...
          </p>
        </DialogContent>
      </Dialog>

      <div className="flex items-center gap-4">
        <Button
          onClick={() => navigate(-1)}
          variant="outline"
          className="w-[32px] h-[32px] p-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            aria-label={t("gotoback")}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m14 7l-5 5l5 5"
            />
          </svg>
        </Button>
        <p className="text-lg font-medium">{t("gotoback")}</p>
      </div>
      <div className="mt-10 flex items-start gap-7 border-b pb-8">
        <img
          width={528}
          height={640}
          className="rounded-2xl"
          src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg"
          alt={t("interstellar poster")}
        />
        <div>
          <h2 className="text-4xl font-bold">Interstellar</h2>
          <div className="flex text-xl font-medium items-center gap-1 mt-5">
            <StarIcon2 /> <span>8.6</span>
          </div>
          <p className="flex font-medium items-center text-xl mt-4 gap-2">
            {t("year")}: <span className="text-[#666666]">2022</span>
          </p>
          <p className="flex font-medium items-center text-xl mt-4 gap-2">
            {t("genre")}: <span className="text-[#666666]">Epic fantasy</span>
          </p>
          <p className="flex font-medium items-center text-xl mt-4 gap-2">
            {t("time")}: <span className="text-[#666666]">1h 22m</span>
          </p>
          <p className="text-xl mt-4 text-primary font-medium cursor-pointer">
            {t("reviews", { count: 198 })}
          </p>
          <p className="mt-4 text-[20px]">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit
            dui. Nullam vel erat sed sapien laoreet mattis. Proin nec mauris eu
            tortor consectetur fringilla. Donec efficitur tellus et purus
            lacinia, et tristique ligula scelerisque lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum
            et, consequat nibh. Etiam non elit dui. Nullam vel erat sed sapien
            laoreet mattis. Proin nec mauris eu tortor consectetur fringilla.
            Donec efficitur tellus et purus lacinia, et tristique ligula
            scelerisque lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam
            non elit dui. Nullam vel erat sed sapien laoreet mattis. Proin nec
            mauris eu tortor consectetur fringilla. Donec efficitur tellus et
            purus lacinia, et tristique ligula scelerisque
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-10">
        {availableDates.map((item, idx) => (
          <Button
            key={idx}
            className={`px-8 py-5 rounded-xl border-1 ${
              selectedDateState.toDateString() === item.toDateString()
                ? "bg-primary text-white hover:bg-primary border-transparent hover:text-white"
                : "bg-white text-black"
            }`}
            variant="outline"
            onClick={() => handleSelectData(item)}
          >
            <p className="text-xl font-medium">{formatDateLabel(item)}</p>
          </Button>
        ))}

        <Popover>
          <PopoverTrigger asChild>
            <svg
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 256 256"
              aria-label={t("refresh")}
            >
              <path
                fill="#03559E"
                d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-96-88v64a8 8 0 0 1-16 0v-51.06l-4.42 2.22a8 8 0 0 1-7.16-14.32l16-8A8 8 0 0 1 112 120m59.16 30.45L152 176h16a8 8 0 0 1 0 16h-32a8 8 0 0 1-6.4-12.8l28.78-38.37a8 8 0 1 0-13.31-8.83a8 8 0 1 1-13.85-8A24 24 0 0 1 176 136a23.76 23.76 0 0 1-4.84 14.45"
              />
            </svg>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex items-center gap-6 mt-10">
        <strong className="text-[24px]">Intersteller</strong>
        <div
          onClick={() => setInfoModal(true)}
          className="flex items-center gap-1 hover:underline cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
            />
          </svg>
          <span className="text-[20px]">{t("info")}</span>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">Uzb</Button>
          <Button variant="outline">Rus</Button>
          <Button variant="outline">Eng</Button>
        </div>
      </div>
      <div className="p-5 bg-[#F9F9F9] mt-6 rounded-2xl">
        <div className="flex gap-2 mb-2">
          <div className="text-[20px] font-bold">Зал 1</div>
          <div
            onClick={() => setInfoModal(true)}
            className="flex items-center gap-1 hover:underline cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
              />
            </svg>
            <span className="text-[15px]">{t("info")}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {times.map((item) => (
            <Button
              onClick={() => selectTime(item.time)}
              key={item}
              className="px-10 text-[18px]"
              variant="outline"
            >
              {item.time}
            </Button>
          ))}
        </div>
        <div className="flex gap-2 mb-2 mt-5">
          <div className="text-[20px] font-bold">Зал 2</div>
          <div
            onClick={() => setInfoModal(true)}
            className="flex items-center gap-1 hover:underline cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
              />
            </svg>
            <span className="text-[15px]">{t("info")}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {times.map((item) => (
            <Button key={item} className="px-10 text-[18px]" variant="outline">
              {item.time}
            </Button>
          ))}
        </div>

        <div className="flex gap-2 mb-2 mt-5">
          <div className="text-[20px] font-bold">Зал 3</div>
          <div
            onClick={() => setInfoModal(true)}
            className="flex items-center gap-1 hover:underline cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
              />
            </svg>
            <span className="text-[15px]">{t("info")}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {times.map((item) => (
            <Button key={item} className="px-10 text-[18px]" variant="outline">
              {item.time}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cinema;
