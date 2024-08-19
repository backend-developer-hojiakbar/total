import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { RestaurantContext } from "../context";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { uz, ru, enUS } from "date-fns/locale";

const LeftSide = () => {
  const { setChair } = React.useContext(RestaurantContext);
  const [date, setDate] = React.useState(new Date());
  const select = (value) => {
    setChair(value);
  };
  return (
    <div className="w-full border rounded-md py-6 px-5 h-[580px]">
      <div className="flex-between mb-4">
        <h3 className="font-bold text-2xl">Name Restarount</h3>
        <span className="text-2xl text-[#03559E]"> 125 000сум </span>
      </div>
      <Select onValueChange={(value) => select(value)}>
        <SelectTrigger>
          <SelectValue placeholder="Choose the number of chairs" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Chair number</SelectLabel>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="6">6</SelectItem>
            <SelectItem value="7">7</SelectItem>
            <SelectItem value="8">8</SelectItem>
            <SelectItem value="9">9</SelectItem>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="11">11</SelectItem>
            <SelectItem value="12">12</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="flex-between gap-4 mt-4">
        <Button className="w-full">Date</Button>
        <Button variant="outline" className="w-full">
          Time
        </Button>
      </div>
      <Calendar
        locale={uz}
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md mt-4 flex items-center justify-center border"
        // classNames={{
        //   months: "bg-red-400",
        //   month: "space-y-4 w-full flex flex-col",
        //   table: "w-full h-full border-collapse space-y-1",
        //   caption_label: "text-lg", // change font size as per your need
        //   row: "w-full mt-2 bg-transparent",
        //   day: "text-lg w-16 h-16 rounded-sm",
        // }}
      />
      <Button className="w-full mt-4">Ok</Button>
    </div>
  );
};

export default LeftSide;
