import React, { useState } from "react";

interface LastNameInputProps {
  onChange: (lastName: string) => void;
}

const LastNameInput: React.FC<LastNameInputProps> = ({ onChange }) => {
  const [lastName, setLastName] = useState("");

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={handleLastNameChange}
        required
      />
    </div>
  );
};

export default LastNameInput;
