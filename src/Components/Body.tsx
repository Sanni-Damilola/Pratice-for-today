import React from "react";
import Herocomponent from "./Herocomponent";
import styled from "styled-components";
import Count_down from "./Count_down";
import Dps from "./Dps";
import Dps_props from "./Dps_props";
import Video from "./Video";
import Work from "./Work";
import Preview from "./Preview";

const Body = () => {
  return (
    <div>
      <Herocomponent />
      <Count_down />
      <Dps />
      <Dps_props />
      <Video />
      <Work />
      <Preview />
    </div>
  );
};

export default Body;
