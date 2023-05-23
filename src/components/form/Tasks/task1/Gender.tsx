import React, { useState } from "react";

interface GenderInputProps {
  onChange: (gender: string) => void;
}

const GenderInput: React.FC<GenderInputProps> = ({ onChange }) => {
  const [gender, setGender] = useState("");

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div>
      <label>Gender:</label>
      <div>
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          id="male"
          value="male"
          checked={gender === "male"}
          onChange={handleGenderChange}
          required
        />
      </div>
      <div>
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          id="female"
          value="female"
          checked={gender === "female"}
          onChange={handleGenderChange}
        />
      </div>
      <div>
        <label htmlFor="other">Other</label>
        <input
          type="radio"
          id="other"
          value="other"
          checked={gender === "other"}
          onChange={handleGenderChange}
        />
      </div>
      <div>
        <label htmlFor="preferNotToMention">Prefer not to mention</label>
        <input
          type="radio"
          id="preferNotToMention"
          value="preferNotToMention"
          checked={gender === "preferNotToMention"}
          onChange={handleGenderChange}
        />
      </div>
    </div>
  );
};

export default GenderInput;
