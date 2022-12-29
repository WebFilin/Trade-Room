import React from "react";
import styles from "./tableRow.module.scss";
import shortid from "shortid";
function TableRow({ arrTraders, rowTitle, tdValue, symbol }) {
  return (
    <tr className={styles.table_row}>
      <td>{rowTitle}</td>
      {arrTraders.map((items) => {
        return (
          <td
            key={shortid.generate()}
            className={items.isMove ? styles.active : styles.disabled}
          >
            {items[tdValue] ? items[tdValue] + symbol : "-"}
          </td>
        );
      })}
    </tr>
  );
}

export default TableRow;
