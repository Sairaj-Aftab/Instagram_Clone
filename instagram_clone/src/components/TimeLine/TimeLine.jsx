import React from "react";
import TimeLineLeft from "../TimeLineLeft/TimeLineLeft";
import TimeLineRight from "../TimeLineRight/TimeLineRight";
import "./TimeLine.scss";

const TimeLine = () => {
  return (
    <div className="timeline">
      <div className="timeline-container">
        <div className="timeline-wraper">
          <div className="left">
            <TimeLineLeft />
          </div>
          <div className="right">
            <TimeLineRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
