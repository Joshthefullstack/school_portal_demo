import React from "react";
import style from "../css_modules/TableComp.module.css"

function TableComp({item, index}) {
  return (
    <div>
      <table key={index}>
        <tbody className={style.flex_tbody}>
          <div className={style.flex_3_cols}>
            <th className={style.grid_thead}>S/N</th>
            {item.id.map((value, index) => {
              return (
                <tr className={style.testing} key={index}>
                  <td className={style.item_data}>{value}</td>
                </tr>
              );
            })}
          </div>

          <div className={style.flex_3_cols}>
            <th className={style.grid_thead}>Course Code</th>
            {item.courseCode.map((value, index) => {
              return (
                <tr className={style.testing} key={index}>
                  <td className={style.item_data}>{value}</td>
                </tr>
              );
            })}
          </div>
          <div className={style.flex_3_cols}>
            <th className={style.grid_thead}>Course Title</th>
            {item.courseTitle.map((value, index) => {
              return (
                <tr className={style.testing} key={index}>
                  <td className={style.item_data}>{value}</td>
                </tr>
              );
            })}
          </div>
          <div className={style.flex_3_cols}>
            <th className={style.grid_thead}>Course Unit</th>
            {item.courseUnit.map((value, index) => {
              return (
                <tr className={style.testing} key={index}>
                  <td className={style.item_data}>{value}</td>
                </tr>
              );
            })}
          </div>
        </tbody>
      </table>
    </div>
  );
}

export default TableComp;
