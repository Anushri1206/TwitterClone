import React from "react";
import './SidebarOption.css';
function SidebarOption( {Icon} ) {

    return(
        <div className="sidebarOption">
            <Icon/>
            {/* <h2>{Icon}</h2> */}
        </div>
    );
  
}
export default SidebarOption;