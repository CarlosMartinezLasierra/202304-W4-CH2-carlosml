import React, { useState } from "react";

interface PasswordInputProps {
  onChange: (password: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ onChange }) => {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />
    </div>
  );
};

export default PasswordInput;
