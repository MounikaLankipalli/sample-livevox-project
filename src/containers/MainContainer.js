import React, { useState } from "react";
import { useSelector } from "react-redux";

import ScreenOneContainer from "./ScreenOneContainer";
import ScreenTwoContainer from "./ScreenTwoContainer";

function MainContainer() {
  const [showScreenTwo, setShowScreenTwo] = useState(false);
  const storeData = useSelector((state) => state);
  console.log("Store Date", storeData);

  if (showScreenTwo) {
    return <ScreenTwoContainer />;
  } else {
    return <ScreenOneContainer navigateTo={() => setShowScreenTwo(true)} />;
  }
}

export default MainContainer;
