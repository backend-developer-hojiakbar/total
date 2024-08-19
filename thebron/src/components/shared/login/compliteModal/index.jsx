import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { DialogContent } from '@/components/ui/dialog';
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup } from "@/components/ui/radio-group";
import { XIcon } from '@/assets/icons';
import { z } from 'zod';

const emailSchema = z.string().email({ message: 'Введите e-mail, которым вы пользуютесь' });
const nameSchema = z.string().nonempty({ message: 'Имя не должно быть пустым' });
const surnameSchema = z.string().nonempty({ message: 'Фамилия не должна быть пустой' });

const Index = ({ setOpenIsModal }) => {
    const [chooseModal, setChooseModal] = useState(1);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [surname, setSurname] = useState('');
    const [surnameError, setSurnameError] = useState('');



    const changeCloseModal = () => {
        setOpenIsModal(false);
        setChooseModal(1);
    };

    const handleEmailChange = (e) => {
        const inputValue = e.target.value;
        setEmail(inputValue);
        try {
            emailSchema.parse(e.target.value);
            setEmailError('');
        } catch (error) {
            setEmailError(error.errors[0].message);
        }
    };


    const handleCheckboxChange = () => {
        setIsCheckboxChecked(prevState => !prevState);
    };


    const handleContinue = () => {
        try {
            nameSchema.parse(name);
            surnameSchema.parse(surname);
            emailSchema.parse(email);

            setChooseModal(2);
        } catch (error) {
            if (!name) {
                setNameError('Проверьте правильность имени');
            } else if (!surname) {
                setSurnameError('Проверьте правильность фамилии');
            } else {
                setEmailError(error.errors[0].message);
            }
        }
    };


    const [isDateSelected, setIsDateSelected] = useState(false);
    const handleBirthDateChange = (e) => {
        const inputValue = e.target.value;
        const isValidDate = !!Date.parse(inputValue);
        if (isValidDate) {
            setIsDateSelected(true);
        } else {
            setIsDateSelected(false);
        }
    };

    const handleNameChange = (e) => {
        const inputValue = e.target.value;
        setName(inputValue);
        try {
            nameSchema.parse(inputValue);
            setNameError('');
        } catch (error) {
            setNameError(error.errors[0].message);
        }
    };

    const handleSurnameChange = (e) => {
        const inputValue = e.target.value;
        setSurname(inputValue);
        try {
            surnameSchema.parse(inputValue);
            setSurnameError('');
        } catch (error) {
            setSurnameError(error.errors[0].message);
        }
    };






    return (
        <div>
            {chooseModal === 1 && (
                <DialogContent XIcon={false} className="w-[373px]  sm:w-[420px] 2xl:w-[530px] sm:py-[24px] sm:px-[20px]   ">
                    <div>
                        <h6 className='text-black text-lg not-italic font-bold leading-6'>Завершить регистрацию</h6>
                        <div className="sm:mt-[30px] mt-[16px] ">
                            {nameError && <p className=' absolute top-[50px] text-red-500 sm:text-sm sm:font-normal sm:leading-5 mt-[4px]'>{nameError}</p>}
                            <Input type="text" placeholder="Имя" className="py-[25px] px-[16px]" value={name} onChange={handleNameChange} />
                            <Input type="text" placeholder="Фамилия" className="py-[25px] px-[16px] mt-[4px]" value={surname} onChange={handleSurnameChange} />
                            {surnameError && <p className=' absolute text-red-500 sm:text-sm sm:font-normal sm:leading-5 mt-[4px]'>{surnameError}</p>}
                            <p className='sm:block hidden text-gray-800 sm:text-sm sm:not-italic sm:font-normal sm:leading-5 my-[30px]'>Имя должно совпадать с данными в удостоверении личности.</p>
                            {/* {
                                surnameError ? <p className='  text-red-500 sm:text-sm sm:font-normal sm:leading-5 mt-[20px]'>{surnameError}</p> : <p className='sm:block hidden text-gray-800 sm:text-sm sm:not-italic sm:font-normal sm:leading-5 mt-[20px]'>Имя должно совпадать с данными в удостоверении личности.</p>
                            } */}
                        </div>
                        <div className='mt-[20px]'>
                            <input type="date" placeholder='Дата рождения' className='p-[12px] border text-[16px] w-full rounded-[6px]' onChange={handleBirthDateChange} />
                            {/* {
                                isDateSelected ?  <p className='sm:block hidden text-gray-800 text-sm not-italic font-normal leading-5'>Минимальный возраст для регистрации: 18 лет. Другие пользователи не могут увидеть дату вашего рождения</p> : <p>Дата рожденияни танланг</p>
                            } */}
                            <p className='sm:block hidden text-gray-800 text-sm not-italic font-normal leading-5'>Минимальный возраст для регистрации: 18 лет. Другие пользователи не могут увидеть дату вашего рождения</p>
                        </div>
                        <div className='mt-[20px]'>
                            <Input type="email" placeholder="Электронный адрес" className="py-[25px]" value={email} onChange={handleEmailChange} />
                            {emailError && <p className='text-red-500 sm:text-sm sm:font-normal sm:leading-5 mt-[4px]'>{emailError}</p>}
                            <p className='sm:block hidden sm:text-gray-800 sm:text-[14px] sm:font-normal sm:leading-5 mt-[4px]'>Мы отправим подтверждение и квитанцию вам на почту</p>
                        </div>
                        <p className='sm:block hidden text-[#222] text-xs leading-[18px] mt-[20px]'>
                            Нажимая <span className='text-xs not-italic font-extrabold leading-4'>Согласиться и продолжить,</span> я принимаю следующие документы theBron: <br />
                            <span className='text-blue-700 text-[12px] not-italic font-semibold leading-4 underline'>Условия предоставления услуг, Условия обработки платежей, и Политика конфиденциальности.</span>
                        </p>
                        <button onClick={handleContinue} disabled={!isCheckboxChecked} className="mt-[20px] text-white bg-[#03559E] w-full rounded-md py-[12px]">
                            Согласиться и продолжить
                        </button>
                        {/* <button onClick={handleContinue} disabled={!isCheckboxChecked || !isDateSelected} className="mt-[20px] text-white bg-[#03559E] w-full rounded-md py-[12px]">
                            {isDateSelected ? "Согласиться и продолжить" : "Дата рожденияни танланг"}
                        </button> */}
                        <div className='w-full h-[1px] bg-[#E0E0E0] my-[20px]'></div>
                        <p className='text-black text-sm leading-[22px]'>
                            theBron будет отправлять вам эксклюзивные предложения, идеи, рекламные письма и push-оповещения.
                            Вы можете отказаться от них в настройках аккаунта или в маркетинговом уведомлении
                        </p>
                        <div className='mt-[20px]'>
                            <RadioGroup className="gap-0 border-none">
                                <Label htmlFor="terms" className="radio-checkbox flex cursor-pointer items-center  space-x-2">
                                    <Checkbox id="terms" checked={isCheckboxChecked} onClick={handleCheckboxChange} />
                                    <p className='text-black text-base not-italic font-normal leading-3'>Я не хочу получать рекламные сообщения от <span className='text-blue-700 text-base not-italic font-normal leading-6'> theBron</span></p>
                                </Label>
                            </RadioGroup>
                        </div>
                    </div>
                </DialogContent>
            )}
            {chooseModal === 2 && (
                <DialogContent XIcon={false} className="w-[373px] sm:w-[420px] 2xl:w-[530px] p-0">
                    <div>
                        <div className='flex items-center w-full py-[17px] px-[15px]'>
                            <span onClick={changeCloseModal} className="cursor-pointer"><XIcon /></span>
                            <h6 className='font-[700] text-[18px] leading-[24px] w-full text-center'>Зарегистрироваться</h6>
                        </div>
                        <div className='w-full h-[1px] bg-[#E0E0E0]'></div>
                        <h6 className='font-[600] text-[28px] leading-[36px] px-[15px] mt-[45px] text-center'>Добро пожаловать в <span className='text-[#03559E]'>theBron</span></h6>
                        <div className='px-[36px] text-[18px] fonr-[500] leading-[24px]'>
                            <p className='mt-[12px] text-center'>Найдите уникальные предложения для вас!</p>
                            <button className='w-full py-[12px] font-[500] bg-[#03559E] mt-[20px] mb-[45px] text-[#fff] rounded-[10px]'>Продолжить</button>
                        </div>
                    </div>

                </DialogContent>
            )}


            <div className='mt-[15px]'>
                <Input type="email" placeholder="Email" className="py-[25px]" />
                <p className='sm:text-gray-800 sm:text-sm sm:not-italic sm:font-normal sm:leading-5'>Мы отправим потверждение и квитанцию вам на почту</p>
            </div>
            <p className='text-[#222] text-xs not-italic font-normal leading-4 mt-[20px]'>
                Нажимая  <span className='text-xs not-italic font-extrabold leading-4'>Согласиться и продолжить,</span> я принимаю следующие документы theBron:
                <span className='text-blue-700 text-xs not-italic font-semibold leading-4 underline'>Условия предоставления услуг, Условия обработки платежей, и Политика конфиденциальности.</span>
            </p>
            <button className="mt-[15px] text-white bg-blue-600 w-full rounded-md py-[12px]">
                Согласиться и продолжить
            </button>
            <div className='w-full h-[1px] bg-[#E0E0E0] my-[15px]'></div>
            <p className='text-black text-sm not-italic font-normal leading-5'>
                theBron будет отправлять вам эксклюзивные предложения, идеи, рекламные письма и push-оповещения.
                Вы можете отказаться от них в настройках аккаунта или в маркетинговом уведомлении
            </p>

            <div className='mt-[15px]'>
                <RadioGroup className="gap-0 border-none">
                    <Label htmlFor="terms" className="radio-checkbox flex cursor-pointer items-center justify-between space-x-2 ">
                        <Checkbox id="terms" />
                        <p className='text-black text-base not-italic font-normal leading-3'>Я не хочу получать рекламные сообщения от <span className='text-blue-700 text-base not-italic font-normal leading-6'> theBron</span></p>
                    </Label>
                </RadioGroup>
            </div>
        </div>
       

       
    );
};

export default Index;






