import { ArrowLeftIcon, XIcon, MessageIcon, PhoneIcon, TelegramLogoIcon } from "@/assets/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRef, useState } from "react";
import CompliteModal from "@/components/shared/login/compliteModal/index"

const AuthModal = ({ setOpenModal, setIsOpen }) => {
  const [chooseModal, setChooseModal] = useState(1);
  const [openIsModal, setOpenIsModal] = useState(false);
  const handleModalChange = (value) => {
    setChooseModal(value);
  };
  const changeModal = () => {
    setOpenModal(false)
    setChooseModal(1)
  }
  const changeBackModal = () => {
    setChooseModal(1);
  }
  const changeIsModal = () => {
    setIsOpen(true);
    setOpenModal(false)

  }
  const changeCompliteModal = () => {
    setOpenIsModal(true);
    setOpenModal(false)
  }

  const [confirmationCode, setConfirmationCode] = useState(["", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, e) => {
    const newConfirmationCode = [...confirmationCode];
    newConfirmationCode[index] = e.target.value;
    setConfirmationCode(newConfirmationCode);

    if (e.target.value.length === 1 && index < 4) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && confirmationCode[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div>
      {chooseModal === 1 && (
        <DialogContent XIcon={false} className="w-[373px]  sm:w-[420px] 2xl:w-[530px] sm:py-[44px] px-[16px]">
          <div>
            <div className="flex items-center justify-between">
              <span onClick={changeIsModal} className="cursor-pointer"><ArrowLeftIcon /></span>
              <span onClick={changeModal} className="cursor-pointer"><XIcon /></span>
            </div>
            <div className="sm:mt-[20px]">
              <h6 className="text-black sm:text-2xl text-[20px] font-bold leading-9">Введите код</h6>
              <p className="text-black sm:text-[18px] font-medium leading-[24px] mt-[10px] text-[16px]">
                Для подтверждения телефона отправили 4 значный код на{" "}
                <span className="font-bold">+998(90) 115 92 34</span>
              </p>
            </div>

            <div className="flex items-center justify-center gap-[16px] my-[24px]">
              {confirmationCode.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(index, e)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="sm:w-[60px] sm:h-[60px] w-[56px] h-[56px] text-[20px] text-center bg-gray-200 rounded-md border-none"
                />
              ))}
            </div>

            <p className="text-gray-600 text-center text-base">Если код не придет, то можно получить новый через 51 сек</p>
            <button
              onClick={changeCompliteModal}
              className="mt-4 text-white bg-[#03559E] w-full rounded-md py-[12px]">
              Продолжить
            </button>

            <p
              onClick={() => handleModalChange(2)}
              className="mt-6 text-black text-center text-lg font-bold underline cursor-pointer">
              Другие варианты
            </p>
          </div>
        </DialogContent>
      )}
      {chooseModal === 2 && (
        <DialogContent XIcon={false} className="w-[373px] sm:w-[420px] 2xl:w-[530px] sm:px-[20px] sm:py-[24px]">
          <div className="flex items-center justify-between">
            <span onClick={changeBackModal} className=" cursor-pointer"><ArrowLeftIcon /></span>
            <span onClick={changeModal} className="cursor-pointer"><XIcon /></span>
          </div>
          <div>
            <h6 className="text-black  text-[20px] font-semibold leading-9 sm:text-[28px]">Другие варианты</h6>
            <p className="text-black  text-[16px] font-medium leading-6 mt-[12px] sm:text-[18px]">
              Выберите другой способ получить код на{" "}
              <span className="font-bold text-[18px] leading-[24px]">+998(90) 115 92 34</span>
            </p>
          </div>

          <div className="sm:my-[24px]">
            <RadioGroup className="gap-[24px] sm:gap-0 border-none">
              <Label htmlFor="r1" className="radio-checkbox flex cursor-pointer items-center space-x-2 justify-between ">
                <div flex flex-col>
                  <div className="flex items-center gap-[17px]">
                    <MessageIcon />
                    <div>
                      <h6 className="text-black text-lg font-bold leading-6">SMS</h6>
                      <p className="text-gray-600 text-base leading-6 mt-[4px]">Мы отправим вам код</p>
                    </div>
                  </div>
                </div>
                <RadioGroupItem
                  className="w-[24px] h-[24px]"
                  value="1"
                  id="r1" />
              </Label>

              <div className="bg-[#E0E0E0] w-full h-[1px]"></div>

              <Label htmlFor="r2" className="radio-checkbox flex cursor-pointer items-center justify-between space-x-2 sm:hidden ">
                <div flex flex-col gap="8px">
                  <div className="flex items-center gap-[17px]">
                    <TelegramLogoIcon />
                    <div>
                      <h6 className="text-black text-lg font-bold leading-6">Telegram</h6>
                      <p className="text-gray-600 text-base leading-6 mt-[4px]">Мы отправим вам код во Wi-Fi</p>
                    </div>
                  </div>
                </div>
                <RadioGroupItem
                  className="w-[24px] h-[24px]"
                  value="2"
                  id="r2" />
              </Label>

              <div className="bg-[#E0E0E0] w-full h-[1px] sm:hidden"></div>

              <Label htmlFor="r2" className="radio-checkbox flex cursor-pointer items-center justify-between space-x-2  ">
                <div flex flex-col gap="8px">
                  <div className="flex items-center gap-[17px]">
                    <PhoneIcon />
                    <div>
                      <h6 className="text-black text-lg font-bold leading-6">Телефонный звонок</h6>
                      <p className="text-gray-600 text-base leading-6 mt-[4px]">Мы позвоним и сообщим код</p>
                    </div>
                  </div>
                </div>
                <RadioGroupItem
                  className="w-[24px] h-[24px]"
                  value="2"
                  id="r2" />
              </Label>
            </RadioGroup>
          </div>

          <button className="mt-4 text-white bg-[#03559E] w-full rounded-md py-[12px]">
            Отправить код ещё раз
          </button>
        </DialogContent>
      )}

      <Dialog open={openIsModal} onOpenChange={setOpenIsModal}>
        <CompliteModal setOpenIsModal={setOpenIsModal} />
      </Dialog>
    </div>
  );
};

export default AuthModal;

