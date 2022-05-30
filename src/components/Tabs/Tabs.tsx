import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
};

export const Tabs: React.FC<Props> = React.memo(({
  tabs,
}) => {
  return (
    <>
      <div className='tabs'>
        {tabs.map(tab => (
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? 'white' : 'black',
              };
            }}
            className='tabs__link'
            key={tab.id}
            to={tab.id}
          >
            {tab.title}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </>
  );
});
