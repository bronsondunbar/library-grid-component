import React from 'react'
import classNames from 'classnames'
import DOMPurify from 'dompurify'

import './style.css'

const GridComponent = ({ gridItems, gridItemMinWidth, gridItemLayout, gridItemColour, gridItemFill, gridItemBorder, gridItemBorderColour, gridItemBorderRadius, gridItemShadow, gridItemAlignment }) => {

  let gridClass = classNames ({
    grid: true,
    'grid-4x1': gridItemLayout == '4x1',
    'grid-3x1': gridItemLayout == '3x1',
    'grid-2x1': gridItemLayout == '2x1'
  })

  let gridItemLayoutStyle = {
    'gridTemplateColumns': gridItemLayout == '1x1' ? 'repeat(auto-fit, minmax(' + gridItemMinWidth + 'px, 1fr))' : null,
  }

  let gridItemStyle = {
    background: gridItemFill,
    color: gridItemColour,
    border: gridItemBorder === true ? '1px solid' : 'none',
    'borderColor': gridItemBorderColour,
    'justifyContent': gridItemAlignment,
    'alignItems': 'center',
    'borderRadius': gridItemBorderRadius + 'px',
    'minWidth': gridItemMinWidth + 'px',
    'boxShadow': gridItemShadow === true ? '0px 3px 5px 0px rgba(0, 0, 0, 0.22)' : 'none' 
  }

  const items = gridItems.map(function (item, index) {
    return (
      <div
        className="item"
        key={index}
        style={gridItemStyle}
        dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(item.data)}} >
      </div>
    )
  })

  return (
    <div>
      <div className={gridClass} style={gridItemLayoutStyle}>
        {items}
      </div>
    </div>
  )
}

export default GridComponent