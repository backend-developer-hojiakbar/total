import { DialogContent } from "@/components/ui/dialog";
import { AppleIcon } from "@/assets/icons";
import { GoogleIcon } from "@/assets/icons";
import { FacebookIcon } from "@/assets/icons";
import { Dialog } from "@/components/ui/dialog";
import InputMask from 'react-input-mask';
import React, { useState } from "react";
import LoginAuthModal from "@/components/shared/login/modal/index";
import { z } from 'zod';

const phoneSchema = z.string().regex(/^\+998 \d{2} \d{3} \d{2} \d{2}$/, {
  message: "Telefon raqami noto'g'ri formatda",
});

const AuthModal = ({ setIsOpen }) => {
  const [phone, setPhone] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState('');

  const handleOpenModall = (e) => {
    e.preventDefault();
    const validationResult = phoneSchema.safeParse(phone);
    if (!validationResult.success) {
      setError(validationResult.error.errors[0].message);
      return;
    }
    setError('');
    setOpenModal(true);
    setIsOpen(false);
  }

  return (
    <div>
      <DialogContent
        flex
        items-center
        justify-center
        flex-col
        rounded="20px"
        w="373px"
        className="w-[373px] sm:w-[349px]  xl:w-[530px]"
        XIcon={false}>
        <div text="center">
          <h6
            font="600"
            text="26px"
            leading="30px"
            className=" sm:text-[20px] xl:text-3xl xl:not-italic xl:font-semibold xl:leading-9"
          >
            Добро пожаловать в <span text="#03559E">theBron</span>
          </h6>
          <p
            text="16px"
            font="500"
            leading="24px"
            mt="8px"
            className="sm-[18px] xl:text-[18px] xl:font-[500] leading-[24px]"
          >
            Войдите или зарегистрируйтесь
          </p>
        </div>

        <form>
          <div>
            <div>
              <InputMask
                mask="+\9\98 99 999 99 99"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                font="400"
                text="14px"
                leading="20px"
                p="12px"
                rounded="10px"
                w-full
                border
                outline-none
                sm-w="317px"
                className="xl:w-[482px] xl:mt-[20px]">
                {(inputProps) => <input {...inputProps} type="text" placeholder="Номер телефона" />}
              </InputMask>
            </div>
            {error && <p style={{ color: 'red' }} className="mt-[4px] absolute">{error}</p>}

            <p
              text="#454545"
              font="400"
              leading="20px"
              mt="20px"
              className=" text-[14px] sm:text-center  sm:text-[14px] xl:text-sm  xl:font-normal xl:leading-5 xl:text-start mt-[37px]">
              Мы позвоним вам или отправим SMS, чтобы подтвердить номер телефона. Применяются стандартные условия вашего
              тарифа на прием сообщений и передачу данных. <span text-sm not-italic font-normal leading-5 underline> Политика конфиденциальности</span>
            </p>

            <button
              onClick={handleOpenModall}
              my="20px"
              text="#fff"
              text-sm
              bg="#03559E"
              w-full
              rounded="10px"
              py="10px"
              className="sm:w-[317px] xl:w-full xl:py-[12px] xl:my-[20px]"
              sm:mx-auto>
              Продолжить
            </button>

            <div flex items-center gap="16px" max-w-full>
              <div w="100%" h="0.5px" bg="#E0E0E0"></div>
              <h6 text="#666666" text-xs font="400" leading="24px">или</h6>
              <div w="100%" h="0.5px" bg="#E0E0E0"></div>
            </div>

            <div
              flex
              flex-col
              gap="16px"
              mt="20px"
              w-full
              className="sm:w-[317px] sm:mx-auto xl:w-[482px] xl:gap-[12px]">
              <div cursor-pointer flex items-center gap="4px" rounded="8px" w="100%" border p="10px">
                <GoogleIcon />
                <h6 text-xs font="700" leading="20px" w-full text="center">С помощью Google</h6>
              </div>
              <div cursor-pointer flex items-center gap="4px" rounded="8px" w="100%" border p="10px">
                <FacebookIcon />
                <h6 text-xs font="700" leading="20px" w-full text="center">С помощью Facebook</h6>
              </div>
              <div cursor-pointer flex items-center gap="4px" rounded="8px" w="100%" border p="10px">
                <AppleIcon />
                <h6 text-xs font="700" leading="20px" w-full text="center">Продолжить с Apple</h6>
              </div>
            </div>
          </div>
        </form>
      </DialogContent>

      <Dialog open={openModal} onOpenChange={setOpenModal}>
          <LoginAuthModal setOpenModal={setOpenModal} setIsOpen={setIsOpen}/>
      </Dialog>
    </div>
  );
};

export default AuthModal;
