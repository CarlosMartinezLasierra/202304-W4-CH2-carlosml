import React, { useState } from "react";

interface NewsletterCheckboxProps {
  onChange: (subscribed: boolean) => void;
}

const NewsletterCheckbox: React.FC<NewsletterCheckboxProps> = ({
  onChange,
}) => {
  const [subscribed, setSubscribed] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubscribed(e.target.checked);
    onChange(e.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={subscribed}
          onChange={handleCheckboxChange}
        />
        Desea recibir información de nuestra newsletter?
      </label>
    </div>
  );
};

export default NewsletterCheckbox;
