import React, { useEffect, useState } from "react";
import SimpleTableComponent from "./components/simple-table";
import ServerSimpleTableComponent from "./components/server-simple-table";
const columns = [{
  field: "id",
  headerName: "id"
}, {
  field: "name",
  headerName: "name"
}, {
  field: "username",
  headerName: "username"
}, {
  field: "email",
  headerName: "email"
}];

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`).then(response => response.json()).then(json => setList(json));
  }, []);

  const myRender = (item, col) => {
    if (col.field === 'email') return /*#__PURE__*/React.createElement("a", {
      href: `mailto:${item[col.field]}`
    }, item[col.field]);else if (col.field === 'name') return /*#__PURE__*/React.createElement("strong", null, item[col.field]);else return /*#__PURE__*/React.createElement("span", null, item[col.field]);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(SimpleTableComponent, {
    columns: columns,
    list: list,
    cellComponent: myRender
  }));
}

export default App;