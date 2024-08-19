import React from "react";

export const RestaurantContext = React.createContext();

export const RestaurantProvider = ({ children }) => {
  const [chair, setChair] = React.useState(5);

  const [quantity, setQuantity] = React.useState(1);

  const increaseQuantity = () => setQuantity((q) => q + 1);
  const decreaseQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <RestaurantContext.Provider
      value={{ chair, setChair, quantity, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => React.useContext(RestaurantContext);
