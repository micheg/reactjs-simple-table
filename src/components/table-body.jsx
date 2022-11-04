import React, { useEffect } from "react";

const BodyTableComponent = ({ data, columnsData, cellComponent }) => {
  return (
    <tbody>
      {data?.map((item, i) => (
        <tr key={i}>
          {columnsData?.map((col, j) =>
          {
            return (
              <td key={j}>
                {cellComponent(item, col)}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default BodyTableComponent;
