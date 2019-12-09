import React from "react";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-regular-svg-icons";

import { useData } from "../../context/dataContext";

import "./ReportButton.scss";

interface ReportButtonPropsType {
  tip: Tip;
}

const ReportButton = ({ tip }: ReportButtonPropsType) => {
  const data = useData();

  const onClick = () => {
    data.setSelectedTip(tip);
    $("#reportModal").modal();
  };

  return (
    <span
      onClick={onClick}
      className="report-flag"
      data-toggle="tooltip"
      data-placement="top"
      title="melden"
    >
      <FontAwesomeIcon className="report-btn" icon={faFlag} size="sm" />
    </span>
  );
};

export default ReportButton;
