import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Cases from "./components/Cases";
import Clients from "./components/Clients";
import Documents from "./components/Documents";
import Emails from "./components/Emails";
import Chatbot from "./components/Chatbot";
import Settings from "./components/Settings";

function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard />;
      case "Cases":
        return <Cases />;
      case "Clients":
        return <Clients />;
      case "Documents":
        return <Documents />;
      case "Emails":
        return <Emails />;
      case "Chatbot":
        return <Chatbot />;
      case "Settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">{renderContent()}</main>
    </div>
  );
}

export default App;
