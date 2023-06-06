import React from "react";

export function PageWrapper({ children, classname }) {
  return (
    <div className={`max-w-5xl mx-auto px-2  ${classname}`}>{children}</div>
  );
}
