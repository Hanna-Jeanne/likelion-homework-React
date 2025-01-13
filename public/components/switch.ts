import React from "../lib/react.js";
import { useState } from "../lib/react.js";

function SwitchButton() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prev) => !prev); // 이전 상태 반전
  };

  const circle = React.createElement("div", {
    className: "circle",
    style: {
      width: "26px",
      height: "26px",
      backgroundColor: "#fff",
      borderRadius: "100%",
    },
  });

  const ButtonStyle = {
    width: "50px",
    height: "30px",

    margin: 0,
    border: "none",
    padding: "2px",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: isActive ? "flex-end" : "flex-start",

    backgroundColor: isActive ? "#7b68ee" : "#e8eef2",
    borderRadius: "100px",
    transition: "all 0.3s ease",
  };

  return React.createElement(
    "button",

    {
      onClick: handleClick,
      type: "button",
      className: "btn-switch",
      role: "switch",
      "aria-checked": isActive ? "true" : "false",

      style: ButtonStyle,
    },

    circle
  );
}

export default SwitchButton;
