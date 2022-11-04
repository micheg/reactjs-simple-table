import React from "react";

const HeaderTableComponent = ({
  columns,
  orderby,
  order,
  sort
}) => {
  return /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns?.map((item, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    onClick: () => item.field !== "" ? sort(item.field) : ""
  }, orderby === item.field ? order === "descending" ? /*#__PURE__*/React.createElement("i", {
    className: "up-caret"
  }, " \u25B2") : /*#__PURE__*/React.createElement("i", {
    className: "down-caret"
  }, "\u25BC") : "", item.headerName))));
};

export default HeaderTableComponent;