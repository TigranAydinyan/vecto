import { useState } from "react";

import { SidebarElement } from "components";
import { USER_NAME, SIDEBAR_MENU, SETTINGS } from "constants";

export const LeftSidebar = () => {
  const [activeElement, setActiveElement] = useState();

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="user">
          <div className="user_info">
            <div className="avatar_field"></div>
            <div className="user_description">
              <p className="user_name">{USER_NAME}</p>
            </div>
          </div>
        </div>
        <div className="sidebar_menu">
          {SIDEBAR_MENU.map((element) => (
            <SidebarElement
              key={element.id}
              element={element}
              activeElement={activeElement}
              setActiveElement={setActiveElement}
            />
          ))}
        </div>
      </div>
      <div className="settings">
        {SETTINGS.map((item) => (
          <div key={item.id} className="settings_element">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  )
}