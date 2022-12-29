import React from "react";
import styles from "./tableRow.module.scss";
import shortid from "shortid";
function TableRow({ arrTraders, arrMenu, rowTitle, tdValue }) {
  //   console.log(arrTraders[0].isMove);

  return (
    <tr className={styles.table_row__user_name}>
      <td>{rowTitle}</td>
      {arrTraders.map((items) => {
        return (
          <td
            key={shortid.generate()}
            className={items.isMove ? styles.active : styles.disabled}
          >
            {items[tdValue]}
          </td>
        );
      })}
    </tr>
  );
}

export default TableRow;
