import MenuCard from "./MenuCard";

const MenuTabComponent = ({ foodData }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-10">
        {foodData.map((item) => (
          <MenuCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default MenuTabComponent;
