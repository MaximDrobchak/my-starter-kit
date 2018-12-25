import React from "react";

export default ({ onChange, type = "text", className = "" }) => (
  <input type={type} onChange={onChange} className={className} />
);
