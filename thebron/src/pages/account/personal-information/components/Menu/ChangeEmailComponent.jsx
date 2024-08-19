import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";

export const ChangeEmailComponent = () => {
  const { t } = useTranslation();
  return (
    <>
      <p className="mb-4 font-medium">{t("Электронный адрес")}</p>
      <Input defaultValue="workmulatov@gmail.com" />
      <div className="flex justify-end mt-4">
        <Button>{t("Сохранить")}</Button>
      </div>
    </>
  );
};
