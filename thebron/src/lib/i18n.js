import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uz from "@/localization/uz.json";
import ru from "@/localization/ru.json";
import en from "@/localization/en.json";

const resources = {
  uz: {
    translation: uz,
  },
  ru: {
    translation: ru,
  },
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
