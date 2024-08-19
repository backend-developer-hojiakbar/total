import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";

export const AddPhoneNumberComponent = () => {
  const { t } = useTranslation();
  return (
    <>
      <p className="mb-4 font-medium">{t("Номера телефонов")}</p>
      <Input placeholder={t("phone-number")} />
      <div className="flex justify-end mt-4">
        <Button>{t("Добавить")}</Button>
      </div>
    </>
  );
};
