import React from "react";
import { IconComponent } from "@shared/ui";

const iconClassnameByTheme =
  "first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent";
const RocketComponent = () => {

  return (
    <button className="absolute bottom-[5.375rem] left-[10.5rem] w-10 p-2 t-xs:bottom-2 t-xs:left-6">
      <IconComponent name="rocket" className={iconClassnameByTheme} />
    </button>
  );
};

export default RocketComponent;