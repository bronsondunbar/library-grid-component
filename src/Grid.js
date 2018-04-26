import React from 'react';

import './style.css';

const GridComponent = ({ gridItems, gridItemColour, gridItemFill, gridItemBorder, gridItemBorderColour, gridItemAlignment }) => {

  let gridItemStyle = {
    background: gridItemFill,
    color: gridItemColour,
    border: gridItemBorder === true ? '1px solid' : 'none',
    'border-color': gridItemBorderColour,
    'justify-content': gridItemAlignment,
    'align-items': 'center'
  }

  const items = gridItems.map(function (item, index) {
    return (
      <div
        className="item"
        key={index}
        style={gridItemStyle} >
          {item.data}
      </div>
    );
  })

  return (
    <div>
      <div className="grid">
        {items}
      </div>
    </div>
  )
}

export default GridComponent;