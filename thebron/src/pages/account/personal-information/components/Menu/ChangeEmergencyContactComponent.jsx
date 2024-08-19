import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";
export const ChangeEmergencyContactComponent = () => {
  const { t } = useTranslation();
  return (
    <>
      <p className="mb-4 font-medium">
        {t("Контактное лицо в чрезвычайной ситуации")}
      </p>
      <Input placeholder={t("add-emergency-contact")} />
      <div className="flex justify-end mt-4">
        <Button>{t("Сохранить")}</Button>
      </div>
    </>
  );
};
