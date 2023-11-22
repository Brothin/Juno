import "./styles.css";

import React, { useEffect, useState } from "react";

import CompleteTable from "../Table/completeTable";
import Filters from "../Filters";
import { MdHighlightOff } from "react-icons/md";
import Modal from "../Modal";
import PendingTable from "../Table/pendingTable";
import completedData from "../../assets/data/completedData";
import pendingData from "../../assets/data/pendingData";

function Monitoring() {
  const [pendingTab, setPendingTab] = useState(true); // state to switch tabs
  const [searched, setSearched] = useState("");
  const [triggerFilter, setTriggerFilter] = useState("");
  const [riskFilter, setRiskFilter] = useState("");

  const [triggerOptions, setTriggerOptions] = useState([]);
  const [riskOptions, setRiskOptions] = useState([]);
  const [filteredData, setFilteredData] = useState(pendingData);
  const [showModal, setShowModal] = useState(false); // show or hide modal

  useEffect(() => {
    if (pendingTab) {
      const tempTrigger = [];
      const tempRisk = [];
      tempTrigger?.push("Trigger reason");
      tempRisk?.push("Risk level");
      pendingData?.map((dataObj) => tempTrigger?.push(dataObj?.triggerReason));
      pendingData?.map((dataObj) => tempRisk?.push(dataObj?.riskLevel));
      // for unique values

      setTriggerOptions([...new Set(tempTrigger)]);
      setRiskOptions([...new Set(tempRisk)]);
    }
    if (!pendingTab) {
      const tempTrigger = [];
      const tempRisk = [];
      tempTrigger?.push("Action reason");
      tempRisk?.push("Risk level");
      completedData?.map((dataObj) => tempTrigger?.push(dataObj?.actionReason));
      completedData?.map((dataObj) => tempRisk?.push(dataObj?.riskLevel));
      // for unique values

      setTriggerOptions([...new Set(tempTrigger)]);
      setRiskOptions([...new Set(tempRisk)]);
    }
  }, [pendingTab, pendingData, completedData]);

  // filtering data based on searched filter for each tab
  useEffect(() => {
    if (pendingTab) {
      let pData = pendingData;
      if (searched) {
        const filtered = pData?.filter(
          (dataObj) =>
            dataObj?.user?.name
              ?.toLowerCase()
              .includes(searched?.toLowerCase()) ||
            dataObj?.user?.mail?.toLowerCase().includes(searched?.toLowerCase())
        );
        pData = filtered;
      }
      if (riskFilter) {
        const filtered = pData?.filter(
          (dataObj) =>
            dataObj?.riskLevel?.toLowerCase() === riskFilter?.toLowerCase()
        );
        pData = filtered;
      }
      if (triggerFilter) {
        const filtered = pData?.filter(
          (dataObj) =>
            dataObj?.triggerReason?.toLowerCase() ===
            triggerFilter?.toLowerCase()
        );
        pData = filtered;
      }
      setFilteredData(pData);
    } else {
      let cData = completedData;
      if (searched) {
        const filtered = cData?.filter(
          (dataObj) =>
            dataObj?.user?.name
              ?.toLowerCase()
              ?.includes(searched?.toLowerCase()) ||
            dataObj?.user?.mail
              ?.toLowerCase()
              ?.includes(searched?.toLowerCase())
        );
        cData = filtered;
      }
      if (riskFilter) {
        const filtered = cData?.filter(
          (dataObj) =>
            dataObj?.riskLevel?.toLowerCase() === riskFilter?.toLowerCase()
        );
        cData = filtered;
      }
      if (triggerFilter) {
        const filtered = cData?.filter(
          (dataObj) =>
            dataObj?.actionReason?.toLowerCase() ===
            triggerFilter?.toLowerCase()
        );
        cData = filtered;
      }
      setFilteredData(cData);
    }
  }, [
    pendingTab,
    searched,
    riskFilter,
    triggerFilter,
    pendingData,
    completedData,
  ]);

  return (
    <div className="monitor">
      <h1>Monitoring</h1>

      <div className="tabsContainer">
        <div className="tabs">
          <p
            className={pendingTab ? "selected" : ""}
            onClick={() => {
              setPendingTab(true);
              setFilteredData([]);
              setTriggerFilter("");
              setRiskFilter("");
              setSearched("");
            }}
          >
            Pending
          </p>

          <p
            className={!pendingTab ? "selected" : ""}
            onClick={() => {
              setPendingTab(false);
              setFilteredData([]);
              setTriggerFilter("");
              setRiskFilter("");
              setSearched("");
            }}
          >
            Completed
          </p>
        </div>
        <div
          className="closeAccountButton"
          onClick={() => {
            setShowModal(true);
          }}
        >
          <MdHighlightOff size={"1.6rem"} className="closeIcon" />
          <p>Close account</p>
        </div>
      </div>

      <Filters
        searched={searched}
        setSearched={setSearched}
        triggers={triggerFilter}
        setTriggerFilter={setTriggerFilter}
        risks={riskFilter}
        setRiskFilter={setRiskFilter}
        triggerOptions={triggerOptions}
        riskOptions={riskOptions}
      />

      {pendingTab ? (
        <PendingTable data={filteredData ? filteredData : []} />
      ) : (
        <CompleteTable data={filteredData ? filteredData : []} />
      )}

      {showModal && <Modal setShow={setShowModal} />}
    </div>
  );
}

export default Monitoring;
