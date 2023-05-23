import React, { useState } from "react";

interface BirthDateInputProps {
  onChange: (birthDate: string) => void;
}

const BirthDateInput: React.FC<BirthDateInputProps> = ({ onChange }) => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(0);

  const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputDate = e.target.value;
    setBirthDate(inputDate);

    const today = new Date();
    const birthDateValue = new Date(inputDate);
    const ageDiff = today.getFullYear() - birthDateValue.getFullYear();
    const hasPassedBirthday =
      today.getMonth() >= birthDateValue.getMonth() &&
      today.getDate() >= birthDateValue.getDate();
    const calculatedAge = hasPassedBirthday ? ageDiff : ageDiff - 1;

    setAge(calculatedAge);
    onChange(inputDate);
  };

  return (
    <div>
      <label htmlFor="birthDate">Birth Date:</label>
      <input
        type="date"
        id="birthDate"
        value={birthDate}
        onChange={handleBirthDateChange}
        required
      />
      <span>{`Age: ${age}`}</span>
    </div>
  );
};

export default BirthDateInput;
