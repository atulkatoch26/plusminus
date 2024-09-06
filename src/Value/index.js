import React from "react";
import Button from "../components/Button";

export const Value = ({ minusFunc, plusFunc }) => {
  const buttonProps = [
    { text: "Minus(-)", onClick: minusFunc },
    { text: "Plus(+)", onClick: plusFunc },
  ];

  return (
    <div>
      {buttonProps?.map((v, i) => (
        <>
          <Button text={v.text} onClick={v.onClick} />
        </>
      ))}
    </div>
  );
};
