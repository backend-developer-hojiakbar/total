import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useGetResortByIDQuery } from "@/features/resort";
import formatNumber from "@/lib/format";
import { useSelector } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useRef, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { addDays } from "date-fns";
import ScrollToTop from "@/components/ScrollToTop";
import ShoppingList from "./components/shopping-card";

export const Bron = () => {
  const location = useLocation();
  const [date, setDate] = useState({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  const [openModal, setOpenModal] = useState(false);
  const [chooseModal, setChooseModal] = useState(null);
  const [ageCount, setAge] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [babies, setBabies] = useState(0);
  const [pets, setPets] = useState(0);
  const [restaurantsPage, setRestaurantPage] = useState(false);
  const checkboxLabel = useRef();
  const radioItem = useRef();
  const radioItem2 = useRef();
  const paymentRadio = useRef();
  const paymentRadio2 = useRef();
  const paymentRadio3 = useRef();
  const paymentRadio4 = useRef();
  const params = useParams();
  const { data: resort } = useGetResortByIDQuery(params.id);
  const { bron } = useSelector((store) => store);
  const navigate = useNavigate();

  const shoppingProducts = [
    {
      id: 1,
      name: "Product name",
      price: 100000,
      count: 1,
    },
    {
      id: 2,
      name: "Product name 2",
      price: 200000,
      count: 1,
    },
    {
      id: 3,
      name: "Product name 3",
      price: 300000,
      count: 1,
    },
  ];

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleModal = (e) => {
    setOpenModal(true);
    setChooseModal(e);
  };

  const choosePaymentStatus = (e) => {
    const radioCheckboxes = document.querySelectorAll(".radio-checkbox");
    radioCheckboxes.forEach((checkbox) =>
      checkbox.classList.remove("border-black"),
    );
    e.target.parentElement.classList.add("border-black");
  };

  const choosePaymentProvider = (e) => {
    const paymentCheckboxes = document.querySelectorAll(
      ".payment-radio-checkbox",
    );
    paymentCheckboxes.forEach((checkbox) =>
      checkbox.classList.remove("border-primary"),
    );
    e.target.parentElement.classList.add("border-primary");
  };

  useEffect(() => {
    if (!location.pathname.includes("resorts")) {
      setRestaurantPage(true);
    } else {
      setRestaurantPage(false);
    }
  }, [location.pathname]);

  const stickyOrNot = () => {
    return location.pathname.includes("resorts") ? "sticky top-28" : "";
  };

  useEffect(() => {
    console.log();
    radioItem.current.parentElement.classList.add("border-black");
    radioItem.current.addEventListener("click", choosePaymentStatus);
    radioItem2.current.addEventListener("click", choosePaymentStatus);
    paymentRadio.current.addEventListener("click", choosePaymentProvider);
    paymentRadio2.current.addEventListener("click", choosePaymentProvider);
    paymentRadio3.current.addEventListener("click", choosePaymentProvider);
    paymentRadio4.current.addEventListener("click", choosePaymentProvider);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        {chooseModal === 1 && (
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        )}
        {chooseModal === 2 && (
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Guests</DialogTitle>
              <DialogDescription>
                This place has a maximum of 6 guests, not including infants.
                Pets aren't allowed.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div flex items-center justify-between>
                <p flex justify-center flex-col>
                  <span text-base font-bold leading-6>
                    Взрослые
                  </span>
                  <span text="14px" font-normal leading-6>
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
                  <span text-center text-xl font-medium leading-6>
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
                  <span text-base font-bold leading-6>
                    Дети
                  </span>
                  <span text="14px" font-normal leading-6>
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
                  <span text-center text-xl font-medium leading-6>
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
                  <span text-base font-bold leading-6>
                    Младенцы
                  </span>
                  <span text="14px" font-normal leading-6>
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
                  <span text-center text-xl font-medium leading-6>
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
                  <span text-base font-bold leading-6>
                    Домашние животные
                  </span>
                  <span text="14px" font-normal leading-6>
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
                  <span text-center text-xl font-medium leading-6>
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
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
      <div grid grid-cols-12 max-w="1470px" mx-auto>
        <div col-span-6>
          <div relative flex items-center>
            <div
              onClick={handleBackClick}
              cursor-pointer
              absolute
              left="-45px"
              p-3
              hover:bg-gray-1
              rounded-full
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.7073 25.2931C20.8002 25.386 20.8739 25.4963 20.9242 25.6177C20.9745 25.7391 21.0004 25.8692 21.0004 26.0006C21.0004 26.132 20.9745 26.2621 20.9242 26.3835C20.8739 26.5048 20.8002 26.6151 20.7073 26.7081C20.6144 26.801 20.5041 26.8747 20.3827 26.9249C20.2613 26.9752 20.1312 27.0011 19.9998 27.0011C19.8684 27.0011 19.7383 26.9752 19.6169 26.9249C19.4955 26.8747 19.3852 26.801 19.2923 26.7081L9.29231 16.7081C9.19933 16.6152 9.12557 16.5049 9.07525 16.3835C9.02493 16.2621 8.99902 16.132 8.99902 16.0006C8.99902 15.8691 9.02493 15.739 9.07525 15.6176C9.12557 15.4962 9.19933 15.3859 9.29231 15.2931L19.2923 5.29306C19.4799 5.10542 19.7344 5 19.9998 5C20.2652 5 20.5197 5.10542 20.7073 5.29306C20.895 5.4807 21.0004 5.73519 21.0004 6.00056C21.0004 6.26592 20.895 6.52042 20.7073 6.70806L11.4136 16.0006L20.7073 25.2931Z"
                  fill="#343330"
                />
              </svg>
            </div>
            <p text-black text="28px" font-bold leading-9>
              Потвердите и оплатите
            </p>
          </div>
          <p text-black text="24px" font-bold leading-9 mt="40px">
            Ваша поездка
          </p>
          <div flex items-center justify-between mt="24px">
            <div>
              <p text-black text-xl font-bold leading-7>
                Даты
              </p>
              <p text-black text-lg leading-6 mt-1>
                09-12 февр.
              </p>
            </div>
            <div>
              <Button onClick={() => handleModal(1)} underline variant="ghost">
                Изменить
              </Button>
            </div>
          </div>
          <div flex items-center justify-between mt="24px">
            <div>
              <p text-black text-xl font-bold leading-7>
                Гости
              </p>
              <p text-black text-lg leading-6 font-normal mt-1>
                1 гость
              </p>
            </div>
            <div>
              <Button onClick={() => handleModal(2)} underline variant="ghost">
                Изменить
              </Button>
            </div>
          </div>
          <div border-b mt="24px"></div>
          <p text-black text="24px" font-bold leading-9 mt="40px">
            Варианты оплаты
          </p>
          <RadioGroup defaultValue="1" className="gap-0 mt-[24px]">
            <Label
              ref={checkboxLabel}
              htmlFor="r1"
              className="radio-checkbox flex cursor-pointer items-center space-x-2 justify-between px-[12px] py-[14px] border rounded-t-[10px]"
            >
              <div flex flex-col>
                <Label cursor-pointer htmlFor="r1">
                  <span text-black text-xl font-bold leading-7>
                    Оплатите посностью
                  </span>
                </Label>
                <Label cursor-pointer htmlFor="r1">
                  <span text-black text-lg font-normal leading-6>
                    Уплатите полную сумму ({formatNumber(bron?.amount)})
                  </span>
                </Label>
              </div>
              <RadioGroupItem
                onClick={(e) => choosePaymentStatus(e)}
                ref={radioItem}
                className="w-[30px] h-[30px]"
                value="1"
                id="r1"
              />
            </Label>
            <Label
              ref={checkboxLabel}
              htmlFor="r2"
              className="radio-checkbox flex cursor-pointer items-center justify-between space-x-2 px-[12px] py-[14px] border rounded-b-[10px]"
            >
              <div flex flex-col gap="8px">
                <Label
                  cursor-pointer
                  htmlFor="r2"
                  text-black
                  text-xl
                  font-bold
                  leading-7
                >
                  Оплатите часть сейчас, а остаток внесите позже
                </Label>
                <Label cursor-pointer htmlFor="r2">
                  <span text-black text-lg font-400 leading-6>
                    000 000 сумм к оплате сегодня, 000 000сумм- 24 март.2024 г.
                    Без дополнительных сборов.
                    <span underline ml-3 font-bold>
                      Подробнее
                    </span>
                  </span>
                </Label>
              </div>
              <RadioGroupItem
                onClick={(e) => choosePaymentStatus(e)}
                ref={radioItem2}
                className="w-[30px] h-[30px]"
                value="2"
                id="r2"
              />
            </Label>
          </RadioGroup>
          <div border-b mt="36px"></div>
          <p text-black text="24px" font-bold leading-9 mt="48px">
            Чем оплатить
          </p>
          <RadioGroup mt="24px">
            <Label
              htmlFor="option-1"
              className="payment-radio-checkbox flex cursor-pointer items-center space-x-3 px-[12px] border rounded-[10px]"
            >
              <RadioGroupItem
                ref={paymentRadio}
                onClick={(e) => choosePaymentProvider(e)}
                className="w-[30px] h-[30px]"
                value="1"
                id="option-1"
              />
              <img
                width={113}
                height={80}
                cursor-pointer
                object-cover
                src="/src/assets/images/payme-logo.png"
                alt=""
              />
            </Label>
            <Label
              htmlFor="option-2"
              className="payment-radio-checkbox flex cursor-pointer items-center  px-[12px] border rounded-[10px]"
            >
              <RadioGroupItem
                onClick={(e) => choosePaymentProvider(e)}
                ref={paymentRadio2}
                className="w-[30px] h-[30px]"
                value="2"
                id="option-2"
              />
              <img
                width={113}
                height={80}
                cursor-pointer
                w="113px"
                object-cover
                h="80px"
                src="/src/assets/images/uzum-logo.png"
                alt=""
              />
            </Label>
            <Label
              htmlFor="option-3"
              className="payment-radio-checkbox flex cursor-pointer items-center px-[12px] border rounded-[10px]"
            >
              <RadioGroupItem
                ref={paymentRadio3}
                onClick={(e) => choosePaymentProvider(e)}
                className="w-[30px] h-[30px]"
                value="3"
                id="option-3"
              />
              <img
                object-cover
                cursor-pointer
                width={113}
                height={80}
                src="/src/assets/images/solfy-logo.png"
                alt=""
              />
            </Label>
            <Label
              htmlFor="option-4"
              className="payment-radio-checkbox space-x-3 py-[12px] flex cursor-pointer items-center px-[12px] border rounded-[10px]"
            >
              <RadioGroupItem
                ref={paymentRadio4}
                onClick={(e) => choosePaymentProvider(e)}
                className="w-[30px] h-[30px]"
                value="4"
                id="option-4"
              />
              <img
                cursor-pointer
                src="/src/assets/images/mastercard-logo.png"
                alt=""
              />
            </Label>
          </RadioGroup>
          <div border-b mt="60px"></div>
          <p text-black text="24px" font-bold leading-9 mt="48px">
            Требуется для поездки
          </p>
          <div flex justify-between items-center mt="16px" gap="95px">
            <div flex flex-col items-start>
              <p text-black text-xl font-bold leading-7>
                Номер телефона
              </p>
              <p text-black text-lg mt="8px" font-normal leading-6>
                Добавьте и подтвердите номер телефона, чтобы получать новости о
                поездке.
              </p>
            </div>
            <Button variant="outline">Добавить</Button>
          </div>
          <div flex justify-between items-center gap="95px">
            <div flex flex-col items-start>
              <p text-black text="24px" font-bold leading-9 mt="40px">
                Правила отмены
              </p>
              <p text-black text-lg mt="8px" font-normal leading-6>
                Добавьте и подтвердите номер телефона, чтобы получать новости о
                поездке.
              </p>
            </div>
          </div>
          <div border-b mt="40px"></div>
          <p text-black text="24px" font-bold leading-9 mt="40px">
            Основные правила
          </p>
          <p text-black text-lg mt="8px" font-normal leading-6>
            Мы просим гостей просим придерживаться простых принципов
          </p>
          <ul>
            <li mt="8px"> - Соблюдайте правила дома.</li>
            <li mt="8px"> - Относитесь к жилью так, будто это ваш дом.</li>
          </ul>
          <div border-b mt="40px"></div>
          <p className="text-black text-lg not-italic font-normal leading-6 mt-[40px]">
            Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.
          </p>
          <Button className="max-w-[390px] w-full" mt="40px">
            Потвердить и оплатить
          </Button>
        </div>
        <div col-span-6>
          <div className={`${stickyOrNot()} w-full `}>
            <Card className="max-w-[490px] ml-[170px]" pt="32px">
              <CardContent w-full>
                <div flex items-center gap="16px">
                  <div className="h-[120px]">
                    <img
                      rounded="20px"
                      w="120px"
                      object-cover
                      h-full
                      width={120}
                      src={
                        resort?.images[0]?.img ||
                        "https://adventuresoflilnicki.com/wp-content/uploads/2020/07/Lagman-at-Injis-Restaurant-Olay-Bazaar-Tashkent-Uzbekistan.jpg"
                      }
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 text-black text-xl font-bold leading-6>
                      {resort?.name}
                    </h2>
                    <p text-black text="13px" font-normal leading-6 mt="6px">
                      {resort?.location_name}
                    </p>
                    <div flex items-center gap="8px" mt="6px">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.3203 8.93578L14.7969 12.0108L15.8524 16.5889C15.9082 16.8282 15.8923 17.0787 15.8065 17.309C15.7208 17.5394 15.5691 17.7393 15.3703 17.8839C15.1716 18.0284 14.9346 18.1112 14.6891 18.1218C14.4436 18.1324 14.2004 18.0704 13.9899 17.9436L9.99689 15.5217L6.01252 17.9436C5.80202 18.0704 5.55881 18.1324 5.31328 18.1218C5.06775 18.1112 4.83079 18.0284 4.63204 17.8839C4.4333 17.7393 4.28157 17.5394 4.19584 17.309C4.1101 17.0787 4.09416 16.8282 4.15002 16.5889L5.20392 12.0155L1.6797 8.93578C1.49331 8.77502 1.35852 8.5628 1.29225 8.32574C1.22598 8.08868 1.23117 7.83733 1.30718 7.60321C1.38319 7.36909 1.52663 7.16262 1.71952 7.0097C1.9124 6.85678 2.14614 6.76421 2.39142 6.74359L7.03674 6.34125L8.85002 2.01625C8.94471 1.78931 9.10443 1.59546 9.30907 1.45911C9.51371 1.32276 9.75411 1.25 10 1.25C10.2459 1.25 10.4863 1.32276 10.691 1.45911C10.8956 1.59546 11.0553 1.78931 11.15 2.01625L12.9688 6.34125L17.6125 6.74359C17.8578 6.76421 18.0915 6.85678 18.2844 7.0097C18.4773 7.16262 18.6207 7.36909 18.6968 7.60321C18.7728 7.83733 18.778 8.08868 18.7117 8.32574C18.6454 8.5628 18.5106 8.77502 18.3242 8.93578H18.3203Z"
                          fill="#011120"
                        />
                      </svg>
                      <span>5,00(9)</span>
                    </div>
                  </div>
                </div>
                <div border-b mt="24px"></div>
                <p
                  className="text-[24px] mt-[24px] text-[#222]"
                  font-bold
                  leading-9
                >
                  Детализация цены
                </p>
                <ul>
                  <li
                    flex
                    items-center
                    justify-between
                    mt="14px"
                    text="#222"
                    text-lg
                    font-normal
                    leading-6
                  >
                    <span>000 000сумм х 5 ночей</span>
                    <span>000 000 сумм</span>
                  </li>
                  <li
                    flex
                    items-center
                    justify-between
                    mt="8px"
                    text="#222"
                    text-lg
                    font-normal
                    leading-6
                  >
                    <span>Сервис сбор theBron</span>
                    <span>000 000 сумм</span>
                  </li>
                  <li
                    flex
                    items-center
                    justify-between
                    mt="8px"
                    text="#222"
                    text-lg
                    font-normal
                    leading-6
                  >
                    <span>Налоги</span>
                    <span>000 000 сумм</span>
                  </li>
                </ul>
                <div border-b mt="24px"></div>
                <p flex items-center justify-between mt="24px">
                  <span className="text-[#222] text-xl font-bold leading-7">
                    Итого(сум)
                  </span>
                  <span className="text-[#222] text-xl font-bold leading-7">
                    000 000сум
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>
          {restaurantsPage && (
            <>
              <div className="border-t max-w-[490px] ml-[170px] mt-10"></div>
              <div className="max-w-[490px] ml-[170px] mt-10">
                {shoppingProducts.map((item) => (
                  <ShoppingList key={item.id} item={item} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Bron;
