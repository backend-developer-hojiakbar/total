import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useGetResortByIDQuery } from '@/features/resort'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button'; 7
import { StarIcon } from '@/assets/icons';
import { WifiIcon } from '@/assets/icons';
import { CalendarBlankIcon } from '@/assets/icons';
import { DoorOpenIcon } from '@/assets/icons';
import userImg from "@/assets/images/userImg.png"
import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import ScrollToTop from '@/components/ScrollToTop';
import { YMaps, Map } from "react-yandex-maps";
import ReviewCard from '@/components/shared/review-card';
import { Skeleton } from '@/components/ui/skeleton';
import formatNumber from '@/lib/format'
import { useDispatch, useSelector } from 'react-redux';
import { pay } from '@/store/bron.slice';

const DetailsPage = () => {
  const { id } = useParams()
  const { data: resort, isLoading } = useGetResortByIDQuery(id)
  const textRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [date, setDate] = React.useState({ from: new Date(2024, 0, 1), to: addDays(new Date(2024, 0, 1), 1) })
  const [guestModal, setGuestModal] = useState(false)
  const [counts, setCounts] = useState({ age: 0, child: 0, babies: 0, pets: 0 });
  const [bronDay, setBronDay] = useState(() => {
    const initialFrom = date.from;
    const initialTo = date.to;
    return (format(initialFrom, 't') - format(initialTo, 't')) / 86400;
  });
  const { bron } = useSelector((store) => store)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const reviews = [
    {
      img: 'https://randomuser.me/api/portraits/lego/0.jpg',
      name: 'Sven',
      location: 'Германия',
      date: 'август 2023 г. ',
      term: 'Срок аренды - Около недели',
      title: 'Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. C',
    },
    {
      img: 'https://randomuser.me/api/portraits/lego/0.jpg',
      name: 'Sven',
      location: 'Германия',
      date: 'август 2023 г. ',
      term: 'Срок аренды - Около недели',
      title: 'Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. C',
    },
    {
      img: 'https://randomuser.me/api/portraits/lego/0.jpg',
      name: 'Sven',
      location: 'Германия',
      date: 'август 2023 г. ',
      term: 'Срок аренды - Около недели',
      title: 'Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. C',
    },
    {
      img: 'https://randomuser.me/api/portraits/lego/0.jpg',
      name: 'Sven',
      location: 'Германия',
      date: 'август 2023 г. ',
      term: 'Срок аренды - Около недели',
      title: 'Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. C',
    }
  ]

  useEffect(() => {
    setBronDay((format(date?.from, 't') - format(date?.to, 't')) / 86400);
  }, [date])

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  const totalAmount = useMemo(() => {
    return resort?.daily_price * (-bronDay);
  }, [resort, bronDay]);

  const startBron = () => {
    new Promise((res, rej) => {
      dispatch(pay({ data: resort, amount: totalAmount + 120000 }))
      res()
    }).then(() => {
      navigate(`${location.pathname}/bron`)
    }).catch((err) => {
      alert(err.message)
    })
  }

  const updateCounts = (type, value) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] + value
    }));
  };

  return (
    <div w="90%" max-w="1800px" mx-auto mt-0 px-6>
      <ScrollToTop />
      <div>
        {
          isLoading
            ? <Skeleton h="40px" w='400px' mb='35px' />
            : <h6 text="28px" not-italic font-semibold leading-9 mb="40px">{resort?.name}</h6>
        }
        <div grid grid-cols-2 gap-2>
          {
            isLoading ?
              <>
                <div w-full>
                  <Skeleton h="416px" w-full />
                </div>
                <div w-full h="300px">
                  <div grid grid-cols-2 gap-2>
                    <div flex flex-col gap-2 w-full h="300px">
                      <div w-full h="208px">
                        <Skeleton h="208px" w-full />
                      </div>
                      <div w-full>
                        <Skeleton h="199px" w-full />
                      </div>
                      <div w-full h="300px"></div>
                    </div>
                    <div flex flex-col gap-2 w-full h="300px">
                      <div w-full h="300px">
                        <Skeleton h="208px" w-full />
                      </div>
                      <div w-full h="300px">
                        <Skeleton h="190px" w-full />
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </>
              :
              <>
                <div w-full>
                  <img h="416px" rounded="8px" object-cover w-full src={resort?.images[0]?.img} alt="" />
                </div>
                <div w-full h="300px">
                  <div grid grid-cols-2 gap-2>
                    <div flex flex-col gap-2 w-full h="300px">
                      <div w-full h="208px">
                        <img h="208px" rounded="8px" object-cover w-full src={resort?.images[1]?.img} alt="" />
                      </div>
                      <div w-full>
                        <img h="199px" object-cover rounded="8px" w-full src={resort?.images[2]?.img} alt="" />
                      </div>
                      <div w-full h="300px"></div>
                    </div>
                    <div flex flex-col gap-2 w-full h="300px">
                      <div w-full h="300px">
                        <img h="208px" object-cover w-full rounded="8px" src={resort?.images[3]?.img} alt="" />
                      </div>
                      <div w-full h="300px">
                        <img h="199px" object-cover w-full rounded="8px" src={resort?.images[4]?.img} alt="" />
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </>
          }
        </div>
      </div>

      <div grid grid-cols-12 gap-4 mt="40px" w="100%" className=' '>
        <div col-span-8>
          <div flex flex-col gap="16px">
            <h6 text="24px" font="700">{resort?.name}</h6>
            <p flex gap-3 items-center><span>{resort?.amenities[0]?.name}</span>
              <span>{resort?.amenities[1]?.name}</span>
              <span>{resort?.amenities[2]?.name}</span>
              <span>{resort?.amenities[3]?.name}</span>
            </p>
            <div flex items-center gap="8px">
              <span flex items-center gap="8px" font="500">
                <StarIcon />
                4.6
              </span>
              <p text="16px" font="700">24 отзыва</p>
            </div>
          </div>
          <div w="100%" h="1px" bg="#EDEDED" my="40px"></div>
          <div flex items-center gap="16px">
            <img src={userImg} alt="user img" w="60px" h="60px" />
            <div>
              <h6 text="18px" font="700">Хозяин: Grigory Ishuk</h6>
              <p text="16px" mt-1 font="400px">5 лет принимает гостей</p>
            </div>
          </div>
          <div w="100%" h="1px" bg="#EDEDED" my="40px"></div>
          <div flex flex-col gap="16px">
            <div flex items-center gap="16px">
              <WifiIcon />
              <div>
                <h6 text="18px" font="700">Быстрый Wi-Fi </h6>
                <p mt-1 text="16px" font="400">На скорости 235 Мбит/с вы можете принимать видео звонки и транслировать видео для всей группы</p>
              </div>
            </div>
            <div flex items-center gap="16px">
              <CalendarBlankIcon />
              <h6 text="18px" font="700">Беспоатная отмена в течение 48 часов</h6>
            </div>
            <div flex items-center gap="16px">
              <DoorOpenIcon />
              <div>
                <h6 text="18px" font="700">Самостоятельное прибытие </h6>
                <p mt-1 text="16px" font="400">Вы заселитесь самостоятельно на двери умный звонок</p>
              </div>
            </div>
          </div>
          <div mt="40px">
            <p ref={textRef} className={expanded ? '' : 'line-clamp-4'} style={{ fontSize: '18px', fontWeight: 400 }}>
              Your long content goes here Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque molestiae suscipit quaerat pariatur explicabo id blanditiis modi minima nihil unde nam corrupti vitae natus velit ratione facere sed laborum aliquam, dolores cum. Illum fugit numquam deserunt dicta magni ea in, voluptatibus esse aut illo accusantium, dolores ipsum blanditiis labore quos, autem culpa ut soluta accusamus cupiditate? Quia, aspernatur consectetur temporibus laborum beatae cum asperiores soluta vero illum officiis voluptate esse odio neque, velit deserunt, excepturi amet itaque autem repudiandae iure quae? Facilis laboriosam quas necessitatibus incidunt, obcaecati alias quidem itaque vero dignissimos eius consectetur fugiat, doloribus delectus nisi et exercitationem!
            </p>
            <button onClick={toggleReadMore} className="flex items-center justify-center gap-4 mt-4 text-lg font-bold underline">
              {expanded ? 'Скрыть' : 'Показать ещё'}
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.43 10.4422L11.1605 16.6922C11.0837 16.7503 10.9925 16.7963 10.8921 16.8278C10.7917 16.8592 10.6841 16.8754 10.5755 16.8754C10.4668 16.8754 10.3592 16.8592 10.2588 16.8278C10.1584 16.7963 10.0672 16.7503 9.99039 16.6922C9.91356 16.6341 9.85261 16.5652 9.81103 16.4893C9.76945 16.4135 9.74805 16.3321 9.74805 16.25C9.74805 16.1679 9.76945 16.0866 9.81103 16.0107C9.85261 15.9348 9.91356 15.8659 9.99039 15.8078L17.6759 10L9.99039 4.1922C9.83522 4.07492 9.74805 3.91586 9.74805 3.75001C9.74805 3.58416 9.83522 3.4251 9.99039 3.30782C10.1456 3.19055 10.356 3.12466 10.5755 3.12466C10.7949 3.12466 11.0054 3.19055 11.1605 3.30782L19.43 9.55782C19.5069 9.61587 19.5679 9.6848 19.6095 9.76067C19.6511 9.83655 19.6726 9.91788 19.6726 10C19.6726 10.0821 19.6511 10.1635 19.6095 10.2393C19.5679 10.3152 19.5069 10.3842 19.43 10.4422Z" fill="#343330" />
              </svg>
            </button>
          </div>
          <div w="100%" h="1px" bg="#EDEDED" my="40px"></div>
          <Carousel relative>
            <div absolute right="40px">
              <CarouselPrevious />
              <CarouselNext />
            </div>
            <p absolute top="-14px" text-xl not-italic font-bold>Где вы будете спать</p>
            <CarouselContent mt="40px">
              {resort?.images?.map((item, index) => (
                <CarouselItem key={index} className="basis-1/2">
                  <div h="264px" w="">
                    <img object-cover w-full h-full src={item?.img} alt="Home img" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div flex gap="30px" my="60px">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md"
            />
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md"
            />
          </div>
        </div>
        <div col-span-4>
          <div w="530px" sticky top-8>
            <Card>
              <CardHeader>
                <p text-2xl py-0 font-bold>{formatNumber(resort?.daily_price)} сум <span text-2xl font-normal>ночь</span></p>
              </CardHeader>
              <CardContent>
                <CardDescription mb-1>Прибытие | Выезд</CardDescription>
                <div w-full>
                  <Popover w-full>
                    <PopoverTrigger asChild>
                      <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date?.from ? (
                          date.to ? (
                            <>
                              {format(date.from, "dd LLL, y")} -{" "}
                              {format(date.to, "dd LLL, y")}
                            </>
                          ) : (
                            format(date.from, "LLL dd, y")
                          )
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 mr-[50px]" align="start">
                      <Calendar w-full
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <CardDescription mt-2 mb-1>Для кого</CardDescription>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button w-full flex items-center justify-between variant="outline">
                      1 гость
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.692 7.94254L10.442 14.1925C10.384 14.2506 10.3151 14.2967 10.2392 14.3282C10.1633 14.3597 10.082 14.3758 9.99986 14.3758C9.91772 14.3758 9.8364 14.3597 9.76052 14.3282C9.68465 14.2967 9.61572 14.2506 9.55767 14.1925L3.30767 7.94254C3.1904 7.82526 3.12451 7.6662 3.12451 7.50035C3.12451 7.3345 3.1904 7.17544 3.30767 7.05816C3.42495 6.94088 3.58401 6.875 3.74986 6.875C3.91571 6.875 4.07477 6.94088 4.19205 7.05816L9.99986 12.8668L15.8077 7.05816C15.8657 7.00009 15.9347 6.95403 16.0105 6.9226C16.0864 6.89117 16.1677 6.875 16.2499 6.875C16.332 6.875 16.4133 6.89117 16.4892 6.9226C16.565 6.95403 16.634 7.00009 16.692 7.05816C16.7501 7.11623 16.7962 7.18517 16.8276 7.26104C16.859 7.33691 16.8752 7.41823 16.8752 7.50035C16.8752 7.58247 16.859 7.66379 16.8276 7.73966C16.7962 7.81553 16.7501 7.88447 16.692 7.94254Z" fill="#343330" />
                      </svg>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[400px]">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Гости</h4>
                        <p className="text-sm text-muted-foreground">
                          Если вы везёте с собой больше 2 питомцев,
                          обязательно обсудите это с хозяином.
                        </p>
                      </div>
                      <div flex items-center justify-between>
                        <p flex justify-center flex-col>
                          <span text-base not-italic font-bold leading-6>Взрослые</span>
                          <span text="14px" not-italic font-normal leading-6>От 13 лет</span>
                        </p>
                        <div flex items-center gap="12px">
                          <Button w="40px" h="40px" className="rounded-full" variant="outline" onClick={() => updateCounts('age', -1)}>-</Button>
                          <span text-center text-xl not-italic font-medium leading-6>{counts?.age || 0}</span>
                          <Button w="40px" h="40px" className="rounded-full" variant="outline" onClick={() => updateCounts('age', 1)}>+</Button>
                        </div>
                      </div>
                      <div flex items-center justify-between>
                        <p flex justify-center flex-col>
                          <span text-base not-italic font-bold leading-6>Дети</span>
                          <span text="14px" not-italic font-normal leading-6>2-12 лет</span>
                        </p>
                        <div flex items-center gap="12px">
                          <Button w="40px" h="40px" className="rounded-full" variant="outline" onClick={() => updateCounts('child', -1)}>-</Button>
                          <span text-center text-xl not-italic font-medium leading-6>{counts?.child || 0}</span>
                          <Button w="40px" h="40px" className="rounded-full" variant="outline" onClick={() => updateCounts('child', 1)}>+</Button>
                        </div>
                      </div>
                      <div flex items-center justify-between>
                        <p flex justify-center flex-col>
                          <span text-base not-italic font-bold leading-6>Младенцы</span>
                          <span text="14px" not-italic font-normal leading-6>Младше 2 </span>
                        </p>
                        <div flex items-center gap="12px">
                          <Button w="40px" h="40px" className="rounded-full" variant="outline" onClick={() => updateCounts('babies', -1)}>-</Button>
                          <span text-center text-xl not-italic font-medium leading-6>{counts?.babies || 0}</span>
                          <Button w="40px" h="40px" className="rounded-full" variant="outline" onClick={() => updateCounts('babies', 1)}>+</Button>
                        </div>
                      </div>
                      <div flex items-center justify-between>
                        <p flex justify-center flex-col>
                          <span text-base not-italic font-bold leading-6>Домашние животные</span>
                          <span text="14px" not-italic font-normal leading-6>Младше 2</span>
                        </p>
                        <div flex items-center gap="12px">
                          <Button w="40px" h="40px" className="rounded-full" variant="outline" onClick={() => updateCounts('pets', -1)}>-</Button>
                          <span text-center text-xl not-italic font-medium leading-6>{counts?.pets || 0}</span>
                          <Button w="40px" h="40px" className="rounded-full" variant="outline" onClick={() => updateCounts('pets', 1)}>+</Button>
                        </div>
                      </div>
                    </div>
                    <div w="100%" h="1px" bg="#EDEDED" my=""></div>
                    <div flex items-center justify-between>
                      <Button onClick={() => setGuestModal((prev) => prev = false)} variant="ghost" underline>Отменить</Button>
                      <Button>Сохранить</Button>
                    </div>
                  </PopoverContent>
                </Popover>
                <Button onClick={startBron} w-full mt="24px">Reserve</Button>
                <ul>
                  <li flex items-center justify-between mt="32px">
                    <span underline> {formatNumber(resort?.daily_price)} сум x{-bronDay} </span>
                    <span>{formatNumber(totalAmount)} сум</span>
                  </li>
                  <li flex items-center justify-between mt="16px">
                    <span underline>1Плата за уборку</span>
                    <span>100 000cум</span>
                  </li>
                  <li flex items-center justify-between mt="16px">
                    <span underline>Сервисный сбор thebron</span>
                    <span>20 000сум</span>
                  </li>
                </ul>
                <div w="100%" h="1px" bg="#EDEDED" mb="24px" mt="32px"></div>
                <p text-2xl not-italic font-semibold leading-5 flex items-center justify-between>Всего(без учета) <span text-right text-2xl not-italic font-bold leading-5>{formatNumber(totalAmount + 120000)}сум</span></p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div>
        {/* <YMaps query={{ apikey: 'YOUR_API_KEY' }}>
          <Map defaultState={{ center: [55.76, 37.64], zoom: 10 }} style={{ width: '100%', height: '400px' }} />
        </YMaps> */}
      </div>
      <div grid grid-cols-2 gap="28px">
        {reviews?.map(review => (
          <ReviewCard item={review} />
        ))}
      </div>
      <Button variant="outline">Показать все отзывы(23)</Button>

    </div>
  )
}

export default DetailsPage
// [41.31208994430632, 69.2825451321499]
