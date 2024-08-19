import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Logo } from "@/assets/icons";
import { Dialog } from "@/components/ui/dialog";
import AuthModal from "../auth-modal";
import { Globus } from "@/assets/icons";
import Avatar from "./components/avatar";
import { ProfileDropDownMenu } from "./components/drop-down-menu";
// import Avatar from "../avatar";

const Header = () => {
  const { i18n, t } = useTranslation();
  const [currentLang, setCurrentLang] = useState("Uzbekcha");
  const isAuthenticated = true;

  const changeLanguage = (e, lng) => {
    i18n.changeLanguage(lng);
    setCurrentLang(e.target.textContent);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <nav flex py="34px" items-center justify-between>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <div flex items-center gap-12>
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="hover:bg-transparent focus:border-none focus:outline-none focus:ring-0 focus:ring-transparent "
          >
            <Button flex flex-col variant="ghost" size="icon">
              <Globus />
              {currentLang}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={(e) => changeLanguage(e, "uz")}>
              Uzbekcha
            </DropdownMenuItem>
            <DropdownMenuItem onClick={(e) => changeLanguage(e, "ru")}>
              Русский
            </DropdownMenuItem>
            <DropdownMenuItem onClick={(e) => changeLanguage(e, "en")}>
              English
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {isAuthenticated ? (
          <div flex items-center gap-4>
            <ProfileDropDownMenu />
            <Avatar />
          </div>
        ) : (
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <Button variant="secondary" onClick={handleOpenModal}>
              {t("login")}
            </Button>
            {/* <AuthModal /> */}
            <div className="hidden">
              <AuthModal setIsOpen={setIsOpen} />
            </div>
          </Dialog>
        )}
      </div>
    </nav>
  );
};

export default Header;
