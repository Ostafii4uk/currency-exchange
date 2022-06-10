import React from 'react';
import './App.scss';
import { Tabs } from './pages';
import { Exchange } from './components';
import { Current } from './components';

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
