import Breadcrumb from "@/components/shared/breadcrumb";
import React from "react";
import { useTranslation } from "react-i18next";
import PersonalInfoSetting from "./components/Menu";
import AccountLayout from "../layout";

export const PersonalInformation = () => {
  const url = new URL(window.location.href);
  const { t } = useTranslation();

  return (
    <AccountLayout>
      <Breadcrumb paths={url.pathname.split("/")} />
      <p className="text-[28px] font-bold mb-2 mt-5">
        {t("personal-information")}
      </p>
      <PersonalInfoSetting />
    </AccountLayout>
  );
};

export default PersonalInformation;
