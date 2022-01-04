import React from "react";
import './SidebarOption.css';
function SidebarOption( {active,Icon} ) {

    return(
        <div className={'sidebarOption ${active && "sidebarOption--active"}'}>
            <Icon/>
            {/* <h2>{Icon}</h2> */}
        </div>
    );
  
}
export default SidebarOption;