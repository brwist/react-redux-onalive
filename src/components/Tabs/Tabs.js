// @flow
import React, { useState } from 'react';
import type { Node } from 'react';

import './Tabs.scss';

type Props = {
  tabs: Array<{
    title: string,
    count?: number,
    content: Node,
  }>,
};

const Tabs = ({ tabs }: Props) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="tabs-container">
      {tabs.length > 1 && (
        <div className="tabs-container__tabs">
          {tabs.map(({ title, count }, index) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus
            <div
              key={title}
              className={`tabs-container__tab${
                activeTabIndex === index ? ' tabs-container__tab--active' : ''
              }`}
              // eslint-disable-next-line react/jsx-no-bind
              onClick={() => {
                setActiveTabIndex(index);
              }}
              role="menuitem"
            >
              {title}
              {count ? (
                <div className="tabs-container__tab-count">{count}</div>
              ) : null}
            </div>
          ))}
        </div>
      )}
      <div>{tabs[activeTabIndex].content}</div>
    </div>
  );
};

export default Tabs;
