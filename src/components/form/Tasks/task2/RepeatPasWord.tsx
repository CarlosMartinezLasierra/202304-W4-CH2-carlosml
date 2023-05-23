import React, { useState } from "react";

interface RepeatPasswordInputProps {
  onChange: (repeatPassword: string) => void;
}

const RepeatPasswordInput: React.FC<RepeatPasswordInputProps> = ({
  onChange,
}) => {
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleRepeatPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRepeatPassword(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="repeatPassword">Repeat Password:</label>
      <input
        type="password"
        id="repeatPassword"
        value={repeatPassword}
        onChange={handleRepeatPasswordChange}
        required
      />
    </div>
  );
};
export default RepeatPasswordInput;
