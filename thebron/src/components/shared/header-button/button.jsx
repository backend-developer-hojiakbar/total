import { ToggleGroupItem } from "@/components/ui/toggle-group";
import { Link } from "react-router-dom";

const HeaderButton = ({ children, value, ariaLabel, icon, onClick }) => {
  return (
    <>
      <ToggleGroupItem
        value={value}
        aria-label={ariaLabel}
        flex
        items-center
        gap-2
        bg="#DBF2F8"
        px-4
        className="py-2 sm:ml-1 md:ml-2 lg:ml-3 data-[state=on]:bg-primary data-[state=on]:text-white bg-[#e7f6fa]"
        onClick={onClick}
      >
        {icon} {children}
      </ToggleGroupItem>
    </>
  );
};

export default HeaderButton;
