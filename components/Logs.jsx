import { useState } from 'react';

const Logs = ({ tabs,tabContent, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='flex w-full flex-col justify-center outline outline-1 rounded-lg mt-2'>
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
      <div className="tab-content rounded-none font-poppins">
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
          border-radius: 0.5rem;
        }

        .active {
          background-color: #0d7377;
          border-radius: 0.5rem;
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
