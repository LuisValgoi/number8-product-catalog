import React from 'react';

export default function ProductDetailLayout({ leftLayout, middleLayout, rightLayout }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }}>
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '5px', marginRight: '5px' }}>{leftLayout}</div>
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '5px', marginRight: '5px' }}>{middleLayout}</div>
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '5px', marginRight: '5px' }}>{rightLayout}</div>
    </div>
  );
}
