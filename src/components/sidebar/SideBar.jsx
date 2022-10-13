import React from "react";
import useWindowDimensions from "../../hooks/useWindowsDimensions";
import DesktopSidebar from "./DesktopSidebar";

import MobileDrawer from "./MobileDrawer";

const SideBar = () => {
  const { width } = useWindowDimensions();

  return <>{width > 480 ? <DesktopSidebar /> : <MobileDrawer />}</>;
};

export default SideBar;
