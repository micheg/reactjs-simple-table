import React, { useEffect } from "react";

const BodyTableComponent = ({
  data,
  columnsData,
  cellComponent
}) => {
  useEffect(() => {
    debugger;
  }, []);
  window.$CC = cellComponent;
  return /*#__PURE__*/React.createElement("tbody", null, data?.map((item, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, columnsData?.map((col, j) => {
    return /*#__PURE__*/React.createElement("td", {
      key: j
    }, cellComponent(item, col));
  }))));
};

export default BodyTableComponent;