import React, { useState } from 'react';
import './TabIndexDemo.css';

const TabIndexDemo = () => {
  const [layout, setLayout] = useState('vertical');

  const handleLayoutChange = (e) => {
    setLayout(e.target.value);
  };

  const calculateTabIndex = (row, col) => {
    if (layout === 'vertical') {
      return col * 10 + row + 1;
    } else {
      return row * 10 + col + 1;
    }
  };

  return (
    <div className="tab-index-demo">
      <div className="layout-radio">
        <label>
          <input
            type="radio"
            value="vertical"
            checked={layout === 'vertical'}
            onChange={handleLayoutChange}
          />
          Vertical
        </label>
        <label>
          <input
            type="radio"
            value="horizontal"
            checked={layout === 'horizontal'}
            onChange={handleLayoutChange}
          />
          Horizontal
        </label>
      </div>
      <div className={`text-boxes ${layout}`}>
        {Array.from({ length: 10 }, (_, row) => (
          <div key={row} className="text-row">
            {Array.from({ length: 2 }, (_, col) => (
              <input class="col-xs-3" id="inputdefault"
                key={col}
                type="text"
                tabIndex={calculateTabIndex(row, col)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabIndexDemo;
