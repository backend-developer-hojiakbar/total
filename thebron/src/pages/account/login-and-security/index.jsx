import AccountLayout from "../layout";
import React from "react";
import { Tabs } from "./components/Tabs";
import { TabContext } from "./context";
import { LoginTab } from "./components/LoginTab";
import { LoginRequestsTab } from "./components/LoginRequestsTab";
import { SharingTab } from "./components/SharingTab";
import { useTranslation } from "react-i18next";

export const LoginAndSecurity = () => {
  const { tab } = React.useContext(TabContext);
  const { t } = useTranslation();

  const tabContent = () => {
    switch (tab) {
      case 1:
        return <LoginTab />;
      case 2:
        return <LoginRequestsTab />;
      case 3:
        return <SharingTab />;
    }
  };
  return (
    <AccountLayout>
      <Tabs />
      <div>{tabContent()}</div>
    </AccountLayout>
  );
};

export default LoginAndSecurity;
