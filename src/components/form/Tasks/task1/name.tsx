import React, { useState } from "react";

interface NameInputProps {
  onChange: (name: string) => void;
}

const NameInput: React.FC<NameInputProps> = ({ onChange }) => {
  const [name, setName] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
        required
      />
    </div>
  );
};

export default NameInput;
