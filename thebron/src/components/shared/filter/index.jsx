import { FilterIcon, StarIcon, StarIcon2 } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AccordionFilter } from "../accordion";
import Nouislider from "nouislider-react";
import formatNumber from "@/lib/format";

const Filter = () => {
  const [date, setDate] = useState({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  const [minVal, setMinVal] = useState();
  const [maxVal, setMaxVal] = useState();
  const [ageCount, setAge] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [babies, setBabies] = useState(0);
  const [pets, setPets] = useState(0);
  const [guestModal, setGuestModal] = useState(false);
  const [range, setRange] = useState([200000, 1000000]);

  const handleSlide = (value) => {
    setRange([value[0], value[1]]);
    console.log(range);
  };

  const amenities = [
    {
      title: "Wifi",
      checked: false,
      category: 1,
    },
    {
      title: "Cтиральная машина",
      checked: false,
      category: 1,
    },
    {
      title: "Кондиционер",
      checked: false,
      category: 1,
    },
    {
      title: "Рабочая зона",
      checked: false,
      category: 1,
    },
    {
      title: "Фен",
      checked: false,
      category: 1,
    },
    {
      title: "Кухня",
      checked: false,
      category: 1,
    },
    {
      title: "Сушильная машина",
      checked: false,
      category: 1,
    },
    {
      title: "Отопление",
      checked: false,
      category: 1,
    },
    {
      title: "Телевизор",
      checked: false,
      category: 1,
    },
    {
      title: "Утюг",
      checked: false,
      category: 1,
    },
    {
      title: "Бассейн",
      checked: false,
      category: 2,
    },
    {
      title: "Бесплатная парковка",
      checked: false,
      category: 2,
    },
    {
      title: "Кроватка",
      checked: false,
      category: 2,
    },
    {
      title: "Спортзал",
      checked: false,
      category: 2,
    },
    {
      title: "Возможность покурить",
      checked: false,
      category: 2,
    },
    {
      title: "Джакузи",
      checked: false,
      category: 2,
    },
    {
      title: "Зарядка электромобиля",
      checked: false,
      category: 2,
    },
    {
      title: "Кровать кинг-сайз",
      checked: false,
      category: 2,
    },
    {
      title: "Зона барбекю",
      checked: false,
      category: 2,
    },
    {
      title: "Камин",
      checked: false,
      category: 2,
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button flex items-center gap-2 variant="outline">
          Фильтр <FilterIcon />
        </Button>
      </DialogTrigger>
      <DialogContent
        className="p-0 overflow-y-auto lg:max-h-[95vh]"
        flex
        flex-col
        h="850px"
        min-w="780px"
      >
        <DialogHeader
          sticky
          top-0
          bg-white
          py-5
          border-b
          flex
          justify-start
          items-center
        >
          <DialogTitle>Фильтры</DialogTitle>
        </DialogHeader>
        <div mt-4 mx-0 px="20px">
          <ToggleGroup
            defaultValue={"bold"}
            flex
            items-center
            className="gap-0"
            mx-0
            w-full
            type="single"
          >
            <ToggleGroupItem
              className="data-[state=on]:bg-primary data-[state=on]:text-white data-[state=on]:border-transparent !data-[state=off]:border"
              rounded-r-none
              p-0
              w-full
              mx-0
              value="bold"
              aria-label="Toggle"
            >
              С начало дешедешевле
            </ToggleGroupItem>
            <ToggleGroupItem
              className="data-[state=on]:bg-primary data-[state=on]:text-white data-[state=on]:border-transparent !data-[state=off]:border"
              rounded-l-none
              p-0
              w-full
              mx-0
              value="italic"
              aria-label="Toggle"
            >
              С начначала дорогие
            </ToggleGroupItem>
          </ToggleGroup>
          <p text-sm text-muted-foreground mt="40px" mb-2>
            Прибытие | Выезд
          </p>
          <Popover w-full>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal rounded-b-none",
                  !date && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "LLL dd, y")} -{" "}
                      {format(date.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(date.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="center">
              <Calendar
                w-full
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
          <br />
          <Popover>
            <PopoverTrigger asChild>
              <Button
                w-full
                flex
                items-center
                justify-between
                border-t-none
                rounded-t-none
                variant="outline"
              >
                1 гость
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.692 7.94254L10.442 14.1925C10.384 14.2506 10.3151 14.2967 10.2392 14.3282C10.1633 14.3597 10.082 14.3758 9.99986 14.3758C9.91772 14.3758 9.8364 14.3597 9.76052 14.3282C9.68465 14.2967 9.61572 14.2506 9.55767 14.1925L3.30767 7.94254C3.1904 7.82526 3.12451 7.6662 3.12451 7.50035C3.12451 7.3345 3.1904 7.17544 3.30767 7.05816C3.42495 6.94088 3.58401 6.875 3.74986 6.875C3.91571 6.875 4.07477 6.94088 4.19205 7.05816L9.99986 12.8668L15.8077 7.05816C15.8657 7.00009 15.9347 6.95403 16.0105 6.9226C16.0864 6.89117 16.1677 6.875 16.2499 6.875C16.332 6.875 16.4133 6.89117 16.4892 6.9226C16.565 6.95403 16.634 7.00009 16.692 7.05816C16.7501 7.11623 16.7962 7.18517 16.8276 7.26104C16.859 7.33691 16.8752 7.41823 16.8752 7.50035C16.8752 7.58247 16.859 7.66379 16.8276 7.73966C16.7962 7.81553 16.7501 7.88447 16.692 7.94254Z"
                    fill="#343330"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[544px]">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Гости</h4>
                  <p className="text-sm text-muted-foreground">
                    Если вы везёте с собой больше 2 питомцев, обязательно
                    обсудите это с хозяином.
                  </p>
                </div>
                <div flex items-center justify-between>
                  <p flex justify-center flex-col>
                    <span text-base not-italic font-bold leading-6>
                      Взрослые
                    </span>
                    <span text="14px" not-italic font-normal leading-6>
                      От 13 лет
                    </span>
                  </p>
                  <div flex items-center gap="12px">
                    <Button
                      w="40px"
                      h="40px"
                      className="rounded-full"
                      variant="outline"
                      onClick={() => setAge((prev) => prev - 1)}
                    >
                      -
                    </Button>
                    <span text-center text-xl not-italic font-medium leading-6>
                      {ageCount}
                    </span>
                    <Button
                      w="40px"
                      h="40px"
                      className="rounded-full"
                      variant="outline"
                      onClick={() => setAge((prev) => prev + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div flex items-center justify-between>
                  <p flex justify-center flex-col>
                    <span text-base not-italic font-bold leading-6>
                      Дети
                    </span>
                    <span text="14px" not-italic font-normal leading-6>
                      2-12 лет
                    </span>
                  </p>
                  <div flex items-center gap="12px">
                    <Button
                      w="40px"
                      h="40px"
                      className="rounded-full"
                      variant="outline"
                      onClick={() => setChildCount((prev) => prev - 1)}
                    >
                      -
                    </Button>
                    <span text-center text-xl not-italic font-medium leading-6>
                      {childCount}
                    </span>
                    <Button
                      w="40px"
                      h="40px"
                      className="rounded-full"
                      variant="outline"
                      onClick={() => setChildCount((prev) => prev + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div flex items-center justify-between>
                  <p flex justify-center flex-col>
                    <span text-base not-italic font-bold leading-6>
                      Младенцы
                    </span>
                    <span text="14px" not-italic font-normal leading-6>
                      Младше 2{" "}
                    </span>
                  </p>
                  <div flex items-center gap="12px">
                    <Button
                      w="40px"
                      h="40px"
                      className="rounded-full"
                      variant="outline"
                      onClick={() => setBabies((prev) => prev - 1)}
                    >
                      -
                    </Button>
                    <span text-center text-xl not-italic font-medium leading-6>
                      {babies}
                    </span>
                    <Button
                      w="40px"
                      h="40px"
                      className="rounded-full"
                      variant="outline"
                      onClick={() => setBabies((prev) => prev + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div flex items-center justify-between>
                  <p flex justify-center flex-col>
                    <span text-base not-italic font-bold leading-6>
                      Домашние животные
                    </span>
                    <span text="14px" not-italic font-normal leading-6>
                      Младше 2
                    </span>
                  </p>
                  <div flex items-center gap="12px">
                    <Button
                      w="40px"
                      h="40px"
                      className="rounded-full"
                      variant="outline"
                      onClick={() => setPets((prev) => prev - 1)}
                    >
                      -
                    </Button>
                    <span text-center text-xl not-italic font-medium leading-6>
                      {pets}
                    </span>
                    <Button
                      w="40px"
                      h="40px"
                      className="rounded-full"
                      variant="outline"
                      onClick={() => setPets((prev) => prev + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
              <div w="100%" h="1px" bg="#EDEDED" my=""></div>
              <div flex items-center justify-between>
                <Button
                  onClick={() => setGuestModal((prev) => (prev = false))}
                  variant="ghost"
                  underline
                >
                  Отменить
                </Button>
                <Button>Сохранить</Button>
              </div>
            </PopoverContent>
          </Popover>
          <div border-b w-full my="40px"></div>
          <DialogTitle>Ценовой диапазон</DialogTitle>
          <p text-lg not-italic font-normal mt-2 leading-6>
            Цены за ночь без учета налогов и сборов
          </p>
          <Nouislider
            onChange={handleSlide}
            className="mt-[30px]"
            range={{ min: 200000, max: 10000000 }}
            start={range}
            connect
          />
          <div flex gap-4 mt="55px">
            <div w-full>
              <p className="text-[14px] mb-1" text="#A3A3A3" leading-4>
                Минимум
              </p>
              <Input
                onChange={(e) => setRange([e.target.value])}
                text="#0A0A0A"
                value={formatNumber(range[0])}
                placeholder="200 000 сум"
              />
            </div>
            <div w-full>
              <p className="text-[14px] mb-1" text-xs text="#A3A3A3" leading-4>
                Максимум
              </p>
              <Input
                onChange={(e) => setRange([range[0], e.target.value])}
                text="#0A0A0A"
                value={formatNumber(range[1])}
                placeholder="1 200 000 сум"
              />
            </div>
          </div>
          <p className="mt-[40px]">title</p>
          <div flex justify-start items-center>
            <ToggleGroup defaultValue="5" type="single">
              <ToggleGroupItem
                className="flex items-center gap-2 data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
                value="5"
                aria-label="Toggle bold"
              >
                <StarIcon2 />5
              </ToggleGroupItem>
              <ToggleGroupItem
                className="flex items-center gap-2 data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
                value="4"
                aria-label="Toggle bold"
              >
                <StarIcon2 />4
              </ToggleGroupItem>
              <ToggleGroupItem
                className="flex items-center gap-2 data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
                value="3"
                aria-label="Toggle bold"
              >
                <StarIcon2 />3
              </ToggleGroupItem>
              <ToggleGroupItem
                className="flex items-center gap-2 data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
                value="2"
                aria-label="Toggle bold"
              >
                <StarIcon2 />2
              </ToggleGroupItem>
              <ToggleGroupItem
                className="flex items-center gap-2 data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
                value="1"
                aria-label="Toggle bold"
              >
                <StarIcon2 />1
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div border-b w-full my="40px"></div>
          <DialogTitle>Комнаты и кровати</DialogTitle>
          <p text-lg not-italic font-normal mt-2 leading-6>
            Спальни
          </p>
          <ToggleGroup
            defaultValue="!need"
            type="single"
            className="flex justify-start gap-2 mt-[10px]"
          >
            <ToggleGroupItem
              className="data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
              value="!need"
              aria-label="Toggle bold"
            >
              Неважно
            </ToggleGroupItem>
            <ToggleGroupItem
              className="data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
              value="1"
              aria-label="Toggle bold"
            >
              1
            </ToggleGroupItem>
            <ToggleGroupItem
              className="data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
              value="2"
              aria-label="Toggle bold"
            >
              2
            </ToggleGroupItem>
            <ToggleGroupItem
              className="data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
              value="3"
              aria-label="Toggle bold"
            >
              3
            </ToggleGroupItem>
            <ToggleGroupItem
              className="data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
              value="4"
              aria-label="Toggle bold"
            >
              4
            </ToggleGroupItem>
            <ToggleGroupItem
              className="data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
              value="5"
              aria-label="Toggle bold"
            >
              5
            </ToggleGroupItem>
            <ToggleGroupItem
              className="data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
              value="6"
              aria-label="Toggle bold"
            >
              6
            </ToggleGroupItem>
            <ToggleGroupItem
              className="data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
              value="7"
              aria-label="Toggle bold"
            >
              7+
            </ToggleGroupItem>
          </ToggleGroup>
          <p text-lg not-italic font-normal mt-2 leading-6>
            Кровати
          </p>
          <ToggleGroup
            defaultValue="!need"
            type="single"
            className="flex justify-start gap-2 mt-[10px]"
          >
            <ToggleGroupItem
              className="data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
              value="!need"
              aria-label="Toggle bold"
            >
              Неважно
            </ToggleGroupItem>
            <ToggleGroupItem
              className="data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
              value="1"
              aria-label="Toggle bold"
            >
              1
            </ToggleGroupItem>
            <ToggleGroupItem
              className="data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
              value="2"
              aria-label="Toggle bold"
            >
              2
            </ToggleGroupItem>
            <ToggleGroupItem
              className="data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
              value="3"
              aria-label="Toggle bold"
            >
              3
            </ToggleGroupItem>
            <ToggleGroupItem
              className="data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
              value="4"
              aria-label="Toggle bold"
            >
              4
            </ToggleGroupItem>
            <ToggleGroupItem
              className="data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
              value="5"
              aria-label="Toggle bold"
            >
              5
            </ToggleGroupItem>
            <ToggleGroupItem
              className="data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
              value="6"
              aria-label="Toggle bold"
            >
              6
            </ToggleGroupItem>
            <ToggleGroupItem
              className="data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
              value="7"
              aria-label="Toggle bold"
            >
              7+
            </ToggleGroupItem>
          </ToggleGroup>
          <p text-lg not-italic font-normal mt-2 leading-6>
            Ванные
          </p>
          <ToggleGroup
            defaultValue="!need"
            type="single"
            className="flex justify-start gap-2 mt-[10px]"
          >
            <ToggleGroupItem
              className="data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
              value="!need"
              aria-label="Toggle bold"
            >
              Неважно
            </ToggleGroupItem>
            <ToggleGroupItem
              className="data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
              value="1"
              aria-label="Toggle bold"
            >
              1
            </ToggleGroupItem>
            <ToggleGroupItem
              className="data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
              value="2"
              aria-label="Toggle bold"
            >
              2
            </ToggleGroupItem>
            <ToggleGroupItem
              className="data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
              value="3"
              aria-label="Toggle bold"
            >
              3
            </ToggleGroupItem>
            <ToggleGroupItem
              className="data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
              value="4"
              aria-label="Toggle bold"
            >
              4
            </ToggleGroupItem>
            <ToggleGroupItem
              className="data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
              value="5"
              aria-label="Toggle bold"
            >
              5
            </ToggleGroupItem>
            <ToggleGroupItem
              className="data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
              value="6"
              aria-label="Toggle bold"
            >
              6
            </ToggleGroupItem>
            <ToggleGroupItem
              className="data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-white rounded-full px-4 py-2 border"
              value="7"
              aria-label="Toggle bold"
            >
              7+
            </ToggleGroupItem>
          </ToggleGroup>
          <div border-b w-full mt="40px"></div>
          <AccordionFilter data={amenities} title="Удобства" />
        </div>
        <DialogFooter
          p-4
          border-t
          sticky
          bottom-0
          bg-white
          w-full
          className="sm:justify-start"
        >
          <div flex justify-between w-full>
            <DialogClose asChild>
              <Button type="button" variant="ghost">
                Clear All
              </Button>
            </DialogClose>
            <Button type="button">Show 1000+ places</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Filter;
