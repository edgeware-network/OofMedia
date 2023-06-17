import { useState } from 'react';

const Logs = ({ tabs,tabContent, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tab-switcher">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`tab font-poppins text-xl px-8  ${tab === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="tab-content font-poppins">
        {tabs.map((tab, index) => (
          <div
            key={tab}
            className={`tab-pane ${tab === activeTab ? 'active' : ''}`}
          >
            {tab === activeTab && tabContent[index] }
          </div>
        ))}
      </div>
      <style jsx>{`
        .tab {
          display: inline-block;
          cursor: pointer;
          background-color: grey;
          color: white;
        }

        .active {
          background-color: #0d7377;
        }

        .tab-pane {
          display: none;
        }

        .tab-pane.active {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default Logs;
