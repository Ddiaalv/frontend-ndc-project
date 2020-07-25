import * as React from 'react';
import './ItemFilters.scss';
import { getTypeImage } from './utils';
import { useState } from 'react';

interface ItemFiltersProps {
  itemTypes: string[];
  getItemName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getItemType: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ItemFilters: React.FC<ItemFiltersProps> = ({
  itemTypes,
  getItemName,
  getItemType,
}) => {
  const [bgColor, setBgColor] = useState({
    background: '',
  });

  return (
    <div className="ItemFilters">
      <input type="text" onChange={getItemName} />
      <div className="itemTypes">
        {itemTypes.map((itemType, index) => (
          <label
            htmlFor={`name${itemType}`}
            key={index}
            onClick={() => setBgColor({ ...bgColor, background: 'blue' })}
            style={bgColor}
          >
            <img
              src={`http://localhost:3010/img/items/${getTypeImage(itemType)}.png`}
              alt=""
            />
            <input
              type="checkbox"
              onChange={getItemType}
              value={itemType}
              id={`name${itemType}`}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

ItemFilters.displayName = 'ItemFilters';
