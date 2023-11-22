import "./style.css";

import React, { useEffect, useState } from "react";

import { MdOutlineOpenInNew } from "react-icons/md";
import headingGenerator from "./headingGenerator";

function CompleteTable({ data }) {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    let temp = headingGenerator(data);
    setHeadings(temp);
  }, [data]);

  return (
    <table className="tableContainer">
      <thead className="tableHead">
        <tr key="" className="headRow">
          {headings?.map((heading, indx) => (
            <th key={heading + indx}>{heading}</th>
          ))}
        </tr>
      </thead>
      {headings.length === 0 ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #e7e7e7",
            borderRadius: "16px",
            minHeight: "200px",
          }}
        >
          <h4>No Results Found...</h4>
        </div>
      ) : null}
      <tbody>
        {data.map((userObj, indx) => (
          <tr key={indx}>
            <td className="userInfo">
              <div>
                <p className="name">{userObj.user.name}</p>
                <p className="mail">{userObj.user.mail}</p>
              </div>
              <a href="/">
                <MdOutlineOpenInNew className="linkIcon" size={"1.4rem"} />
              </a>
            </td>
            <td>
              <div
                className={`risk ${
                  userObj.riskLevel === "High"
                    ? "high"
                    : userObj.riskLevel === "Low"
                    ? "low"
                    : "medium"
                }`}
              >
                <div></div>
                <p>{userObj.riskLevel}</p>
              </div>
            </td>
            <td>
              <p>{userObj.actionReason}</p>
            </td>
            <td>
              <p>{userObj.timeToClose}</p>
            </td>
            <td>
              <p className="date">{userObj.dateAddedOn}</p>
            </td>
            <td>
              <p>{userObj.actionTakenBy.name}</p>
              <p className="smallerDate date">{userObj.actionTakenBy.mail}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CompleteTable;
