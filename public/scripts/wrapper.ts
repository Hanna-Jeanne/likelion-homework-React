import React from "../lib/react.js";
import SwitchButton from "../components/switch.js";
import ChipTag from "../components/chip.js";
import Profile from "../components/profile.js";

function Wrapper() {
  return React.createElement(React.Fragment, null, React.createElement(SwitchButton), React.createElement(ChipTag), React.createElement(Profile));
}

export default Wrapper;
