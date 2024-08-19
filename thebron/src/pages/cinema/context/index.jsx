import React from "react";

export const CinemaContext = React.createContext();

export const CinemaProvider = ({ children }) => {
  const [cinema, setCinema] = React.useState("qw");
  const [selectedTime, setSelectedTime] = React.useState(null);
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedSeats, setSelectedSeats] = React.useState([]);
  // const [selectedMovie, setSelectedMovie] = React.useState(null);

  return (
    <CinemaContext.Provider
      value={{
        cinema,
        setCinema,
        selectedTime,
        setSelectedTime,
        selectedSeats,
        setSelectedSeats,
        selectedDate,
        setSelectedDate,
      }}
    >
      {children}
    </CinemaContext.Provider>
  );
};

export const useCinema = () => React.useContext(CinemaContext);
