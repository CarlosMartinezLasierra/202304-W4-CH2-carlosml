import React, { useState } from "react";

interface UsernameInputProps {
  onChange: (username: string) => void;
}

const UsernameInput: React.FC<UsernameInputProps> = ({ onChange }) => {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={handleUsernameChange}
        required
      />
    </div>
  );
};

export default UsernameInput;
