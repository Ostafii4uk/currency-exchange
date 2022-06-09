import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Tabs.scss';

export const Tabs: React.FC<Tabs> = React.memo(({
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
