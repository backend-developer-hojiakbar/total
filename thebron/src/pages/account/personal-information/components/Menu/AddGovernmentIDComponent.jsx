import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";

export const AddGovernmentIDComponent = () => {
  const { t } = useTranslation();
  return (
    <>
      <p className="mb-4 font-medium">{t("Government ID")}</p>
      <Input placeholder={t("add-government-id")} />
      <div className="flex justify-end mt-4">
        <Button>{t("Добавить")}</Button>
      </div>
    </>
  );
};
