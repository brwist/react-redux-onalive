// @flow
import React from 'react';
import type { Node } from 'react';

import './Steps.scss';
import Heading from '../Heading/Heading';

type Props = {
  steps: Array<{
    title: string,
    subheader?: Node,
    count?: number,
    content: Node,
  }>,
  activeTab: number,
};

const Steps = ({ steps, activeTab }: Props) => {
  return (
    <div className="steps-container">
      {steps.length > 1 && (
        <div className="steps-container__tabs-wrapper">
          <div className="steps-container__tabs">
            {steps.map(({ title }, index) => (
              <div
                key={title}
                className={`steps-container__tab${
                  activeTab === index ? ' steps-container__tab--active' : ''
                }`}
                role="menuitem"
              >
                {index + 1}. {title}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="steps-container__header-wrapper">
        <Heading
          text={steps[activeTab].title}
          size="medium"
          color="white"
          type="h2"
        />
      </div>

      {steps[activeTab].subheader}

      <div>{steps[activeTab].content}</div>
    </div>
  );
};

export default Steps;
