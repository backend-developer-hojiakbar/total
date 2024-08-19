import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";

export const ChangeAddressComponent = () => {
  const { t } = useTranslation();
  return (
    <>
      <p className="mb-4 font-medium">{t("Адрес")}</p>
      <Input placeholder={t("add-address")} />
      <div className="flex justify-end mt-4">
        <Button>{t("Сохранить")}</Button>
      </div>
    </>
  );
};
