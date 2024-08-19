const TypeChairs = ({ taken }) => {
  return (
    <div className="flex items-center gap-1 mt-8 ml-25">
      <div className="flex flex-col items-center">
        <svg
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 24 24"
        >
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
        </svg>
        <p>Taken</p>
      </div>
      <div className="flex flex-col items-center ml-5">
        <svg
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 24 24"
        >
          <path
            stroke={"#7a7a7a"}
            strokeWidth="0.5"
            fill={"#F8F8F8"}
            d="M5 21q-.425 0-.712-.288T4 20v-1q-1.25 0-2.125-.875T1 16v-5q0-.825.588-1.412T3 9t1.413.588T5 11v4h14v-4q0-.825.588-1.412T21 9t1.413.588T23 11v5q0 1.25-.875 2.125T20 19v1q0 .425-.288.713T19 21t-.712-.288T18 20v-1H6v1q0 .425-.288.713T5 21m2-8v-2q0-1.375-.837-2.463T4 7V6q0-1.25.875-2.125T7 3h10q1.25 0 2.125.875T20 6v1q-1.35.35-2.175 1.463T17 11v2z"
          />
          <path
            fill={"#D9D9D9"}
            d="M5 21q-.425 0-.712-.288T4 20v-1q-1.25 0-2.125-.875T1 16v-5q0-.825.588-1.412T3 9t1.413.588T5 11v4h14v-4q0-.825.588-1.412T21 9t1.413.588T23 11v5q0 1.25-.875 2.125T20 19v1q0 .425-.288.713T19 21t-.712-.288T18 20v-1H6v1q0 .425-.288.713T5 21z"
          />
        </svg>
        <p>Available</p>
      </div>
    </div>
  );
};

export default TypeChairs;

// <div className="flex flex-col items-center ml-3">
//   <svg
//     className="cursor-pointer"
//     xmlns="http://www.w3.org/2000/svg"
//     width="42"
//     height="42"
//     viewBox="0 0 24 24"
//   >
//     <path
//       stroke={"#7a7a7a"}
//       strokeWidth="0.5"
//       fill={"#DBF2F8"}
//       d="M5 21q-.425 0-.712-.288T4 20v-1q-1.25 0-2.125-.875T1 16v-5q0-.825.588-1.412T3 9t1.413.588T5 11v4h14v-4q0-.825.588-1.412T21 9t1.413.588T23 11v5q0 1.25-.875 2.125T20 19v1q0 .425-.288.713T19 21t-.712-.288T18 20v-1H6v1q0 .425-.288.713T5 21m2-8v-2q0-1.375-.837-2.463T4 7V6q0-1.25.875-2.125T7 3h10q1.25 0 2.125.875T20 6v1q-1.35.35-2.175 1.463T17 11v2z"
//     />
//     <path
//       fill={"#03559E"}
//       d="M5 21q-.425 0-.712-.288T4 20v-1q-1.25 0-2.125-.875T1 16v-5q0-.825.588-1.412T3 9t1.413.588T5 11v4h14v-4q0-.825.588-1.412T21 9t1.413.588T23 11v5q0 1.25-.875 2.125T20 19v1q0 .425-.288.713T19 21t-.712-.288T18 20v-1H6v1q0 .425-.288.713T5 21z"
//     />
//   </svg>
//   <p>Selected</p>
// </div>
