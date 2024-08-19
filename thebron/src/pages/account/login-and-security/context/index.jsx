import React from "react";

export const TabContext = React.createContext();

export const TabProvider = ({ children }) => {
  const [tab, setTab] = React.useState(1);
  const changeTab = (id) => {
    setTab(id);
  };
  return (
    <TabContext.Provider value={{ tab, changeTab }}>
      {children}
    </TabContext.Provider>
  );
};

export default TabProvider;
