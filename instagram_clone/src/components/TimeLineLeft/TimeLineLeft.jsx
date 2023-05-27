import React from "react";
import PostSection from "../PostSection/PostSection";
import StorySection from "../StorySection/StorySection";
import "./TimeLineLeft.scss";

const TimeLineLeft = () => {
  return (
    <div className="timeline-left">
      <StorySection />
      <PostSection />
      <PostSection />
      <PostSection />
    </div>
  );
};

export default TimeLineLeft;
