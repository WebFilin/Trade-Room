import React from "react";
import styles from "./tableRowPrice.module.scss";
import shortid from "shortid";
function TableRowPrice({ arrTraders, rowTitle, symbol }) {
  return (
    <tr className={styles.row_price}>
      <td>{rowTitle}</td>
      {arrTraders.map(({ price, isMove }) => {
        return (
          <td
            key={shortid.generate()}
            className={isMove ? styles.active : styles.disabled}
          >
            {price &&
              price.map((items) => {
                return <p key={shortid.generate()}>{items + symbol}</p>;
              })}
          </td>
        );
      })}
    </tr>
  );
}

export default TableRowPrice;
