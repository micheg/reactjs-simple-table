import React, { useEffect } from "react";

const isFunction = (x) =>
{
  return Object.prototype.toString.call(x) == '[object Function]';
};

const BodyTableComponent = ({ data, columnsData, formatter }) => {
  useEffect(() => {
    debugger;
  }, []);
  let format_fn = isFunction(formatter) ? formatter : (str, obj, field) => { return str; }

  return (
    <tbody>
      {data?.map((item, i) => (
        <tr key={i}>
          {columnsData?.map((col, j) =>
          {
            return (
              <td key={j}>
                <span>format_fn({item[col.field]})</span>
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default BodyTableComponent;
