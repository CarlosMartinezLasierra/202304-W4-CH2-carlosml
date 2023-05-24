import React from "react";

interface ConfirmationStepProps {
  data: { [key: string]: string };
  onConfirm: () => void;
}

const ConfirmationStep: React.FC<ConfirmationStepProps> = ({
  data,
  onConfirm,
}) => {
  return (
    <div>
      <h2>Confirmation</h2>
      <p>Please review your entered data:</p>
      <ul>
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
      <button onClick={onConfirm}>Confirm</button>
    </div>
  );
};

export default ConfirmationStep;
