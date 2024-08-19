import { Input } from "@/components/ui/input";
import React from "react";
import InputMask from "react-input-mask";

const PhoneNumberInput = () => {
  const [phoneValue, setPhoneValue] = React.useState("");

  return (
    <div>
      <label htmlFor="phoneNumber">Phone Number</label>
      <InputMask
        mask="+9989999999"
        value={phoneValue}
        onChange={(e) => setPhoneValue(e.target.value)}
      >
        {(inputProps) => <Input {...inputProps} />}
      </InputMask>
    </div>
  );
};

export default PhoneNumberInput;
