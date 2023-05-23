import React, { useState } from "react";

interface AccountTypeSelectProps {
  onChange: (accountType: string) => void;
}

const AccountTypeSelect: React.FC<AccountTypeSelectProps> = ({ onChange }) => {
  const [accountType, setAccountType] = useState("");

  const handleAccountTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAccountType(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="accountType">Account Type:</label>
      <select
        id="accountType"
        value={accountType}
        onChange={handleAccountTypeChange}
        required
      >
        <option value="">Select Account Type</option>
        <option value="personal">Personal</option>
        <option value="pro">Pro</option>
        <option value="business">Business</option>
      </select>
    </div>
  );
};

export default AccountTypeSelect;
