import React from "react";

declare global {
  interface Window {
    PENALTY: number;
  }
}

// adjust the example by editing these values
window.PENALTY = 150_000;
const FIELDS_COUNT = 10;

const fieldNames = Array.from(
  { length: FIELDS_COUNT },
  (v, index) => `field${index}`
);

const initialFieldValues: Record<string, string> = {};
const initialTouchedFields: Record<string, boolean> = {};
for (const name of fieldNames) {
  initialFieldValues[name] = "";
  initialTouchedFields[name] = false;
}

function getFieldError(value: string | undefined) {
  if (!value) return "field is required";

  const valueIsLowerCase = value === value.toLowerCase();
  const valueIsLongEnough = value.length >= 3;
  const valueIsShortEnough = value.length <= 10;

  if (!valueIsLowerCase) {
    return "value must be lower case";
  } else if (!valueIsLongEnough) {
    return "value must be at least 3 characters long";
  } else if (!valueIsShortEnough) {
    return "value must be no longer than 10 characters";
  }
  return null;
}

let currentPenaltyValue = 2;
function PenaltyComp() {
  for (let index = 2; index < window.PENALTY; index++) {
    currentPenaltyValue = currentPenaltyValue ** index / Math.random();
  }
  return null;
}

export const FastInput = ({
  name,
  wasSubmitted,
}: {
  name: string;
  wasSubmitted: boolean;
}) => {
  const [value, setValue] = React.useState("");
  const [touched, setTouched] = React.useState(false);
  const errorMessage = getFieldError(value);
  const displayErrorMessage = (wasSubmitted || touched) && errorMessage;

  return (
    <div key={name}>
      {/* <PenaltyComp /> */}
      <label htmlFor={`${name}-input`}>{name}:</label>{" "}
      <input
        id={`${name}-input`}
        name={name}
        type="text"
        onChange={(event) => setValue(event.currentTarget.value)}
        onBlur={() => setTouched(true)}
        pattern="[a-z]{3,10}"
        required
        aria-describedby={displayErrorMessage ? `${name}-error` : undefined}
      />
      {displayErrorMessage ? (
        <span role="alert" id={`${name}-error`} className="error-message">
          {errorMessage}
        </span>
      ) : null}
    </div>
  );
};
