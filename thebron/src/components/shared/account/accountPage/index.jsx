import React from 'react'
import { PaymentIcon } from '@/assets/icons'
import { VectorIcon2 } from '@/assets/icons'
import { GroupIcon } from '@/assets/icons'
const index = () => {
  return (
    <div>
      <div>
        <h6 className='text-[28px] leading-[36px] font-[700]'>Аккаунт</h6>
        <div className=' flex items-center gap-[21px] mt-[8px] 2xl:mt-[12px] '>
          <p className='text-[20px] leading-[28px] font-[700]'> <span className='text-[20px] font-[400] leading-[28px]'>Faxriddin Mulatov,</span> workmulatov@gmail.com </p>
          <p className='text-[20px] font-[700] underline leading-[28px]'>Перейти в профиль</p>
        </div>
      </div>
      <div className='flex flex-wrap items-center gap-[16px] xl:gap-[30px] mt-[44px]'>
        <div className='px-[16px] py-[20px]'>
          <img src="" alt="" />

          <div>
            <h6>Личная информация</h6>
            <p>Faxriddin Mulatov, workmulatov@gmail.com </p>
          </div>
        </div>
        <div className='px-[16px] py-[20px]'>
          <img src="" alt="" />

          <div>
            <h6>Вход и безопасность</h6>
            <p>Обновите пароль и обеспечьте безопасноть аккаунта</p>
          </div>
        </div>
        <div className='px-[16px] py-[20px]'>
          <PaymentIcon/>

          <div>
            <h6>Платежи и выплаты</h6>
            <p>Проверте платежи, выплаты, купоны и подарочные карты </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index