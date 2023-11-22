import "./style.css";

import { IoIosSearch } from "react-icons/io";
import React from "react";

function Filters({
  searched,
  setSearched,
  triggers,
  setTriggerFilter,
  risks,
  setRiskFilter,
  triggerOptions,
  riskOptions,
}) {
  return (
    <div className="filters">
      <div className="searchBox">
        <IoIosSearch color="#666" />
        <input
          type="text"
          value={searched}
          placeholder="Search"
          onChange={(e) => {
            setSearched(e.target.value);
          }}
          maxLength={50}
          title="Search by user name or email"
        />
      </div>

      <select
        value={triggers}
        onChange={(e) => {
          setTriggerFilter(e.target.value);
        }}
      >
        <option value="" key="reasons">
          {triggerOptions?.[0]}
        </option>
        {triggerOptions?.map(
          (opt, indx) =>
            indx !== 0 && (
              <option value={opt} key={"reasons" + indx}>
                {opt}
              </option>
            )
        )}
      </select>

      <select
        value={risks}
        onChange={(e) => {
          setRiskFilter(e.target.value);
        }}
      >
        <option value="" key="risks">
          {riskOptions?.[0]}
        </option>
        {riskOptions?.map(
          (opt, indx) =>
            indx !== 0 && (
              <option value={opt} key={"risk" + indx}>
                {opt}
              </option>
            )
        )}
      </select>
    </div>
  );
}

export default Filters;
