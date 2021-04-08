import React from 'react';

import { Button, ButtonDesign, Title, TitleLevel } from '@ui5/webcomponents-react';

const RightLayout = ({ product, onClickAddToCart }) => (
  <>
    <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
      <Title level={TitleLevel.H2}>{`$ ${product.Price}`}</Title>
      <Title level={TitleLevel.H6}>{`$ ${product.RetailPrice}`}</Title>
    </div>
    <div />
    <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', flexGrow: 1 }}>
      <Button style={{ marginTop: '5px', marginBottom: '5px' }} design={ButtonDesign.Negative}>
        Out Of Stock
      </Button>
      <Button design={ButtonDesign.Emphasized} onClick={onClickAddToCart}>
        Add to Cart
      </Button>
    </div>
  </>
);

export default RightLayout;
