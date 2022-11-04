import React, { useEffect, useState } from "react";
import SimpleTableComponent from "./components/simple-table";
import ServerSimpleTableComponent from "./components/server-simple-table";
const columns = [
  {
    field: "id",
    headerName: "id",
  },
  {
    field: "name",
    headerName: "name",
  },
  {
    field: "username",
    headerName: "username",
  },
  {
    field: "email",
    headerName: "email",
  },
];

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
     fetch(`https://jsonplaceholder.typicode.com/users`)
       .then((response) => response.json())
       .then((json) => setList(json));
  }, []);

  const myRender = (item, col) =>
  {
      if(col.field === 'email') return (
        <a href={`mailto:${item[col.field]}`}>{item[col.field]}</a>
      ); else if(col.field === 'name') return (
        <strong>{item[col.field]}</strong>
      ); else return (
        <span>{item[col.field]}</span>
      );
  };

  return (
    <div className="App">
      <SimpleTableComponent columns={columns} list={list} cellComponent={myRender}/>
    </div>
  );
}

export default App;
