import { ThemeProvider } from "@/components/shared/theme-provider";
import i18n from "@/lib/i18n";
import TabProvider from "@/pages/account/login-and-security/context";
import { CinemaProvider } from "@/pages/cinema/context";
import { RestaurantProvider } from "@/pages/restaurant/context";
import Router from "@/router";
import { store } from "@/store/store";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <TabProvider>
          <I18nextProvider i18n={i18n}>
            <RestaurantProvider>
              <CinemaProvider>
                <ThemeProvider defaultTheme="light" storageKey="the-bron-theme">
                  <Router />
                </ThemeProvider>
              </CinemaProvider>
            </RestaurantProvider>
          </I18nextProvider>
        </TabProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
