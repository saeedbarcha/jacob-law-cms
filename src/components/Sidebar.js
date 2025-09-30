import React from "react";

function Sidebar({ activeTab, setActiveTab }) {
  const tabs = [
    "Dashboard",
    "Cases",
    "Clients",
    "Documents",
    "Emails",
    "Chatbot",
    "Settings"
  ];

  return (
    <aside className="sidebar">
      <h2>Jacob Law CMS</h2>
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;