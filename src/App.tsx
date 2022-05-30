import React from 'react';
import { Tabs } from './components/Tabs/Tabs';

import './App.scss';
import { Exchange } from './components/Exchange/Exchange';
import { Current } from './components/Current/Current';

const tabs: Tab[] = [
  { id: 'Exchange', title: 'Exchange', content: <Exchange /> },
  { id: 'Current', title: 'Current', content: <Current /> },
];

export const getTabById = (tabId: string) => (
  tabs.find(tab => tab.id === tabId)
);

const App: React.FC = React.memo(() => {
  return (
    <div className="App">
      <Tabs
        tabs={tabs}
      />
    </div>
  );
});

export default App;
