import { Input } from "@/components/ui/input";
import React from "react";
import { useTranslation } from "react-i18next";
import Alert from "./Alert-dialog";

export const LoginTab = () => {
  const [sectionOfChangePassword, setSectionOfChangePassword] =
    React.useState(false);
  React.useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = React.useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] =
    React.useState(false);

  const oldPassword = React.useRef(null);
  const confirmPasswordInput = React.useRef(null);
  const newPasswordInput = React.useRef(null);

  const { t } = useTranslation();

  const openChangePasswordSection = () => {
    setSectionOfChangePassword(true);
  };

  const togglePasswordVisibility = (inputRef, setVisible) => {
    setVisible((prevVisible) => {
      if (inputRef.current) {
        inputRef.current.type = prevVisible ? "password" : "text";
      }
      return !prevVisible;
    });
  };

  React.useEffect(() => {
    if (sectionOfChangePassword) {
      oldPassword.current.focus();
    }
  }, [sectionOfChangePassword]);

  return (
    <div>
      <p className="text-[24px] sm:text-[28px] font-bold mb-2 mt-5">
        {t("Вход")}
      </p>
      <div className="mt-6 border-b pb-5">
        <div className="flex-between items-start">
          <div>
            <p className="text-[16px] sm:text-[18px] font-medium">
              {t("password")}
            </p>
            {!sectionOfChangePassword && (
              <div className="flex gap-1 mt-2 text-[#454545]">
                <p className="text-[14px] sm:text-base">
                  {t("last-modified-date")}:
                </p>
                <span>8 дней назад</span>
              </div>
            )}
          </div>
          <button
            className="text-[#03559E] font-bold"
            onClick={openChangePasswordSection}
          >
            {t("update")}
          </button>
        </div>
        {sectionOfChangePassword && (
          <div>
            <p className="mb-2 mt-5">Текущий пароль</p>
            <Input ref={oldPassword} type="password" />
            <p className="text-[#03559E] cursor-pointer hover:opacity-75 text-[14px] mt-2">
              Нужен новый пароль?
            </p>
            <p className="mb-2 mt-5">Новый пароль</p>
            <div className="relative">
              <Input
                type={newPasswordVisible ? "text" : "password"}
                ref={newPasswordInput}
              />
              <svg
                className="see-password absolute top-2.5 right-3 cursor-pointer"
                onClick={() =>
                  togglePasswordVisibility(
                    newPasswordInput,
                    setNewPasswordVisible,
                  )
                }
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d={
                    newPasswordVisible
                      ? "M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7"
                      : "M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
                  }
                />
              </svg>
            </div>
            <p className="mb-2 mt-5">Подтвердить пароль</p>
            <div className="relative">
              <Input
                type={confirmPasswordVisible ? "text" : "password"}
                ref={confirmPasswordInput}
              />
              <svg
                className="see-password absolute top-2.5 right-3 cursor-pointer"
                onClick={() =>
                  togglePasswordVisibility(
                    confirmPasswordInput,
                    setConfirmPasswordVisible,
                  )
                }
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d={
                    confirmPasswordVisible
                      ? "M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7"
                      : "M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
                  }
                />
              </svg>
            </div>
          </div>
        )}
      </div>
      <p className="text-[24px] sm:text-[28px] font-bold mb-2 mt-5">
        {t("social-media-accounts")}
      </p>
      <div className="flex-between items-start mt-7 border-b pb-5">
        <div>
          <p className="text-[16px] sm:text-[18px] font-medium">
            {t("google")}
          </p>
          <p className="text-[14px] sm:text-base mt-2">{t("not-connected")}</p>
        </div>
        <button className="text-[#03559E] font-bold">{t("connect")}</button>
      </div>
      <div className="flex-between items-start mt-7 border-b pb-5">
        <div>
          <p className="text-[16px] sm:text-[18px] font-medium">
            {t("facebook")}
          </p>
          <p className="text-[14px] sm:text-base mt-2">{t("connected")}</p>
        </div>
        <button className="text-[#03559E] font-bold">{t("disconnect")}</button>
      </div>
      <p className="text-[24px] sm:text-[28px] font-bold mt-5">
        {t("latest-devices")}
      </p>
      <div className="flex-between items-start mt-7 border-b pb-5">
        <div className="flex gap-2 items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9.27 20v-.77l1.884-1.884H4.616q-.691 0-1.153-.462T3 15.73V5.616q0-.691.463-1.153T4.615 4h14.77q.69 0 1.152.463T21 5.616V15.73q0 .69-.463 1.153t-1.153.462h-6.538l1.885 1.885V20zM4 14.846h16v-9.23q0-.231-.192-.424T19.385 5H4.615q-.23 0-.423.192T4 5.616zm0 0V5z"
            />
          </svg>
          <div className="mt-1">
            <span>{t("Session")}</span>
            <p className="text-center mb-2 text-[10px] sm:text-[12px] px-2 py-1 mt-2 font-bold rounded-sm bg-[#EDEDED]">
              {t("current-session")}
            </p>
            <time className="text-[14px] sm:text-base">
              2 марта 2024 г. в 20:40
            </time>
          </div>
        </div>
        <button className="text-[#03559E] font-bold">{t("disconnect")}</button>
      </div>
    </div>
  );
};
