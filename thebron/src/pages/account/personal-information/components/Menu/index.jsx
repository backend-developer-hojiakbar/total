import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import PhoneNumberInput from "@/components/shared/phone-number-input-mask";
import { AddPhoneNumberComponent } from "./AddPhoneNumberComponent";
import { ChangeEmergencyContactComponent } from "./ChangeEmergencyContactComponent";
import { ChangeAddressComponent } from "./ChangeAddressComponent";
import { AddGovernmentIDComponent } from "./AddGovernmentIDComponent";
import { ChangeEmailComponent } from "./ChangeEmailComponent";
import { ChangeNameComponent } from "./ChangeNameComponent";

export const PersonalInfoSetting = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [contentIndex, setContentIndex] = React.useState(1);

  const handleModal = (id) => {
    setIsOpen(!isOpen);
    setContentIndex(id);
  };

  const content = () => {
    switch (contentIndex) {
      case 1:
        return <ChangeNameComponent />;
      case 2:
        return <ChangeEmailComponent />;
      case 3:
        return <AddPhoneNumberComponent />;
      case 4:
        return <AddGovernmentIDComponent />;
      case 5:
        return <ChangeAddressComponent />;
      case 6:
        return <ChangeEmergencyContactComponent />;
    }
  };
  return (
    <>
      <div className="flex-between pb-6 border-b mt-10">
        <div>
          <p className="mb-2 font-medium">{t("Имя-по-документам")}</p>
          <p className="text-[#7A7A7A]">Faxriddin Mutalov</p>
        </div>
        <Button onClick={() => handleModal(1)} variant="ghost">
          <p className="alo">{t("Редактировать")}</p>
        </Button>
      </div>
      <div className="flex-between pb-6 border-b mt-6">
        <div>
          <p className="mb-2 font-medium">{t("Электронный адрес")}</p>
          <p className="text-[#7A7A7A]">workmulatov@gmail.com</p>
        </div>
        <Button onClick={() => handleModal(2)} variant="ghost">
          {t("Редактировать")}
        </Button>
      </div>
      <div className="flex-between pb-6 border-b mt-6 gap-8">
        <div>
          <p className="mb-2 font-medium">{t("Номера телефонов")}</p>
          <p className="text-[#7A7A7A]">{t("Phone number for contact")}</p>
        </div>
        <Button onClick={() => handleModal(3)} variant="ghost">
          {t("Добавить")}
        </Button>
      </div>
      <div className="flex-between pb-6 border-b mt-6">
        <div>
          <p className="mb-2 font-medium">{t("Government ID")}</p>
          <p className="text-[#7A7A7A]">{t("Нет данных")}</p>
        </div>
        <Button onClick={() => handleModal(4)} variant="ghost">
          {t("Добавить")}
        </Button>
      </div>
      <div className="flex-between pb-6 border-b mt-6">
        <div>
          <p className="mb-2 font-medium">{t("Адрес")}</p>
          <p className="text-[#7A7A7A]">{t("Нет данных")}</p>
        </div>
        <Button onClick={() => handleModal(5)} variant="ghost">
          {t("Редактировать")}
        </Button>
      </div>
      <div className="flex-between pb-6 border-b mt-6">
        <div>
          <p className="mb-2 font-medium">
            {t("Контактное лицо в чрезвычайные ситуации")}
          </p>
          <p className="text-[#7A7A7A]">{t("Нет данных")}</p>
        </div>
        <Button onClick={() => handleModal(6)} variant="ghost">
          {t("Редактировать")}
        </Button>
      </div>
      <Dialog className="!p-0" open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>{content()}</DialogContent>
      </Dialog>
    </>
  );
};

export default PersonalInfoSetting;
