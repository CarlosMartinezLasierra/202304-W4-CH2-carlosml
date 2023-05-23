import React, { useState } from "react";

interface EmailInputProps {
  onChange: (email: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ onChange }) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        required
      />
    </div>
  );
};

export default EmailInput;
