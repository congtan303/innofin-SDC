import React from "react";
import SwipeButton from "react-swipezor";

const SwipeBtn = () => {
  return (
    <SwipeButton
      mainText="Swipe me"
      overlayText="S I K E"
      classList="my-class"
      caretClassList="my-caret-class"
      overlayClassList="my-overlay-class"
      onSwipeDone={function () {
        console.log("Done!");
      }}
    />
  );
};

export default SwipeBtn;