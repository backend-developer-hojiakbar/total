import React, { useState } from "react";
import { useCinema } from "../context";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { StarIcon2 } from "@/assets/icons";
import TypeChairs from "./components/type-chairs";

const Chair = ({ isSelected, onClick, index, taken }) => {
  const blue = "#03559E";
  const gray = "#f8f8f8";
  const whiteGray = "#d9d9d9";
  const blueGray = "#DBF2F8";

  return (
    <svg
      className={!taken ? "cursor-pointer" : "cursor-not-allowed"}
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      viewBox="0 0 24 24"
      onClick={() => !taken && onClick()}
    >
      {!taken ? (
        <>
          <path
            stroke={"#7a7a7a"}
            strokeWidth="0.5"
            fill={isSelected ? blueGray : gray}
            d="M5 21q-.425 0-.712-.288T4 20v-1q-1.25 0-2.125-.875T1 16v-5q0-.825.588-1.412T3 9t1.413.588T5 11v4h14v-4q0-.825.588-1.412T21 9t1.413.588T23 11v5q0 1.25-.875 2.125T20 19v1q0 .425-.288.713T19 21t-.712-.288T18 20v-1H6v1q0 .425-.288.713T5 21m2-8v-2q0-1.375-.837-2.463T4 7V6q0-1.25.875-2.125T7 3h10q1.25 0 2.125.875T20 6v1q-1.35.35-2.175 1.463T17 11v2z"
          />
          <path
            fill={isSelected ? blue : whiteGray}
            d="M5 21q-.425 0-.712-.288T4 20v-1q-1.25 0-2.125-.875T1 16v-5q0-.825.588-1.412T3 9t1.413.588T5 11v4h14v-4q0-.825.588-1.412T21 9t1.413.588T23 11v5q0 1.25-.875 2.125T20 19v1q0 .425-.288.713T19 21t-.712-.288T18 20v-1H6v1q0 .425-.288.713T5 21z"
          />
        </>
      ) : (
        <>
          <path
            stroke={"red"}
            strokeWidth="0.8"
            fill={"#E9AEAE"}
            d="M5 21q-.425 0-.712-.288T4 20v-1q-1.25 0-2.125-.875T1 16v-5q0-.825.588-1.412T3 9t1.413.588T5 11v4h14v-4q0-.825.588-1.412T21 9t1.413.588T23 11v5q0 1.25-.875 2.125T20 19v1q0 .425-.288.713T19 21t-.712-.288T18 20v-1H6v1q0 .425-.288.713T5 21m2-8v-2q0-1.375-.837-2.463T4 7V6q0-1.25.875-2.125T7 3h10q1.25 0 2.125.875T20 6v1q-1.35.35-2.175 1.463T17 11v2z"
          />
          <path
            fill={"#C13515"}
            d="M5 21q-.425 0-.712-.288T4 20v-1q-1.25 0-2.125-.875T1 16v-5q0-.825.588-1.412T3 9t1.413.588T5 11v4h14v-4q0-.825.588-1.412T21 9t1.413.588T23 11v5q0 1.25-.875 2.125T20 19v1q0 .425-.288.713T19 21t-.712-.288T18 20v-1H6v1q0 .425-.288.713T5 21z"
          />
        </>
      )}
      <text
        x="12" // Horizontal position
        y="9" // Vertical position
        textAnchor="middle" // Center the text
        fontSize="6" // Font size
        fill={isSelected ? "#03559E" : "#333"} // Text color
      >
        {index + 1}
      </text>
    </svg>
  );
};

const Places = () => {
  const [selectedSeats, setSelectedSeats] = useState(new Set());

  const toggleSeatSelection = (index) => {
    console.log("hello");
    setSelectedSeats((prev) => {
      const newSelectedSeats = new Set(prev);
      if (newSelectedSeats.has(index)) {
        newSelectedSeats.delete(index);
      } else {
        newSelectedSeats.add(index);
      }
      return newSelectedSeats;
    });
  };

  const [left] = useState(Array.from({ length: 40 }, (_, i) => i + 1));
  const [middle] = useState(Array.from({ length: 88 }, (_, i) => i + 1));
  const [right] = useState(Array.from({ length: 40 }, (_, i) => i + 1));
  const navigate = useNavigate();
  const { selectedTime } = useCinema();
  const { t } = useTranslation();

  const takenPlaces = [1, 4, 9, 34, 42, 89, 7, 129, 77];

  return (
    <div>
      <div className="flex items-center gap-4">
        <Button
          onClick={() => navigate(-1)}
          variant="outline"
          className="w-[32px] h-[32px] p-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            aria-label={t("gotoback")}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m14 7l-5 5l5 5"
            />
          </svg>
        </Button>
        <p className="text-lg font-medium">{t("gotoback")}</p>
      </div>
      <h2 className="text-4xl font-bold mt-8">Interstellar</h2>
      <div className="flex text-xl font-medium items-center gap-1 mt-5">
        <StarIcon2 /> <span>8.6</span>
        <address className="not-italic text-primary underline ml-6">
          Tashkent {selectedTime}
        </address>
      </div>
      <p className="mt-8">Guest number</p>
      <div className="flex mt-3 items-center gap-4">
        <Button className="h-[48px] w-[48px] rounded-full">-</Button>
        <div className="flex items-center justify-center text-[24px] border-2 border-primary w-[120px] h-[48px] rounded-lg">
          1
        </div>
        <Button className="h-[48px] w-[48px] rounded-full">+</Button>
      </div>
      <div className="container">
        <TypeChairs />
        <div className="flex justify-center items-end gap-8 mt-10">
          <div className="grid grid-cols-5 items-end gap-1">
            {left.map((seat, index) => (
              <Chair
                index={index}
                key={index}
                taken={takenPlaces.includes(index + 1)}
                isSelected={selectedSeats.has(index)}
                onClick={() => toggleSeatSelection(index)}
              />
            ))}
          </div>
          <div className="grid grid-cols-11 gap-1">
            {middle.map((seat, index) => (
              <Chair
                taken={takenPlaces.includes(index + left.length + 1)}
                index={index + left.length}
                key={index + left.length}
                isSelected={selectedSeats.has(index + left.length)}
                onClick={() => toggleSeatSelection(index + left.length)}
              />
            ))}
          </div>
          <div className="grid grid-cols-5 gap-1">
            {right.map((seat, index) => (
              <Chair
                index={index + left.length + middle.length}
                taken={takenPlaces.includes(
                  index + left.length + middle.length + 1,
                )}
                key={index + left.length + middle.length}
                isSelected={selectedSeats.has(
                  index + left.length + middle.length,
                )}
                onClick={() =>
                  toggleSeatSelection(index + left.length + middle.length)
                }
              />
            ))}
          </div>
        </div>
        <Button className="w-full mt-10">Pay 125 000сум</Button>
      </div>
    </div>
  );
};

export default Places;
